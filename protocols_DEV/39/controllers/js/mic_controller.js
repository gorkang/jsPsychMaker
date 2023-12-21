var BASE64_MARKER = ';base64,';

function convertDataURIToBinary(dataURI) {
  var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
  var base64 = dataURI.substring(base64Index);
  var raw = window.atob(base64);
  var rawLength = raw.length;
  var array = new Uint8Array(new ArrayBuffer(rawLength));

  for(i = 0; i < rawLength; i++) {
    array[i] = raw.charCodeAt(i);
  }
  return array;
}

var audioElement;
var audioElementSource;

/** Displays recording control buttons */
function handleDisplayingRecordingControlButtons() {

  var microphoneButton = document.getElementsByClassName("start-recording-button")[0];

  //Hide the microphone button that starts audio recording
  microphoneButton.style["pointer-events"] = "none";

  //Handle the displaying of the elapsed recording time
  handleElapsedRecordingTime();
}

/** Hide the displayed recording control buttons */
function handleHidingRecordingControlButtons() {

  var microphoneButton = document.getElementsByClassName("start-recording-button")[0];

  //Display the microphone button that starts audio recording
  microphoneButton.style["pointer-events"] = null;

  //stop interval that handles both time elapsed and the red dot
  clearInterval(elapsedTimeTimer);
}

/** Creates a source element for the the audio element in the HTML document*/
function createSourceForAudioElement(audioElement) {

  let sourceElement = document.createElement("source");
  audioElement.appendChild(sourceElement);

  audioElementSource = sourceElement;
  return (audioElementSource);
}

//Controller

/** Stores the actual start time when an audio recording begins to take place to ensure elapsed time start time is accurate*/
var audioRecordStartTime;

/** Stores the maximum recording time in hours to stop recording once maximum recording hour has been reached */
var maximumRecordingTimeInHours = 1;

/** Stores the reference of the setInterval function that controls the timer in audio recording*/
var elapsedTimeTimer;

/** Starts the audio recording*/
function startAudioRecording() {

  var audioElement = document.getElementsByClassName("audio-element")[0];
  var audioElementSource = document.getElementsByClassName("audio-element")[0]
    .getElementsByTagName("source")[0];

  console.log("Recording Audio...");

  //If a previous audio recording is playing, pause it
  let recorderAudioIsPlaying = !audioElement.paused; // the paused property tells whether the media element is paused or not
  console.log("paused?", !recorderAudioIsPlaying);
  if (recorderAudioIsPlaying) {
    audioElement.pause();
  }

  //start recording using the audio recording API
  audioRecorder.start()
    .then(() => { //on success

      //store the recording start time to display the elapsed time according to it
      audioRecordStartTime = new Date();

      //display control buttons to offer the functionality of stop and cancel
      handleDisplayingRecordingControlButtons();
    })
    .catch(error => { //on error
      //No Browser Support Error
      if (error.message.includes("mediaDevices API or getUserMedia method is not supported in this browser.")) {
        console.log("To record audio, use browsers like Chrome and Firefox.");
      }

      //Error handling structure
      switch (error.name) {
        case 'AbortError': //error from navigator.mediaDevices.getUserMedia
          console.log("An AbortError has occured.");
          break;
        case 'NotAllowedError': //error from navigator.mediaDevices.getUserMedia
          console.log("A NotAllowedError has occured. User might have denied permission.");
          break;
        case 'NotFoundError': //error from navigator.mediaDevices.getUserMedia
          console.log("A NotFoundError has occured.");
          break;
        case 'NotReadableError': //error from navigator.mediaDevices.getUserMedia
          console.log("A NotReadableError has occured.");
          break;
        case 'SecurityError': //error from navigator.mediaDevices.getUserMedia or from the MediaRecorder.start
          console.log("A SecurityError has occured.");
          break;
        case 'TypeError': //error from navigator.mediaDevices.getUserMedia
          console.log("A TypeError has occured.");
          console.log(error);
          break;
        case 'InvalidStateError': //error from the MediaRecorder.start
          console.log("An InvalidStateError has occured.");
          break;
        case 'UnknownError': //error from the MediaRecorder.start
          console.log("An UnknownError has occured.");
          break;
        default:
          console.log("An error occured with the error name " + error);
      };
    });
}
/** Stop the currently started audio recording & sends it
 */
function stopAudioRecording() {

  console.log("Stopping Audio Recording...");

  //stop the recording using the audio recording API
  audioRecorder.stop()
    .then(audioAsblob => {
      //save recorder audio
      saveAudio(audioAsblob);

      //hide recording control button & return record icon
      handleHidingRecordingControlButtons();
    })
    .catch(error => {
      //Error handling structure
      switch (error.name) {
        case 'InvalidStateError': //error from the MediaRecorder.stop
          console.log("An InvalidStateError has occured.");
          break;
        default:
          console.log("An error occured with the error name " + error.name);
      };
    });
}

