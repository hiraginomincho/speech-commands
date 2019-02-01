"use strict";

console.log("Speech Commands: Using TensorFlow.js version " + tf.version.tfjs);

let recognizer = speechCommands.create("BROWSER_FFT");

const recognizerDemo = async () => {
  await recognizer.ensureModelLoaded();
  console.log("Speech Commands: ready");
  // SpeechCommands.ready();
}

function startListening() {
  recognizer.listen(result => {
    var output = [];
    for (let i = 0; i < result.scores.length; i++) {
      output.push([recognizer.wordLabels()[i], result.scores[i]]);
    }
    output.sort((a, b) => b[1] - a[1]);
    console.log("Speech Commands: " + JSON.stringify(output));
    // SpeechCommands.reportResult(JSON.stringify(output));
  }, {overlapFactor: 0, probabilityThreshold: 0.75});
}

function stopListening() {
  recognizer.stopListening();
}

recognizerDemo();
