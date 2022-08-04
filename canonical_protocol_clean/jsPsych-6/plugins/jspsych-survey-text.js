/**
 * jspsych-survey-text
 * a jspsych plugin for free response survey questions
 *
 * Josh de Leeuw
 *
 * documentation: docs.jspsych.org
 *
 */

function isNumeric(str)
{
  if (typeof str != "string") return false // we only process strings!
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

function stripHtml(html)
{
  var tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

jsPsych.plugins['survey-text'] = (function() {
  var plugin = {};

  plugin.info = {
    name: 'survey-text',
    description: '',
    parameters: {
      questions: {
        type: jsPsych.plugins.parameterType.COMPLEX,
        array: true,
        pretty_name: 'Questions',
        default: undefined,
        nested: {
          prompt: {
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'Prompt',
            default: undefined,
            description: 'Prompts for the subject to response'
          },
          type: {
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'Type',
            default: "text",
            description: 'The type of answer (range, date, text, number, textarea)'
          },
          language: {
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'Language',
            default: "spanish",
            description: 'Language of fail-message'
          },
          error_text: {
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'ErrorText',
            default: "No puedes dejar la pregunta sin responder",
            description: 'Especific text of fail-message'
          },
          value: {
            type: jsPsych.plugins.parameterType.STRING,
            pretty_name: 'Value',
            array: true,
            default: '',
            description: 'The strings will be used to populate the response fields with editable answers.'
          },
          rows: {
            type: jsPsych.plugins.parameterType.INT,
            pretty_name: 'Rows',
            array: true,
            default: 1,
            description: 'The number of rows for the response text box.'
          },
          columns: {
            type: jsPsych.plugins.parameterType.INT,
            pretty_name: 'Columns',
            array: true,
            default: 40,
            description: 'The number of columns for the response text box.'
          },
          range: {
            type: jsPsych.plugins.parameterType.INT,
            pretty_name: 'Range',
            array: true,
            default: [-Infinity, Infinity],
            description: 'The range of int.'
          },
          required: {
            type: jsPsych.plugins.parameterType.BOOL,
            pretty_name: 'Required',
            default: false,
            description: 'If true, the text box needs a answer.',
          }
        }
      },
      preamble: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Preamble',
        default: null,
        description: 'HTML formatted string to display at the top of the page above all the questions.'
      },
      button_label: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        description: 'The text that appears on the button to finish the trial.'
      },
      endword: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Input unit',
        default: '',
        description: 'The unit of the input.'
      }
    }
  }

  plugin.trial = function(display_element, trial) {

    if (typeof trial.questions[0].rows == 'undefined') {
      trial.questions[0].rows = [];
      for (var i = 0; i < trial.questions.length; i++) {
        trial.questions[i].rows.push(1);
      }
    }
    if (typeof trial.questions[0].columns == 'undefined') {
      trial.questions[0].columns = [];
      for (var i = 0; i < trial.questions.length; i++) {
        trial.questions[i].columns.push(40);
      }
    }
    if (typeof trial.questions[0].value == 'undefined') {
      trial.questions[0].value = [];
      for (var i = 0; i < trial.questions.length; i++) {
        trial.questions[i].value.push("");
      }
    }
    if (typeof trial.questions[0].language == 'undefined') {
      for (var i = 0; i < trial.questions.length; i++)
        trial.questions[i].language = "spanish";
    }
    if (typeof trial.questions[0].endword == 'undefined') {
      for (var i = 0; i < trial.questions.length; i++)
        trial.questions[i].endword = "";
    }

    var html = '<br /><p><br />';
    // show preamble text
    if(trial.preamble !== null){
      html += '<div id="jspsych-survey-text-preamble" class="jspsych-survey-text-preamble">'+trial.preamble+'</div>';
    }

    questions_list = {}

    // add questions
    for (var i = 0; i < trial.questions.length; i++) {
      // define the min and max of a question with range
      if (typeof trial.questions[i].range == 'undefined') {
        var min = -Infinity;
        var max = Infinity;
      } else {
        var min = trial.questions[i].range[0]
        var max = trial.questions[i].range[1]
      }

      if (typeof trial.questions[i].type == 'undefined') {
        trial.questions[i].type = "text"
      }

      questions_list["Q".concat(i.toString())] = trial.questions[i].prompt;

      html += '<div id="jspsych-survey-text-' + i + '" class="jspsych-survey-text-question" style="margin: 2em 0em;">';
      html += '<p class="jspsych-survey-text">' + trial.questions[i].prompt;
      if (trial.questions[i].type == "textarea") {
        html += '</p><textarea type="' + trial.questions[0].type + '" name="#jspsych-survey-' + trial.questions[0].type + '-response-' + i;
      } else if (trial.questions[i].type == "range"){
        html += '</p><input type="' + 'number' + '" name="#jspsych-survey-' + 'number' + '-response-' + i + '" min ="' + min + '" max ="' + max;
      } else {
        html += '</p><input type="' + trial.questions[0].type + '" name="#jspsych-survey-' + trial.questions[0].type + '-response-' + i;
      }
      if(trial.questions[i].rows == 1){
        html += '" size="' + trial.questions[i].columns;
      } else {
        html += '" cols="' + trial.questions[i].columns + '" rows="' + trial.questions[i].rows;
      }

      html += '" value="' + trial.questions[i].value + '"';

      if (i == 0){
        html += ' autofocus';
      }

      if (trial.questions[i].type == "textarea") {
        html += '></textarea><p></p></div>';
      } else {
        html += '></input>' + trial.questions[i].endword + '<p></p></div>';
      }

    }

    // add submit button
    html += '<button id="jspsych-survey-text-next" class="jspsych-btn jspsych-survey-text">'+trial.button_label+'</button><p></p>';
    html += '<div class="fail-message"></div>';
    display_element.innerHTML = html;

    // Focus on first box
    if (trial.questions[0].type == 'range')
      var firstBox = document.getElementsByName('#jspsych-survey-'+ 'number' +'-response-0')[0];
    else
      var firstBox = document.getElementsByName('#jspsych-survey-'+ trial.questions[0].type +'-response-0')[0];
    firstBox.focus();

    display_element.querySelector('#jspsych-survey-text-next').addEventListener('click', function(event) {
      // measure response time
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;

      // create object to hold responses
      var question_data = {};
      var matches = display_element.querySelectorAll('div.jspsych-survey-text-question');

      let validation_list = [];

      for(var index=0; index<matches.length; index++){
        var id = "Q" + index;
        var val = matches[index].querySelector('textarea, input').value;
        var obje = {};

        if (trial.questions[index].type == 'range')
          var textBox = document.getElementsByName('#jspsych-survey-'+ 'number' +'-response-' + [index])[0];
        else
          var textBox = document.getElementsByName('#jspsych-survey-'+ trial.questions[index].type +'-response-' + [index])[0];

        var validation = true;
        var val = matches[index].querySelector('textarea, input').value;

        if (trial.questions[index].required != 'undefined'){
          required = trial.questions[index].required;
        }
        else
          required = false;

        pass = true
        if ((val == "") && required)
          pass = false
        // next trial and check if is a valid element
        if (trial.questions[index].type == "number" || trial.questions[index].type == "range")
          validation = isNumeric(val) === true && val <= max && val >= min;

        if (trial.questions[index].type == 'text')
          validation = !isNumeric(val) && !isNumeric(val.replace(/\s/g, ""));

        if (validation && pass) {
          obje[id] = val;
          Object.assign(question_data, obje);
          validation_list.push(true);
        } else {
          textBox.blur();
          textBox.focus();
          var message = '';
          if (typeof trial.questions[index].error_text == 'undefined') {
            if (trial.questions[index].language == "english")
              message = 'Please, verify your answer.';
            else if (trial.questions[index].language == "spanish")
              message = 'Por favor, verifique su respuesta.';
          } else {
            message = trial.questions[index].error_text;
          }
          display_element.querySelector(".fail-message").innerHTML = '<span style="color: red;" class="required">' + message +'</span>';
          event.stopPropagation();
          if (event.stopPropagation) {
            event.stopPropagation();
          } else{
            event.cancelBubble = true;
          }
          validation_list.push(false);
        }
      }

      if (validation_list.every(element => element)) {
        // save data
        var trialdata = {
          "stimulus": stripHtml(JSON.stringify(questions_list)),
          "rt": response_time,
          "response": stripHtml(JSON.stringify(question_data))
        };

        display_element.innerHTML = '';
        jsPsych.pluginAPI.clearAllTimeouts();
        jsPsych.finishTrial(trialdata);
      }
    });

    var startTime = (new Date()).getTime();
  };

  return plugin;
})();