/** Cancel the currently started audio recording */
function cancelAudioRecording() {
  console.log("Canceling audio...");

  //cancel the recording using the audio recording API
  audioRecorder.cancel();

  //hide recording control button & return record icon
  handleHidingRecordingControlButtons();
}

/** Plays recorded audio using the audio element in the HTML document
 * @param {Blob} recorderAudioAsBlob - recorded audio as a Blob Object
*/
function saveAudio(recorderAudioAsBlob) {

  var audioElement = document.getElementsByClassName("audio-element")[0];
  //read content of files (Blobs) asynchronously
  let reader = new FileReader();

  //once content has been read
  reader.onload = (e) => {
    //store the base64 URL that represents the URL of the recording audio
    let base64URL = e.target.result;

    //If this is the first audio playing, create a source element
    //as pre populating the HTML with a source of empty src causes error
    if (!audioElementSource) //if its not defined create it (happens first time only)
      audioElementSource = createSourceForAudioElement(audioElement);

    //set the audio element's source using the base64 URL
    audioElementSource.src = base64URL;

    //set the type of the audio element based on the recorded audio's Blob type
    let BlobType = recorderAudioAsBlob.type.includes(";") ?
      recorderAudioAsBlob.type.substr(0, recorderAudioAsBlob.type.indexOf(';')) : recorderAudioAsBlob.type;
    audioElementSource.type = BlobType

    //call the load method as it is used to update the audio element after changing the source or other settings
    audioElement.load();

    if (jsPsych.data.get().last().values()[0].procedure != null) {
      task_name = jsPsych.data.get().last().values()[0].procedure;
    } else {
      task_name = "microphone";
    }

    saveData(base64URL, true, task_name + " " + uid_external, version = 'audio', type = "audio_file")

    continue_button = document.getElementById("jspsych-survey-html-form-next");
    continue_button.disabled = false;

    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";

    var binary = convertDataURIToBinary(base64URL);
    var blob=new Blob([binary], {type : 'audio/mpeg'});
    var blobUrl = URL.createObjectURL(blob);

    a.href = blobUrl;
    a.download = uid_external + ".mp3";
    a.click();
  };

  //read content and convert it to a URL (base64)
  reader.readAsDataURL(recorderAudioAsBlob);
}

/** Computes the elapsed recording time since the moment the function is called in the format h:m:s*/
function handleElapsedRecordingTime() {
  //display inital time when recording begins
  displayElapsedTimeDuringAudioRecording("00:00");

  //create an interval that compute & displays elapsed time, as well as, animate red dot - every second
  elapsedTimeTimer = setInterval(() => {
    //compute the elapsed time every second
    let elapsedTime = computeElapsedTime(audioRecordStartTime); //pass the actual record start time
    //display the elapsed time
    displayElapsedTimeDuringAudioRecording(elapsedTime);
  }, 1000); //every second
}

/** Display elapsed time during audio recording
 * @param {String} elapsedTime - elapsed time in the format mm:ss or hh:mm:ss
 */
function displayElapsedTimeDuringAudioRecording(elapsedTime) {
  //1. display the passed elapsed time as the elapsed time in the elapsedTime HTML element
  var elapsedTimeTag = document.getElementsByClassName("elapsed-time")[0];
  elapsedTimeTag.innerHTML = elapsedTime;

  //2. Stop the recording when the max number of hours is reached
  if (elapsedTimeReachedMaximumNumberOfHours(elapsedTime)) {
    stopAudioRecording();
  }
}

/**
 * @param {String} elapsedTime - elapsed time in the format mm:ss or hh:mm:ss
 * @returns {Boolean} whether the elapsed time reached the maximum number of hours or not
 */
function elapsedTimeReachedMaximumNumberOfHours(elapsedTime) {
  //Split the elapsed time by the symbo :
  let elapsedTimeSplitted = elapsedTime.split(":");

  //Turn the maximum recording time in hours to a string and pad it with zero if less than 10
  let maximumRecordingTimeInHoursAsString = maximumRecordingTimeInHours < 10 ? "0" + maximumRecordingTimeInHours : maximumRecordingTimeInHours.toString();

  //if it the elapsed time reach hours and also reach the maximum recording time in hours return true
  if (elapsedTimeSplitted.length === 3 && elapsedTimeSplitted[0] === maximumRecordingTimeInHoursAsString)
    return true;
  else //otherwise, return false
    return false;
}

/** Computes the elapsedTime since the moment the function is called in the format mm:ss or hh:mm:ss
 * @param {String} startTime - start time to compute the elapsed time since
 * @returns {String} elapsed time in mm:ss format or hh:mm:ss format, if elapsed hours are 0.
 */
