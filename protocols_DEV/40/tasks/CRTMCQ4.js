/* CSCN - Created with jsPsychMaker: https://github.com/gorkang/jsPsychMaker */


// Translations --------------------------------------------------------------
switch (language) {

  case "Spanish":

    CRTMCQ4_00 = ['<p><left><b><big>CRTMCQ4</big></b><br />'+
    'Verás algunas preguntas que varían en dificultad. Por favor, marca la alternativa que te parezca correcta.' +'</p>'];

    CRTMCQ4_01_prompt = '<div class="justified">Un bate y una pelota cuestan  $1.100 en total. El bate cuesta $1.000 más que la pelota ¿Cuánto cuesta la pelota? </div>';
    CRTMCQ4_01_options = ['&nbsp;50 pesos', '&nbsp;100 pesos', '&nbsp;90 pesos', '&nbsp;10 pesos']

    CRTMCQ4_02_prompt = '<div class="justified">Si 5 máquinas se demoran 5 minutos en hacer 5 audífonos ¿Cuánto tiempo se demorarían 100 máquinas en hacer 100 audífonos?</div>';
    CRTMCQ4_02_options = ['&nbsp;5 minutos', '&nbsp;100 minutos', '&nbsp;20 minutos', '&nbsp;500 minutos']


    CRTMCQ4_03_prompt = '<div class="justified">Parte de la superficie de un lago está cubierta con hojas de lirio. Esta parte, se dobla en tamaño cada día. Si las hojas de lirio demoran 48 días en cubrir el lago completo ¿Cuántos días tardarían en cubrir la mitad del lago?</div>'
    CRTMCQ4_03_options = ['&nbsp;47 días', '&nbsp;24 días', '&nbsp;12 días', '&nbsp;36 días'];

    CRTMCQ4_04_prompt = '<div class="justified">Si José puede tomar un barril de agua en 6 días y María puede tomar un barril de agua en 12 días ¿Cuánto se demorarían ambos en tomar un barril de agua juntos?</div>';
    CRTMCQ4_04_options = ['&nbsp;4 días', '&nbsp;9 días', '&nbsp;12 días', '&nbsp;3 días'];
    
    CRTMCQ4_05_prompt = '<div class="justified">Pedro recibió la quinceava nota más alta y la quinceava nota más baja en su clase ¿Cuántos estudiantes hay en su clase?</div>';
    CRTMCQ4_05_options = ['&nbsp;29 estudiantes', '&nbsp;30 estudiantes', '&nbsp;1 estudiante', '&nbsp;15 estudiantes'];
    
    CRTMCQ4_06_prompt = '<div class="justified">Un hombre compra un cerdo a $60.000, lo vende a $70.000, lo compra de nuevo por $80.000, y lo vuelve a vender finalmente por $90.000 ¿Cuánta plata ha ganado?</div>';
    CRTMCQ4_06_options = ['&nbsp;$20.000', '&nbsp;$10.000', '&nbsp;$0', '&nbsp;$30.000'];
    
    CRTMCQ4_07_prompt = '<div class="justified">Simón decide invertir $8.000.000 en el mercado de acciones un día a inicios de 2008. Seis meses después de haber invertido, el 17 de julio, las acciones que había comprado bajaron 50%. Afortunadamente para Simón, desde el 17 de julio hasta el 17 de octubre, las acciones que compró subieron 75%. En este punto, Simón:</div>';
    CRTMCQ4_07_options = ['&nbsp;ha ganado dinero.', '&nbsp;ha perdido dinero.', '&nbsp;no ha ganado ni perdido dinero.', '&nbsp;no se puede determinar.'];
    break;


  case "English":

    CRTMCQ4_00 = ['<p><left><b><big>CRTMCQ4</big></b><br />'+
     'You will see some questions that vary in difficulty. Please, mark the alternative that seems correct to you.' +'</p>'];

    CRTMCQ4_01_prompt = 'A bat and a ball cost £1.10 in total. The bat costs £1.00 more than the ball. How much does the ball cost?';
    CRTMCQ4_01_options = ['&nbsp;5 pence', '&nbsp;10 pence', '&nbsp;9 pence', '&nbsp;1 pence'];

    CRTMCQ4_02_prompt = 'If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?';
    CRTMCQ4_02_options = ['&nbsp;5 minutes', '&nbsp;100 minutes', '&nbsp;20 minutes', '&nbsp;500 minutes'];

    CRTMCQ4_03_prompt = 'In a lake, there is a patch of lily pads. Every day, the patch doubles in size. If it takes 48 days for the patch to cover the entire lake, how long would it take for the patch to cover half of the lake? ';
    CRTMCQ4_03_options = ['&nbsp;47 days', '&nbsp;24 days', '&nbsp;12 days', '&nbsp;36 days'];

    CRTMCQ4_04_prompt = 'If John can drink one barrel of water in 6 days, and Mary can drink one barrel of water in 12 days, how long would it take them to drink one barrel of water together?';
    CRTMCQ4_04_options = ['&nbsp;4 days', '&nbsp;9 days', '&nbsp;12 days', '&nbsp;3 days'];
    
    CRTMCQ4_05_prompt = 'Jerry received both the 15th highest and the 15th lowest mark in the class. How many students are in the class?';
    CRTMCQ4_05_options = ['&nbsp;29 students', '&nbsp;30 students', '&nbsp;1 student', '&nbsp;15 students'];
    
    CRTMCQ4_06_prompt = 'A man buys a pig for £60, sells it for £70, buys it back for £80, and sells it finally for £90. How much has he made? ';
    CRTMCQ4_06_options = ['&nbsp;20 pounds', '&nbsp;10 pounds', '&nbsp;0 pounds', '&nbsp;30 pounds'];
    
    CRTMCQ4_07_prompt = 'Simon decided to invest £8,000 in the stock market one day early in 2008.  Six months after he invested, on July 17, the stocks he had purchased were down 50%. Fortunately for Simon, from July 17 to October 17, the stocks he had purchased went up 75%. At this point, Simon:';
    CRTMCQ4_07_options = ['&nbsp;has lost money.', '&nbsp;is ahead of where he began.', '&nbsp;has broken even in the stock market.', '&nbsp;it cannot be determined.'];
    break;

}



