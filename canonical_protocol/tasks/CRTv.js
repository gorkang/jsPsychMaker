/**
 * CSCN lab
/**
This document was made with test_maker
*/

onkeydown = function block_fkeys(event){
    var x = event.which || event.keyCode;
    if(x == 112 || x == 116){
        console.log("Blocked key");
        event.preventDefault();
        return false;
    }else{
        return;
    }
}

questions = ( typeof questions != 'undefined' && questions instanceof Array ) ? questions : [];

CRTv = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>CRTv</big></b><br />'+
    'En las siguientes páginas vas a ver varios ítems que difieren en dificultad. Responde todos los que puedas.' +'</p>'],
    data:{trialid: 'Instructions_01', procedure: 'CRTv'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>1. El papá de María tiene 5 hijas y ningún hijo: Nana, Nene, Nini, Nono ¿Cuál es probablemente el nombre de la quinta hija?</div>", type: 'text', required: true}],
  data: {trialid: 'CRTv_01', procedure: 'CRTv'}
};
CRTv.push(question01);

var question02 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>2. Si estuvieras corriendo una carrera y pasaras a la persona en segundo lugar ¿En qué lugar quedarías?</div>", type: 'text', required: true}],
  data: {trialid: 'CRTv_02', procedure: 'CRTv'}
};
CRTv.push(question02);

var question03 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>3. En una noche de tormenta un avión despega desde Nueva York. La tormenta empeora y el avión se estrella. La mitad cae en los Estados Unidos y la otra mitad en Canadá ¿En qué país enterrarías a los sobrevivientes?</div>", type: 'text', required: true}],
  data: {trialid: 'CRTv_03', procedure: 'CRTv'}
};
CRTv.push(question03);

var question04 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>4. Un mono, una ardilla, y un pájaro están haciendo una carrera hacia la punta de un manzano ¿Quién obtendrá el plátano primero? ¿El mono, la ardilla o el pájaro?</div>", type: 'text', required: true}],
  data: {trialid: 'CRTv_04', procedure: 'CRTv'}
};
CRTv.push(question04);

var question05 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>5. En una casa de un piso color rojo, había una persona roja, un gato rojo, un pez rojo, un computador rojo, una silla roja, una tabla roja, un teléfono rojo, una ducha roja ¡Todo era de color rojo! ¿De qué color son probablemente las escaleras?</div>", type: 'text', required: true}],
  data: {trialid: 'CRTv_05', procedure: 'CRTv'}
};
CRTv.push(question05);

var question06 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>6. ¿Qué número de cada animal puso Moisés en el arca?</div>", type: 'text', required: true}],
  data: {trialid: 'CRTv_06', procedure: 'CRTv'}
};
CRTv.push(question06);

var question07 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>7. El viento fluye en dirección oeste. Un tren eléctrico viaja hacia el este ¿En qué dirección cardinal viaja el humo de la locomotora?</div>", type: 'text', required: true}],
  data: {trialid: 'CRTv_07', procedure: 'CRTv'}
};
CRTv.push(question07);

var question08 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>8. Si tienes solo un fósforo y caminas a una habitación oscura donde hay aceite de lámpara, un periódico y madera ¿Qué cosa prenderías primero?</div>", type: 'text', required: true}],
  data: {trialid: 'CRTv_08', procedure: 'CRTv'}
};
CRTv.push(question08);

var question09 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>9. ¿Sería ético que un hombre se casara con la hermana de su viuda?</div>", type: 'text', required: true}],
  data: {trialid: 'CRTv_09', procedure: 'CRTv'}
};
CRTv.push(question09);

var question10 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>10. ¿Cuál de las oraciones es correcta? a) ‘La yema del huevo son blancas’ o b) ‘La yema del huevo es blanca’</div>", type: 'text', required: true}],
  data: {trialid: 'CRTv_10', procedure: 'CRTv'}
};
CRTv.push(question10);

CRTv.unshift(instruction_screen_experiment);
questions.push.apply(questions, CRTv)

questions.push({
    type: 'call-function',
    func: function(){
      if (online) {
        var data = jsPsych.data.get().filter({procedure: 'CRTv'}).csv();
      } else {
        var data = jsPsych.data.get().filter({procedure: 'CRTv'}).json();
      }
      saveData(data, online, 'CRTv');
    },
    procedure: 'CRTv'
});
