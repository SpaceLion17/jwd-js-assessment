/* ***************************
  JWD JavaScript Assessment

  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and
  your own code, to finish the app. 
  
  The tasks you need to do are below.

    TASKS TODO:
      1. Calculate the score as the total of the number of correct answers (Added)

      2. Add an Event listener for the submit button, which will display the score and highlight     
         the correct answers when the button is clicked. Use the code from lines 67 to 86 to help you. (Added)

      3. Add 2 more questions to the app (each question must have 4 options). (Added)

      4. Reload the page when the reset button is clicked (hint: search window.location) (Added)

      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers (Working on)
*************************** */

window.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('#start');
  start.addEventListener('click', function (e) {
    document.querySelector("#quizBlock").style.display = "block";
    start.style.display = "none";

    // quizArray QUESTIONS & ANSWERS
    // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
    // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
    const quizArray = [
      {
        q: "Which is the third planet from the sun?",
        o: ["Saturn", "Earth", "Pluto", "Mars"],
        a: 1, // array index 1 - so Earth is the correct answer here
      },
      {
        q: "Which is the largest ocean on Earth?",
        o: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        a: 3,
      },
      {
        q: "What is the capital of Australia",
        o: ["Sydney", "Canberra", "Melbourne", "Perth"],
        a: 1,
      },
      // Questions can also just be added to the array
      // {
      //   q: "How many States are there in Australia?",
      //   o: ["Four", "Eight", "Six", "Seven"],
      //   a: 2,
      // },
      // {
      //   q: "What is the largest country in the world?",
      //   o: ["Russia", "Canada", "China", "Brazil"],
      //   a: 0,
      // },
    ];
  
    // Pushed Additional Questions to the quizArray using .push
    const quiz4 = {
      q: "How many States are there in Australia?",
      o: ["Four", "Eight", "Six", "Seven"],
      a: 2,
    };
    const quiz5 = {
      q: "What is the largest country in the world?",
      o: ["Russia", "Canada", "China", "Brazil"],
      a: 0,
    };
    quizArray.push(quiz4, quiz5);

    // function to Display the quiz questions and answers from the object
    const displayQuiz = () => {
      const quizWrap = document.querySelector("#quizWrap");
      let quizDisplay = "";
      quizArray.map((quizItem, index) => {
        quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
        quizWrap.innerHTML = quizDisplay;
      });
    };

    // Calculate the score and highlight the correct answer
    let quiz = document.querySelector("#btnSubmit");
    quiz.addEventListener("click", calculateScore);
    function calculateScore() {
      let score = 0;
      quizArray.map((quizItem, index) => {
        for (let i = 0; i < 4; i++) {
          //highlight the li if it is the correct answer
          let li = `li_${index}_${i}`;
          let r = `radio_${index}_${i}`;
           liElement = document.querySelector("#" + li);
           radioElement = document.querySelector("#" + r);
          if (quizItem.a == i) {
            //change background color of li element here
            liElement.style.backgroundColor = "aqua";
          }
          if (radioElement.checked == true && quizItem.a == i) {
            score += 1;
          }
        }
      });
      quiz.style.display = "none";
       const totalScore = document.querySelector("#score");
       totalScore.innerHTML = `You Scored ${score}/${quizArray.length}`;
       totalScore.style.color = "black";
       totalScore.style.fontSize = "large";
    }

    //reload Page Button (Reloads when clicked!)
    let reset = document.querySelector("#btnReset");
    reset.addEventListener("click", resetPage);
    function resetPage() {
      window.location.reload();
    }


     // Timer (In Progress)
     var timeLeft = 10;
     var element = document.getElementById("time");
     function countdown() {
        if (timeLeft == -1) {
         clearTimeout(timerId);
         element.innerHTML = " Time's up"
       }
     }

 displayQuiz();
  })
});


