var swcharacter = "";
var Qcount = 0;
var Results = false;

// Create random quiz questions

const quiz = [];
const answers = [];
const correct = [];

// Large array of Unique questions

const starwars = [
  [1 , "C", "Who is this golden droid character?", "C", "R2D2", "BB-8" , "C-3PO", "IG-88"],
  [2, "P", "What is this famous planet called?", "B", "Naboo", "Coruscant" , "Alderaan", "Tatooine"],
  [3, "C", "Who is this Supreme Commander character?", "D", "Darth Sidious", "Sumpreme Leader Snoke" , "Darth Yoda", "General Grievous"],
  [4, "E", "What is the name of this spaceship", "D", "Soulless One", "The Ninka" , "Republic Crusier", "Millennium Falcon"],
  [5, "C", "Who is this Rebel Leader character?", "D", "Lando Calrissian", "Finn" , "Luke Skywalker", "Han Solo"],
  [6, "C", "Who is this famous droid character?", "B", "R2D2", "BB-8" , "C-3PO", "RX9"],
  [7, "C", "Who is this famous Jedi character?", "C", "Qui-Gon Jinn", "Mace Windu" , "Yoda", "Jabba"],
  [8, "C", "Who is this dark Sith lord character?", "A", "Darth Maul", "Darth Vader" , "Count Dooku", "Darth Paladuis"],
  [9, "C", "Who is this bounty hunter character?", "B", "Zam Wesell", "Boba Fett" , "Dengar", "Asajj Ventress"],
  [10, "P", "What is this icy planet called?", "C", "Dagobah", "Bespin" , "Hoth", "Yavin"],
  [11, "C", "What is name of this famous droid character?", "D", "C-3PO", "BB-8" , "IG-88", "R2D2"],
  [12, "C", "Who is this Evil Dark Lord character?", "B", "Darth Maul", "Darth Vader" , "Darth Paladuis", "Darth Laser"],
  [13, "C", "Who is this Imperial commander character?", "B", "Sheev Palpatine", "Grand Moff Tarkin" , "Grand Admiral Thrawn", "General Hux"],
  [14, "E", "What is the name of this Rebel figther spacecraft?", "A", "X-Wing", "Tie Figther" , "Naboo Cruiser", "Imperial Fighter"],
  [15, "C", "Who is this frog looking character?", "D", "Peppi Bow", "Roo-Roo Page" , "Rish Loo", "Jar Jar Binks"],
  [16, "C", "Who is this handsome looking character?", "A", "Lando Calrissian", "Han Solo" , "General Grievous", "Bail Prestor Organa"],
  [17, "C", "What is the name of this four legged tank?", "C", "AT-ST", "Y-Wing" , "AT-AT", "Ice walker"],
  [18, "C", "What is the name of this female character?", "B", "Princess Amidala", "Princess Leia" , "Princess Jamillia", "Mon Mothma"],
  [19, "E", "What is this Imperial spacecraft called?", "D", "X-Wing", "Y-Wing" , "Star Destroyer", "TIE Fighter"],
  [20, "C", "Who is this Dark Lord character?", "C", "General Grievous", "Kylo Ren" , "Count Dooku", "Grand Moff Tarkin"],
  [21, "C", "What is the name of this lizard looking character?", "B", "Thar Lasan", "Jabba the Hutt" , "Kram Balut", "Maz Kanata"],
  [22, "P", "What is this Wookie home world called?", "D", "Dagobah", "Naboo" , "Tatoonie", "Kashyyyk"],
  [23, "P", "What is the name of this creepy planet?", "A", "Dagobah", "Mustafar" , "Dathomir", "Jakku"],
  [24, "E", "What is the name of massive spacecraft?", "D", "TIE Fighter", "Millennium Falcon" , "Rebel Crusier", "Star Destroyer"],
  [25, "E", "What is the name of Bobba Fett spacecraft?", "D", "Jango", "Executor" , "Crafter", "Slave 1"],
  [26, "C", "Who was the queen on Naboo character?", "A", "Amidala", "Leia" , "Jamillia", "Sosha Soruna"]
];

// Pick 10 random unique questions from the array above

for (i = 10; i > 0; i --) {
random = Math.floor(Math.random() * (starwars.length));
quiz.push(starwars[random]);
starwars.splice(random , 1);
}
console.log(quiz);
// update file

