// Gets all the procedures from data.

// Works with if_question???
//

for(var i= 0; i < questions.length; i++) {

  if(questions[i].type === "call-function") {

    console.log({type: "call-function", screen: i});

  } else if(questions[i].type === "preload") {

    console.log({type: "preload", screen: i});

  } else if(questions[i].type === "fullscreen") {

    console.log({type: "fullscreen", screen: i});

  } else if(questions[i].timeline !== undefined) {

    // Timeline where data is created by a function
    if (typeof questions[i].timeline[0].data === "function") {

      // TODO: add screen. trialid probably can't
      console.log(questions[i].timeline[0].data.toString().match(/procedure: '.*'/gm));

    } else {

      questions[i].timeline[0].data.screen = i;
      console.log(questions[i].timeline[0].data);

    }

  } else {

      questions[i].data.screen = i;
      console.log(questions[i].data);

  }

 }
