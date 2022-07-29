/**
 * jspsych-survey-multi-choice-CSCN-RMET
 * a jspsych plugin for multiple choice survey questions
 *
 * Shane Martin
 *
 * documentation: docs.jspsych.org
 *
 */

function stripHtml(html)
{
  var tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

jsPsych.plugins['survey-multi-choice-CSCN-RMET'] = (function() {

  var plugin = {};
  plugin.info = {
    name: 'survey-multi-choice-CSCN-RMET',
    description: '',
    parameters: {
      questions: {
        type: jsPsych.plugins.parameterType.COMPLEX,
        array: true,
        pretty_name: 'Questions',
        nested: {
          prompt: {type: jsPsych.plugins.parameterType.STRING,
                     pretty_name: 'Prompt',
                     default: undefined,
                     description: 'The strings that will be associated with a group of options.'},
          options: {type: jsPsych.plugins.parameterType.STRING,
                     pretty_name: 'Options',
                     array: true,
                     default: undefined,
                     description: 'Displays options for an individual question.'},
          required: {type: jsPsych.plugins.parameterType.BOOL,
                     pretty_name: 'Required',
                     default: false,
                     description: 'Subject will be required to pick an option for each question.'},
          horizontal: {type: jsPsych.plugins.parameterType.BOOL,
                        pretty_name: 'Horizontal',
                        default: false,
                        description: 'If true, then questions are centered and options are displayed horizontally.'},
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
        description: 'Label of the button.'
      }
    }
  }
  plugin.trial = function(display_element, trial) {
    var plugin_id_name = "jspsych-survey-multi-choice-CSCN-RMET";
    var plugin_id_selector = '#' + plugin_id_name;
    var _join = function( /*args*/ ) {
      var arr = Array.prototype.slice.call(arguments, _join.length);
      return arr.join(separator = '-');
    }

    // inject CSS for trial
    display_element.innerHTML = '<style id="jspsych-survey-multi-choice-CSCN-RMET-css"></style>';
    var cssstr = ".jspsych-survey-multi-choice-CSCN-RMET-question { margin-top: 2em; margin-bottom: 2em; text-align: left; }"+
      ".jspsych-survey-multi-choice-CSCN-RMET-text span.required {color: darkred;}"+
      ".jspsych-survey-multi-choice-CSCN-RMET-horizontal .jspsych-survey-multi-choice-CSCN-RMET-text {  text-align: center;}"+
      ".jspsych-survey-multi-choice-CSCN-RMET-option { line-height: 2; }"+
      ".jspsych-survey-multi-choice-CSCN-RMET-horizontal .jspsych-survey-multi-choice-CSCN-RMET-option {  display: inline-block;  margin-left: 1em;  margin-right: 1em;  vertical-align: top;}"+
      "label.jspsych-survey-multi-choice-CSCN-RMET-text input[type='radio'] {margin-right: 1em;}"

    display_element.querySelector('#jspsych-survey-multi-choice-CSCN-RMET-css').innerHTML = cssstr;

    // form element
    var trial_form_id = _join(plugin_id_name, "form");
    display_element.innerHTML += '<form id="'+trial_form_id+'"></form>';
    var trial_form = display_element.querySelector("#" + trial_form_id);
    // show preamble text
    var preamble_id_name = _join(plugin_id_name, 'preamble');
    if(trial.preamble !== null){
      trial_form.innerHTML += '<div id="'+preamble_id_name+'" class="'+preamble_id_name+'">'+trial.preamble+'</div>';
    }

    questions_list = {}

    // add multiple-choice questions
    for (var i = 0; i < trial.questions.length; i++) {
        // create question container
        var question_classes = [_join(plugin_id_name, 'question')];
        if (trial.questions[i].horizontal) {
          question_classes.push(_join(plugin_id_name, 'horizontal'));
        }

        questions_list["Q".concat(i.toString())] = trial.questions[i].prompt;

        trial_form.innerHTML += '<div id="'+_join(plugin_id_name, i)+'" class="'+question_classes.join(' ')+'"></div>';

        var question_selector = _join(plugin_id_selector, i);

        // add question text
        display_element.querySelector(question_selector).innerHTML += '<p class="' + plugin_id_name + '-text survey-multi-choice">' + trial.questions[i].prompt + '</p>';

      // create option radio buttons
      for (var j = 0; j < trial.questions[i].options.length; j++) {
        var option_id_name = _join(plugin_id_name, "option", i, j),
        option_id_selector = '#' + option_id_name;

        // add radio button container
        display_element.querySelector(question_selector).innerHTML += '<div id="'+option_id_name+'" class="'+_join(plugin_id_name, 'option')+'"></div>';

        // add label and question text
        var form = document.getElementById(option_id_name)
        var input_name = _join(plugin_id_name, 'response', i);
        var input_id = _join(plugin_id_name, 'response', i, j);
        var label = document.createElement('label');
        label.setAttribute('class', plugin_id_name+'-text');
        label.setAttribute('style', 'display: inline');

        //console.log((trial.questions[i].options[j].slice(0, -1) + "O/A").replace(/\&nbsp;/g, ''))

        // modificacion para tarea de miradas:
        // label.innerHTML = trial.questions[i].options[j];
        if (trial.questions[i].options[j].replace(/\&nbsp;/g, '') in definitions) {
          tooltip = definitions[trial.questions[i].options[j].replace(/\&nbsp;/g, '')];
        } else if ( ((trial.questions[i].options[j].slice(0, -1) + "O/A").replace(/\&nbsp;/g, '')) in definitions) {
          tooltip = definitions[((trial.questions[i].options[j].slice(0, -1) + "O/A").replace(/\&nbsp;/g, ''))];
        } else if ((trial.questions[i].options[j]).replace(/\&nbsp;/g, '') == "LLENO DE ODIO") {
          tooltip = definitions["LLENO/A DE ODIO"];
        } else {
          tooltip = "";
        }

        // JUGUETÓN/A, TRANQUILIZADOR/A

        label.innerHTML = trial.questions[i].options[j] + " " + "<div class=tooltip>" + "(?)" + '<span class="tooltiptext">' + tooltip + '</div>';
        label.setAttribute('for', input_id)

        //console.log(label);

        // create radio button
        var input = document.createElement('input');
        input.setAttribute('type', "radio");
        input.setAttribute('name', input_name);
        input.setAttribute('id', input_id);
        input.setAttribute('value', trial.questions[i].options[j]);
        form.appendChild(label);
        form.insertBefore(input, label);

      }

      if (trial.questions[i].required) {
        // add "question required" asterisk
        //modificacion display_element.querySelector(question_selector + " p").innerHTML += "<span class='required'>*</span>";

        // add required property
        display_element.querySelector(question_selector + " input[type=radio]").required = true;
      }
    }
    // add submit button
    //modificacion
    trial_form.innerHTML += "<p>"
    //modificacion
    trial_form.innerHTML += '<input type="submit" id="'+plugin_id_name+'-next" class="'+plugin_id_name+' jspsych-btn"' + (trial.button_label ? ' value="'+trial.button_label + '"': '') + '></input>';
    //modificacion
    trial_form.innerHTML += "<p>"
    //modificacion

    trial_form.addEventListener('submit', function(event) {
      event.preventDefault();
      var matches = display_element.querySelectorAll("div." + plugin_id_name + "-question");
      // measure response time
      var endTime = (new Date()).getTime();
      var response_time = endTime - startTime;

      // create object to hold responses
      var question_data = {};
      var matches = display_element.querySelectorAll("div." + plugin_id_name + "-question");
      for(var i=0; i<matches.length; i++){
        match = matches[i];
        var id = "Q" + i;
        if(match.querySelector("input[type=radio]:checked") !== null){
          var val = match.querySelector("input[type=radio]:checked").value;
        } else {
          var val = "";
        }
        var obje = {};
        obje[id] = val;
        Object.assign(question_data, obje);
      }
      // save data
      var trial_data = {
        "stimulus": stripHtml(JSON.stringify(questions_list)),
        "rt": response_time,
        "response": stripHtml(JSON.stringify(question_data))
      };
      display_element.innerHTML = '';

      // next trial
      jsPsych.finishTrial(trial_data);
    });

    var startTime = (new Date()).getTime();
  };

  return plugin;
})();