function show() {
    alert("Auto Play of the sound is turned off by default!\n To turn on the sound\n Click play on the white control\n TOP LEFT of the screen\n to get the full effect Star Wars effect.....\n May the force be with you!");
}

 function buttonshow() { 
    document.getElementById("buttonindex").style.visibility = "visible";
}

 function rebel() {
   document.getElementById('force').innerHTML = "Rebel";
    document.getElementById('characterI').innerHTML = "";
    document.getElementById('characterR').innerHTML = '<p>Choose a character.....</p><img src="https://40457712.github.io/assessment/images/Luke290X290.jpg" onclick="change(&#34;Luke&#34;)" alt="Luke Skywalker" width="100" height="100"><img src="https://40457712.github.io/assessment/images/chewbacca290X290.jpg" onclick="change(&#34;chewbacca&#34;)" alt="chewbacca" width="100" height="100"><img src="https://40457712.github.io/assessment/images/yoda290X290.jpg" onclick="change(&#34;yoda&#34;)" alt="yoda" width="100" height="100">';
}

 function imperial() {
   document.getElementById('force').innerHTML = "Imperial";
    document.getElementById('characterR').innerHTML = "";
    document.getElementById('characterI').innerHTML = '<p>Choose a character.....</p><img src="https://40457712.github.io/assessment/images/bobafett290X290.png" onclick="change(&#34;bobafett&#34;)" alt="bobafett" width="100" height="100"><img src="https://40457712.github.io/assessment/images/darthmaul290X290.jpg" onclick="change(&#34;darthmarl&#34;)" alt="darthmarl" width="100" height="100"><img src="https://40457712.github.io/assessment/images/darth290X290.jpg" onclick="change(&#34;darthvader&#34;)" alt="darthvader" width="100" height="100">';
}

// Start function to make main screen visible

function start() {
   localStorage.setItem("Uname",document.getElementById("inputname").value);
   
   var setup1 = document.getElementById("settings");
   // alert("Visiblity of settings is " + setup1.style.visibility);
   setup1.style.visibility = "hidden";
   var setup2 = document.getElementById("main");
   // alert("Visiblity of settings is " + setup2.style.visibility);
   setup2.style.visibility = "visible";
   startCountDown();
   next();
}

// Select next question after checking results

function next() {
   
   var unchecked = 0;
   var z = "";
   //alert("Qcount " + Qcount);
   if(Qcount => 1) {
   var ansr = document.getElementsByName('answer');   
      for(i = 0; i < ansr.length; i++) {
         if(ansr[i].checked){
            answers.push(ansr[i].value);
            // alert(quiz[(Qcount - 1)][2] + "You Answered: " + ansr[i].value + " - Correct Answer: " + quiz[(Qcount - 1)][3] + "Q" + (Qcount - 1));
            z = document.getElementById('force').innerHTML;
            if(ansr[i].value == quiz[Qcount - 1][3]){
               //alert("You got the correct answer! " );
               if (z == "Rebel"){
               //   console.log("Correct Rebel");
                  myFunctionAdd(5);
               }
               if (z == "Imperial"){
               //   console.log("Correct Imperial");
                  myFunctionMinus(5);
               }
            }else{
               //alert("You got a wrong answer! " );
               if (z == "Rebel"){
                  document.getElementById("scrolling").innerHTML = "Use the force Jedi...to improve your answers";
               //   console.log("Wrong Rebel");
                  myFunctionMinus(5);
               }
               if (z == "Imperial"){
                  document.getElementById("scrolling").innerHTML = "Call on the Darkside...to improve your answers";
               //   console.log("Wrong Imperial");
                  myFunctionAdd(5);
               }
            }
         }else{
            unchecked += 1;
         }
      }
      
      if (unchecked == 4){
         alert("You need to click an answer");
         return;
      }
   }

   if(Qcount == 10) {
      document.getElementById("question").innerHTML = "Click the result button to see how you did in the battle";
      document.getElementById("picture").innerHTML = "As your battle has end brave warrior!!!";
      document.getElementById("answerA").innerHTML = "";
      document.getElementById("answerB").innerHTML = "";
      document.getElementById("answerC").innerHTML = "";
      document.getElementById("answerD").innerHTML = "";  
      document.getElementById("buttonnext").innerHTML = '<p><button  id="buttonstart" onclick="results()">RESULTS</button></p>';
   }else{
      document.getElementById("question").innerHTML = "Question " + (Qcount + 1) + ": " + quiz[(Qcount)][2];
      document.getElementById("picture").innerHTML = '<img src="https://40457712.github.io/assessment/images/' + quiz[(Qcount)][0] + '.jpg" alt="' + quiz[(Qcount)][2] + '">';
      document.getElementById("answerA").innerHTML = '<input type="radio" name="answer" value="A">' + "A: " + quiz[(Qcount)][4];
      document.getElementById("answerB").innerHTML = '<input type="radio" name="answer" value="B">' + "B: " + quiz[(Qcount)][5];
      document.getElementById("answerC").innerHTML = '<input type="radio" name="answer" value="C">' + "C: " + quiz[(Qcount)][6];
      document.getElementById("answerD").innerHTML = '<input type="radio" name="answer" value="D">' + "D: " + quiz[(Qcount)][7];
   //document.getElementById('labelQA').innerHTML = "Question " + Qcount;
   //alert("Hang on a minute i have not programmed that yet!!!! Question " + Qcount);
   Qcount += 1; 
   //alert("Qcount " + Qcount);
   }
}

