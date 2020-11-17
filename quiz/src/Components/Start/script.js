
// Html Variables
var startBtn = document.getElementById("start")
var question = document.getElementById("questions")
var answer1 = document.getElementById("answer1")
var answer2 = document.getElementById("answer2")
var answer3 = document.getElementById("answer3")
var answer4 = document.getElementById("answer4")
var timeEl = document.getElementById("time");
var startScreen = document.querySelector(".start-screen")
var quiz = document.querySelector(".quiz")
// Question Variable
var questionArr = [
  {
    questionText: 'What car did Brian drive in Fast and Furious?',
    answerOptions: [
      {answerText: "Blue R34", isCorrect: true},
      {answerText: "Yellow Supra", isCorrect: false}, 
      {answerText: "Black Durango", isCorrect: false},
      {answerText: "Silver R34", isCorrect: false}
    ]
  },
  {
    questionText: "What is Dom and Letty's famous saying ",
    answerOptions: [
      {answerText: "I live life a quarter mile at a time", isCorrect: false},
      {answerText: "Ride or Die", isCorrect: true},
      {answerText: "It doesn't matter whether you win by an inch or a mile, winning is winning", isCorrect: false},
      {answerText: "You know this ain't no 10-second race.” “I've got nothing but time.", isCorrect: false}
    ]
  },
  {
    questionText: "In Toyko Drift who says, Life's simple: You make choices and you don't look back.",
    answerOptions: [
      {answerText: "Drift King", isCorrect: false},
      {answerText: "Sean", isCorrect: false},
      {answerText: "D.K.", isCorrect: false},
      {answerText:"Han", isCorrect: true}
    ]
  },
  {
    questionText: "Which movie does Dom look at Letty and say, Ride or die, Remember?",
    answerOptions: [
      {answerText: "2 Fast 2 Furious", isCorrect: false},
      {answerText: "Fast 6", isCorrect: true},
      {answerText: "Fate of the Furious", isCorrect: false},
      {answerText: "The Fast and Furious", isCorrect: false}
    ]
  },
  {
    questionText: "What is Paul Walkers most famous quote?",
    answerOptions: [
      {answerText:"If one day the speed kills me don’t be sad because I will have died smiling.", isCorrect: true},
      {answerText:"I don’t care what it is in life: listen to your heart. If you do, no matter what, you win.", isCorrect: false},
      {answerText:"I’m not the kind of guy who’s taking advantage of my position.", isCorrect: false},
      {answerText:"You know, all that really matters is that the people you love are happy and healthy. Everything else is just sprinkles on the sundae.", isCorrect: false},
    ]
  }
]


// Logic variables
let score = 0
let count = 0
let time = 75
//  Start Screen code
startBtn.addEventListener("click", function (e) {
  // console.log(e.target)
  // console.log(answer1)
  startScreen.setAttribute("style", "display: none !important")
  quiz.setAttribute("style", "display: block !important")
  let timer = setInterval(function () {
    time = time - 1
    // console.log(time)
    timeEl.innerHTML = time
    if (time === 0) {
      clearInterval(timer)
    }
  }, 1000)
  console.log(answer1)


  nextQuestion()

})


const answerQuery = document.querySelector(".answers")

document.querySelectorAll('.answers').forEach(item => {
  item.addEventListener('click', event => {
    
    if (item.innerHTML === questionArr[count].answerlist[questionArr[count].correctAnswer]) {
      score = score + 20
      console.log(score)
    } else {
      time = time - 10
      console.log(time)
    }
    if (count === 4){
      endGame()
    } else {
      count++
      nextQuestion()
    }
    
  })
})

function endGame(){
  let highscores = []
  alert(`Game over. Your score is ${score}`)

  localStorage.setItem("highScores", score)

}






function nextQuestion() {
  // questionArr[count] use this object to set the values of the html customElementsyou saved up top
  // if the count is higher than our number of questions end the game 
  question.innerHTML = questionArr[count].question
  answer1.innerHTML = questionArr[count].answerlist[0]
  answer2.innerHTML = questionArr[count].answerlist[1]
  answer3.innerHTML = questionArr[count].answerlist[2]
  answer4.innerHTML = questionArr[count].answerlist[3]
  
  console.log(count)
}



// what variables do we need
// questionIndex which starts at 0
// questionObjectArray
// score
// timeLeft