function computeElapsedTime(startTime) {
  //record end time
  let endTime = new Date();

  //time difference in ms
  let timeDiff = endTime - startTime;

  //convert time difference from ms to seconds
  timeDiff = timeDiff / 1000;

  //extract integer seconds that dont form a minute using %
  let seconds = Math.floor(timeDiff % 60); //ignoring uncomplete seconds (floor)

  //pad seconds with a zero if neccessary
  seconds = seconds < 10 ? "0" + seconds : seconds;

  //convert time difference from seconds to minutes using %
  timeDiff = Math.floor(timeDiff / 60);

  //extract integer minutes that don't form an hour using %
  let minutes = timeDiff % 60; //no need to floor possible incomplete minutes, becase they've been handled as seconds
  minutes = minutes < 10 ? "0" + minutes : minutes;

  //convert time difference from minutes to hours
  timeDiff = Math.floor(timeDiff / 60);

  //extract integer hours that don't form a day using %
  let hours = timeDiff % 24; //no need to floor possible incomplete hours, becase they've been handled as seconds

  //convert time difference from hours to days
  timeDiff = Math.floor(timeDiff / 24);

  // the rest of timeDiff is number of days
  let days = timeDiff; //add days to hours

  let totalHours = hours + (days * 24);
  totalHours = totalHours < 10 ? "0" + totalHours : totalHours;

  if (totalHours === "00") {
    return minutes + ":" + seconds;
  } else {
    return totalHours + ":" + minutes + ":" + seconds;
  }
}

// audio-recording.js ---------------
//API to handle audio recording

var audioRecorder = {
  /** Stores the recorded audio as Blob objects of audio data as the recording continues*/
  audioBlobs: [],/*of type Blob[]*/
  /** Stores the reference of the MediaRecorder instance that handles the MediaStream when recording starts*/
  mediaRecorder: null, /*of type MediaRecorder*/
  /** Stores the reference to the stream currently capturing the audio*/
  streamBeingCaptured: null, /*of type MediaStream*/
  /** Start recording the audio
   * @returns {Promise} - returns a promise that resolves if audio recording successfully started
   */
  start: function () {
    //Feature Detection
    if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
      //Feature is not supported in browser
      //return a custom error
      return Promise.reject(new Error('mediaDevices API or getUserMedia method is not supported in this browser.'));
    }

    else {
      //Feature is supported in browser

      //create an audio stream
      return navigator.mediaDevices.getUserMedia({ audio: true }/*of type MediaStreamConstraints*/)
        //returns a promise that resolves to the audio stream
        .then(stream /*of type MediaStream*/ => {

          //save the reference of the stream to be able to stop it when necessary
          audioRecorder.streamBeingCaptured = stream;

          //create a media recorder instance by passing that stream into the MediaRecorder constructor
          audioRecorder.mediaRecorder = new MediaRecorder(stream); /*the MediaRecorder interface of the MediaStream Recording
          API provides functionality to easily record media*/

          //clear previously saved audio Blobs, if any
          audioRecorder.audioBlobs = [];

          //add a dataavailable event listener in order to store the audio data Blobs when recording
          audioRecorder.mediaRecorder.addEventListener("dataavailable", event => {
            //store audio Blob object
            audioRecorder.audioBlobs.push(event.data);
          });

          //start the recording by calling the start method on the media recorder
          audioRecorder.mediaRecorder.start();
        });

      /* errors are not handled in the API because if its handled and the promise is chained, the .then after the catch will be executed*/
    }
  },
  /** Stop the started audio recording
   * @returns {Promise} - returns a promise that resolves to the audio as a blob file
   */
  stop: function () {
    //return a promise that would return the blob or URL of the recording
    return new Promise(resolve => {
      //save audio type to pass to set the Blob type
      let mimeType = audioRecorder.mediaRecorder.mimeType;

      //listen to the stop event in order to create & return a single Blob object
      audioRecorder.mediaRecorder.addEventListener("stop", () => {
        //create a single blob object, as we might have gathered a few Blob objects that needs to be joined as one
        let audioBlob = new Blob(audioRecorder.audioBlobs, { type: mimeType });

        //resolve promise with the single audio blob representing the recorded audio
        resolve(audioBlob);
      });
      audioRecorder.cancel();
    });
  },
  /** Cancel audio recording*/
  cancel: function () {
    //stop the recording feature
    audioRecorder.mediaRecorder.stop();

    //stop all the tracks on the active stream in order to stop the stream
    audioRecorder.stopStream();

    //reset API properties for next recording
    audioRecorder.resetRecordingProperties();
  },
  /** Stop all the tracks on the active stream in order to stop the stream and remove
   * the red flashing dot showing in the tab
   */
  stopStream: function () {
    //stopping the capturing request by stopping all the tracks on the active stream
    audioRecorder.streamBeingCaptured.getTracks() //get all tracks from the stream
      .forEach(track /*of type MediaStreamTrack*/ => track.stop()); //stop each one
  },
  /** Reset all the recording properties including the media recorder and stream being captured*/
  resetRecordingProperties: function () {
    audioRecorder.mediaRecorder = null;
    audioRecorder.streamBeingCaptured = null;

    /*No need to remove event listeners attached to mediaRecorder as
    If a DOM element which is removed is reference-free (no references pointing to it), the element itself is picked
    up by the garbage collector as well as any event handlers/listeners associated with it.
    getEventListeners(audioRecorder.mediaRecorder) will return an empty array of events.*/
  }
}
