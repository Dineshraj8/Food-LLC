
(function () {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Loop over the names array
  for (var i = 0; i < names.length; i++) {

    // Retrieve the first letter and convert it to lowercase
    var firstLetter = names[i].charAt(0).toLowerCase();

    // Check if the name starts with 'J' or 'j'
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }

  }

})();
