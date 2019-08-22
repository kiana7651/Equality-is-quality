function tabAnswers() {
  var radios = document.getElementsByName("social-injustice1");
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        // do whatever you want with the checked radio
        alert(radios[i].value);

        // only one radio can be logically checked, don't check the rest
        break;
    }
}
}




// function to calculate the result of the survey
function tabulateAnswers() {
  // initialize variables for each choice's score
  // If you add more choices and outcomes, you must add another variable here.
  var yes1score = 0;
  var no1score = 0;
  var yes2score = 0;
  var no2score = 0;
  var yes3score = 0;
  var no3score = 0;
  var yes4score = 0;
  var no4score = 0;
  var yes5score = 0;
  var no5score = 0;
  var yes9score = 0;
  var no9score = 0;

  var c1score = 0;
  var c2score = 0;
  var c3score = 0;
  var c4score = 0;

  // get a list of the radio inputs on the page
  var choices = document.getElementsByTagName('input');
  console.log(choices)
  // loop through all the radio inputs
  for (i=0; i<choices.length; i++) {
    // if the radio is checked..
    if (choices[i].checked) {
      // add 1 to that choice's score
      if (choices[i].value == 'yes1score') {
        yes1score = yes1score + 1;
      }
      if (choices[i].value == 'no1score') {
        no1score = no1score + 1;
      }
      if (choices[i].value == 'yes2score') {
        yes2score = yes2score + 1;
      }
      if (choices[i].value == 'yes3score') {
        yes3score = yes3score + 1;
      }
      if (choices[i].value == 'no2score') {
        no3score = no3score + 1;
      }
      if (choices[i].value == 'c4') {
        c4score = c4score + 1;
      }
      if (choices[i].value == 'yes1') {
        c1score = c1score + 1;
      }
      if (choices[i].value == 'c2') {
        c2score = c2score + 1;
      }
      if (choices[i].value == 'c3') {
        c3score = c3score + 1;
      }
      if (choices[i].value == 'c4') {
        c4score = c4score + 1;
      }
      if (choices[i].value == 'c4') {
        c4score = c4score + 1;
      }
      if (choices[i].value == 'c4') {
        c4score = c4score + 1;
      }

      //calling all the text boxes
      var answerbox = document.getElementById('box');

      // If you add more choices and outcomes, you must add another if statement below.
    }
  }
  // Find out which choice got the highest score.
  // If you add more choices and outcomes, you must add the variable here.
  var maxscore = Math.max(yes1score,no1score,yes2score,no2score,yes3score,no3score,yes4score,no4score,yes5score,no5score,yes9score,no9score);

  // Display answer corresponding to that choice
  var answerbox = document.getElementById('answer');
  if (c1score == maxscore) { // If user chooses the first choice the most, this outcome will be displayed.
    answerbox.innerHTML = "Thank you for taking our survey! Feel free to contact us for more questions or feedback";
  }
  if (c2score == maxscore) { // If user chooses the second choice the most, this outcome will be displayed.
    answerbox.innerHTML = "Thank you for taking our survey! Feel free to contact us for more questions or feedback";
    }
  if (c3score == maxscore) { // If user chooses the third choice the most, this outcome will be displayed.
    answerbox.innerHTML = "Thank you for taking our survey! Feel free to contact us for more questions or feedback";
    }
  if (c4score == maxscore) { // If user chooses the fourth choice the most, this outcome will be displayed.
    answerbox.innerHTML = "Thank you for taking our survey! Feel free to contact us for more questions or feedback";
    }
  // If you add more choices, you must add another response below.
}

//notify that survey is not completed
// window.onload = function(){
//  document.getElementById('input').onclick = function(e){
//      alert(document.getElementById("name").value);
//      return false;
//  }
// }

// program the reset button
function resetAnswer() {
  var answerbox = document.getElementById('answer');
  answerbox.innerHTML = "That's the end!";
}
