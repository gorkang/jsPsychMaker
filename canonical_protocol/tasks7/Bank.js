/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('Bank') );
Bank = [];    //temporal timeline

var instruction_screen_experiment = {
  type: jsPsychInstructions,
  pages: ['<p><left>' +
  '<p><left><b><big>Datos Bancarios</big></b><br />'+'Con el fin de efectuar el pago de tu participación vía transferencia electrónica, te pedimos responder las siguientes preguntas' +'</p>'],
  data: {trialid: 'Instructions', procedure: 'Bank'},
  show_clickable_nav: true,
  on_trial_start: function(){
    bloquear_enter = 0;
  }
};

var question01 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">Indique su nombre completo</div>', required: true}],
  data: {trialid: 'Bank_01', procedure: 'Bank'}
};
Bank.push(question01);

var question02 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">Indique su rut , sin puntos ni guión y con dígito verificador</div>', input_type: 'number', min: 10000000, max: 999999999, required: true}],
  data: {trialid: 'Bank_02', procedure: 'Bank'},
  on_load: function () {
    input_reload();
  }
};
Bank.push(question02);

var question03 = {
  type: jsPsychSurveyHtmlForm,
  preamble: '<div class="justified">Seleccione su Banco</div>', html: '<input name ="Q0" list="tipo" required><datalist id="tipo"> <option value="BANCO SANTANDER"> <option value="BANCO SANTANDER BANEFE"> <option value="BANCO ITAU"> <option value="BCI-TBANC"> <option value="BANCO FALABELLA"> <option value="CORPBANCA"> <option value="BANCO DE CHILE / EDWARDS CITI"> <option value="BANCOESTADO"> <option value="BANCO BICE"> <option value="BANCO SECURITY"> <option value="BANCO CONSORCIO"> <option value="BANCO RIPLEY"> <option value="BANCO INTERNACIONAL"> <option value="SCOTIABANK"> <option value="COOPEUCH"> </datalist>',
  data: {trialid: 'Bank_03', procedure: 'Bank'}
};
Bank.push(question03);

var question04 = {
  type: jsPsychSurveyHtmlForm,
  preamble: '<div class="justified">Elija el tipo de cuenta</div>', html: '<input name ="Q0" list="tipo" required><datalist id="tipo"> <option value="Cuenta Corriente"> <option value="Cuenta de ahorro"> <option value="Cuenta Vista"> <option value="Chequera electrónica"> <option value="Cuenta Rut"> </datalist>',
  data: {trialid: 'Bank_04', procedure: 'Bank'}
};
Bank.push(question04);

var question05 = {
  type: jsPsychSurveyText,
  questions: [{prompt: '<div class="justified">Indique número de cuenta</div>', input_type: 'number', required: true}],
  data: {trialid: 'Bank_05', procedure: 'Bank'}
};
Bank.push(question05);

var question06 = {
  type: jsPsychSurveyHtmlForm,
  preamble: '<div class="justified">Indique su correo electrónico</div>', html: '<input name ="Q0" type="email" required>',
  data: {trialid: 'Bank_06', procedure: 'Bank'}
};
Bank.push(question06);

Bank.unshift(instruction_screen_experiment);
questions.push.apply(questions, Bank)

call_function("Bank");
