// My set of questions
let trivia = [
  {
    question: "Question 1: Which is the first letter of the alphabet?",
    answers: ["a", "b", "c", "d"],
    correctAnswer: 1
  },
  {
    question: "Question 2: Which is the second letter of the alphabet?",
    answers: ["a", "b", "c", "d"],
    correctAnswer: 2
  },
  {
    question: "Question 3: Which is the third question of the alphabet?",
    answers: ["a", "b", "c", "d"],
    correctAnswer: 3
  }
];

// Click the button to start
$(".startButton").on("click", function () {
  $("#button").empty();
  timer();
  questionSlideShow();

  console.log("ping");
});

// Multiple choice selections/options need to show up
// User has not made a selection
let selectionMade = false;

// Timer countdown begins when button is clicked
function timer() {
  let count = 30;

  let sec = setInterval(function () {
    // If no selection made, then clear timer
    if (selectionMade) {
      clearTimeout(sec);
      selectionMade = false;
    } else if (count === 0) {
      clearTimeout(sec);
      timeUp();
    } else {
      if (count >= 30) {
        secondsLeft(count);
      } else {
        count = count;
        secondsLeft(count);
      }
    }
    count--;
  }, 1000);
}

function secondsLeft(val) {
  $("#timer").html("<h2 class='time'>00:" + val + "<h2>");
}

// Times up function
function timeUp() {
  $("#timer").empty();
  $("question").empty();
  $("answer").html();
}

let questionIndex = 0;
function questionSlideShow() {
  const currentQuestion = trivia[questionIndex];
  $("#question").append("<p class='quest'>" + currentQuestion.question);
  const answers = currentQuestion.answers;
  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];
    if (i === currentQuestion.correctAnswer) {
      $("#answer").append(
        "<button class= 'btn btn-outline-successtn-lg btn-block btn-outline-success btn-lg btnPadding' id='correctAns'>"
        + answer +
        "</button>"
      );
    } else {
      $("#answer").append(
        "<button class='btn btn-outline-successtn-lg btn-block btn-outline-success btn-lg btnPadding' id='wrongAns" +
        i +
        "'>" +
        answer +
        "</button>"
      );
    }
  }
}

// need to add scoreboard
// need to add correct and wrong answer