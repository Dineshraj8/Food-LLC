
(function (window) {

  // STEP 3: Create helloSpeaker object
  var helloSpeaker = {};

  var speakWord = "Hello";

  // STEP 4: Attach speak method to helloSpeaker object
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 5: Expose helloSpeaker to global scope
  window.helloSpeaker = helloSpeaker;

})(window);