//Display results and correct answers

function results() {
   let uName = localStorage.getItem("Uname");
   Results = true;
   document.getElementById("scrolling").innerHTML = "The battle is over " + uName + ", you fought well warrior";
   z = document.getElementById('force').innerHTML;
   if (z == "Rebel"){
      document.getElementById("answerA").innerHTML = "The Battle Quiz for the Rebel Alliance is over!!!";
      //   console.log("Correct Rebel");
      var x = document.getElementById("myProgress").value;
      if (x > 60){
         document.getElementById("picture").innerHTML = '<img src="https://40457712.github.io/assessment/images/RebelVictory350X350.jpg" alt="Rebel Victory" width="248px" height="248px">';
         document.getElementById("result").innerHTML = "VICTORY";
      }else{
         document.getElementById("picture").innerHTML = '<img src="https://40457712.github.io/assessment/images/RebelDefeat350X350.jpg" alt="Rebel Defeat" width="248px" height="248px">';
         document.getElementById("result").innerHTML = "DEFEAT";
      }
      
   }
   if (z == "Imperial") {
      document.getElementById("answerA").innerHTML = "The Battle Quiz for the Imperial Darkside is over!!!";
      //   console.log("Correct Rebel");
      var x = document.getElementById("myProgress").value;
      if (x < 60){
         document.getElementById("picture").innerHTML = '<img src="https://40457712.github.io/assessment/images/ImperialVictory350X350.jpg" alt="Imperial Victory" width="248px" height="248px">';
         document.getElementById("result").innerHTML = "VICTORY";
      }else{
         document.getElementById("picture").innerHTML = '<img src="https://40457712.github.io/assessment/images/ImperialDefeat350X350.jpg" alt="Imperial Defeat" width="248px" height="248px">';
         document.getElementById("result").innerHTML = "DEFEAT";
      }  
   }
   if (correct.length == 0){
      for (i = 0; i < 10; i ++) {
         correct.push(quiz[i][3]);
      }
   }

   document.getElementById("question").innerHTML = "Your Battle Quiz Results";
   document.getElementById("answerB").innerHTML = "";
   document.getElementById("answerC").innerHTML = "Your answers......<br>" + answers;
   document.getElementById("answerD").innerHTML = "Correct answers...<br>" + correct; 
   document.getElementById("buttonnext").innerHTML = '<button  id="buttonstart" onclick="replay()">REPLAY</button>';
}

// Restart the quiz

function replay() {
   document.location.reload(true);
}

// Change character image to one user selects

function change(swcharacter) {
    if( swcharacter === "Luke" ) {
        // alert("Welcome " + swcharacter + " to the battle!");
        document.getElementById('characterM').innerHTML = '<img src="https://40457712.github.io/assessment/images/Luke290X290.jpg" alt="Luke Skywalker" width="248px" height="248px">';
     }
     if( swcharacter === "chewbacca" ) {
        // alert("Welcome " + swcharacter + " to the battle!");
        document.getElementById('characterM').innerHTML = '<img src="https://40457712.github.io/assessment/images/chewbacca290X290.jpg" alt="chewbacca" width="248px" height="248px">';
     }
     if( swcharacter === "yoda" ) {
      // alert("Welcome " + swcharacter + " to the battle!");
      document.getElementById('characterM').innerHTML = '<img src="https://40457712.github.io/assessment/images/yoda290X290.jpg" alt="yoda" width="248px" height="248px">';
   }
     if( swcharacter === "bobafett" ) {
        // alert("Welcome " + swcharacter + " to the battle!");
        document.getElementById('characterM').innerHTML = '<img src="https://40457712.github.io/assessment/images/bobafett290X290.png" alt="bobafett" width="248px" height="248px">';
     }
     if( swcharacter === "darthmarl" ) {
        // alert("Welcome " + swcharacter + " to the battle!");
        document.getElementById('characterM').innerHTML = '<img src="https://40457712.github.io/assessment/images/darthmaul290X290.jpg" alt="darthmaul" width="248px" height="248px">';
     }
     if( swcharacter === "darthvader" ) {
      // alert("Welcome " + swcharacter + " to the battle!");
      document.getElementById('characterM').innerHTML = '<img src="https://40457712.github.io/assessment/images/darth290X290.jpg" alt="darthvader" width="248px" height="248px">';
   }
}

