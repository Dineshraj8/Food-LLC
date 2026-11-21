
(function (window) {

  // STEP 7: Create byeSpeaker object
  var byeSpeaker = {};

  var speakWord = "Good Bye";

  // STEP 8: Attach speak method to byeSpeaker object
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 9: Expose byeSpeaker to global scope
  window.byeSpeaker = byeSpeaker;

})(window);