// Task -----------------------------------------------------------------------

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];
questions.push( check_fullscreen('CRTMCQ4') );

CRTMCQ4 = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: CRTMCQ4_00,
    data: {trialid: 'CRTMCQ4_00', procedure: 'CRTMCQ4'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: CRTMCQ4_01_prompt, 
  options: CRTMCQ4_01_options, random_options: true, required: true, horizontal: false}],
  data: {trialid: 'CRTMCQ4_01', procedure: 'CRTMCQ4'}
};
CRTMCQ4.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: CRTMCQ4_02_prompt, 
  options: CRTMCQ4_02_options, random_options: true, required: true, horizontal: false}],
  data: {trialid: 'CRTMCQ4_02', procedure: 'CRTMCQ4'}
};
CRTMCQ4.push(question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: CRTMCQ4_03_prompt, 
  options: CRTMCQ4_03_options, random_options: true, required: true, horizontal: false}],
  data: {trialid: 'CRTMCQ4_03', procedure: 'CRTMCQ4'}
};
CRTMCQ4.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: CRTMCQ4_04_prompt, 
  options: CRTMCQ4_04_options, random_options: true, required: true, horizontal: false}],
  data: {trialid: 'CRTMCQ4_04', procedure: 'CRTMCQ4'}
};
CRTMCQ4.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: CRTMCQ4_05_prompt, 
  options: CRTMCQ4_05_options, random_options: true, required: true, horizontal: false}],
  data: {trialid: 'CRTMCQ4_05', procedure: 'CRTMCQ4'}
};
CRTMCQ4.push(question05);

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: CRTMCQ4_06_prompt, 
  options: CRTMCQ4_06_options, random_options: true, required: true, horizontal: false}],
  data: {trialid: 'CRTMCQ4_06', procedure: 'CRTMCQ4'}
};
CRTMCQ4.push(question06);

var question07 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: CRTMCQ4_07_prompt, 
  options: CRTMCQ4_07_options, random_options: true, required: true, horizontal: false}],
  data: {trialid: 'CRTMCQ4_07', procedure: 'CRTMCQ4'}
};
CRTMCQ4.push(question07);

CRTMCQ4.unshift(instruction_screen_experiment);
questions.push.apply(questions, CRTMCQ4);
call_function("CRTMCQ4");