// Change progress bar plus or minus

function myFunctionAdd(t) {
//   console.log("My function add " + t);
   var x = document.getElementById("myProgress").value;
   x = x + t;
   document.getElementById("myProgress").value = x;
   //if (x >= 90) {
   //alert("You are winning the battle");
   //}
 }
 
 function myFunctionMinus(t) {
//   console.log("My function minus " + t);
   var x = document.getElementById("myProgress").value;
   x = x - t;
   document.getElementById("myProgress").value = x;
   //if (x <= 10) {
   //alert("You are losing the battle");
   //}
 }

 // Start a timer from minutes

 function startTimer(duration, timerDisplay) { 
   
   var start = Date.now(), diff, minutes, seconds; 
   function timer() { 
      // diff = number of seconds elapsed since start 
      diff = duration - (((Date.now() - start) / 1000) | 0); 

      minutes = parseInt(diff / 60, 10); 
      seconds = parseInt(diff % 60, 10); 
  
      // minutes = minutes < 10 ? "0" + minutes : minutes; 
      seconds = seconds < 10 ? "0" + seconds : seconds; 

      timerDisplay.innerHTML = minutes + ":" + seconds;  
      
      if (Results == true){
         clearInterval(setID); 
         timerDisplay.innerHTML = "3:00";
      }

      if (diff <= 0) { 
         //start = Date.now() + 1000; 
         console.log("Your time has run out!!!");
         document.getElementById("scrolling").innerHTML = "Your time has run out!!!"; 
         clearInterval(setID); 
         timerDisplay.innerHTML = "3:00";
         results(); 
      } 
      z = document.getElementById('force').innerHTML;
      if (diff == 150) {
         console.log("Thirty seconds has passed");
         document.getElementById("scrolling").innerHTML = "Thirty seconds has passed";
         if (z == "Rebel"){
            //   console.log("Wrong Rebel");
               myFunctionMinus(10);
            }
            if (z == "Imperial"){
            //   console.log("Wrong Imperial");
               myFunctionAdd(10);
            }
      }
      if (diff == 120) {
         console.log("One minute has passed");
         document.getElementById("scrolling").innerHTML = "One minute has passed";
         if (z == "Rebel"){
            //   console.log("Wrong Rebel");
               myFunctionMinus(10);
            }
            if (z == "Imperial"){
            //   console.log("Wrong Imperial");
               myFunctionAdd(10);
            }
      }
      if (diff == 90) {
         console.log("One minute thirty seconds has passed");
         document.getElementById("scrolling").innerHTML = "One minute thirty seconds has passed";
         if (z == "Rebel"){
            //   console.log("Wrong Rebel");
               myFunctionMinus(10);
            }
            if (z == "Imperial"){
            //   console.log("Wrong Imperial");
               myFunctionAdd(10);
            }
      }
      if (diff == 60) {
         console.log("Two minutes has passed");
         document.getElementById("scrolling").innerHTML = "Two minutes has passed";
         if (z == "Rebel"){
            //   console.log("Wrong Rebel");
               myFunctionMinus(10);
            }
            if (z == "Imperial"){
            //   console.log("Wrong Imperial");
               myFunctionAdd(10);
            }
      }
      if (diff == 30) {
         console.log("Two minutes thirty seconds has passed");
         document.getElementById("scrolling").innerHTML = "Two minutes thirty seconds has passed";
         if (z == "Rebel"){
            //   console.log("Wrong Rebel");
               myFunctionMinus(10);
            }
            if (z == "Imperial"){
            //   console.log("Wrong Imperial");
               myFunctionAdd(10);
            }
      }
   } 

   // Call the timer 
   // timer(); 
   var setID = setInterval(timer, 1000); 
} 

// Start a countdown timer

function startCountDown() { 
   var countdownTimer = 60 * 3, 
   countdownDisplay = document.querySelector('#countdown'); 
   startTimer(countdownTimer, countdownDisplay); 
}

window.onhashchange = function() {
   console.log("Browser buttonn pressed");
}