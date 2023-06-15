//This is prototype of quiz of cricket// data set//

//readline for input

let read = require("readline-sync");//ans
let kuler = require("kuler");
let score = 0; // scores for every correct ans



console.log(kuler(`\n
                 Welcome to CrikQuiz\n
            The max score for the quiz is 10 points\n
            **1 points for every question**`,"#fbbf24"));


let userName=read.question(kuler("  \n\n\n            Type your name - ","#fefce8"));

//data--> questions with options and set answers
 const dataAll = {
  data: [

{ question:"In which format of Cricket did Brain Lara hit 400 runs ?",
options: {
  a: "International Test Match",
  b: "One Day International Match",
  c: "T-20 International Match",
  d: "Ashes Tournament Match"
},
rightAns:"a"
},

{ question:"In which year did India win first World Cup ?",
options: {
  a: "2007",
  b: "2011",
  c: "1987",
  d: "1983"
},
rightAns:"d"
},

{ question:"Who hold the record for highest score in ODI in a match?",
options: {
  a: "Virat Kohli",
  b: "Sachin Tendulkar",
  c: "Chrish Gayle",
  d: "Rohit Sharma"
},
rightAns:"d"
},

{ question:"The Big Bash League is based on which country ?",
options: {
  a: "India",
  b: "New Zealand",
  c: "Australia",
  d: "England"
},
rightAns:"c"
},

{ question:"Who is the first player who scored double century in ODI ?",
options: {
  a: "Sachin Tendulkar",
  b: "Chris Gayle",
  c: "Virendra Sehwag",
  d: "Brendon McCullum"
},
rightAns:"a"
},

{ question:"Who is the first player to reach 10,000 runs in International Test Cricket ?",
options: {
  a: "Sachin Tendulkar",
  b: "Vivian Richards",
  c: "Sunil Gavaskar",
  d: "Kumar Sangakkara"
},
rightAns:"a"
},

{ question:"What is the name of the tie-breaking method used in limited-overs cricket matches",
options: {
  a: "duckworth lewis method",
  b: "Draw",
  c: "Super Over",
  d: "Decision by Third Umpire"
},
rightAns:"c"
},

{ question:"When did England win the Cricket World Cup for the first time (year)?",
options: {
  a: "2003",
  b: "2009",
  c: "2019",
  d: "1981"
},
rightAns:"c"
},

{ question:"Who has a world record of 100 centuries in all format ?",
options: {
  a: "Virat Kohli",
  b: "Ricky Pointing",
  c: "Sourav Ganguly",
  d: "Sachin Tendulkar"
},
rightAns:"d"
},

{ question:"Which country won the Cricket World Cup the most?",
options: {
  a: "India",
  b: "Austrailia",
  c: "New Zealand",
  d: "Sri Lanka"
},
rightAns:"b"
}    
  ] }

//data---> users who already played quiz
const leaderBoard ={
data:[{
  name:"Ankit",
  score:5
},
{
  name:"Ishika",
  score:2
},
{
 name:"Tanay",
  score:3
 },
  {
  name:"Kundan",
  score:7
  }
    ]}




//for questions and answers, we can use functions also.
function displayQuesAndOptions(dataAll){
   //welcome screen 
  
  for(let i = 0; i<dataAll.data.length; i++){ //for looping objects
    console.log(kuler(`\nQ${i+1}. ${dataAll.data[i].question}\n`,"#0ea5e9")); //1..for questions

    
    for(let key in dataAll.data[i].options){
console.log(kuler(`${key}.${dataAll.data[i].options[key]}\n`,"#f472b6"));    //2..for options (kety --> a,b,c,d) & here i is always for data as it repeats again and again
    }

    let userAns = read.question("Enter your answer (a/b/c/d) -  ").toLowerCase(); //if user writes Caps letter convert it to lower as your small keys of options
  checkAns(userAns, dataAll.data[i].rightAns) 
}} //this function should also be in loop as ans should be given as console.log() as per question

displayQuesAndOptions(dataAll); //,,it should be for dataAll set for the questions as objects above(written lastly)
//earlier i used arrow function and set console,.log(showQues) that was showing me undefined


console.log(`Your Score- ${score}`)
//logical part of the app written in func()//

highScorer(leaderBoard);
//logical display of leaderboard


function checkAns(userAns,rightAns){
    if(userAns === rightAns){
    score++;
    console.log(kuler("Correct Answer\n\n\n","#059669"));
  }
    else{
      console.log(kuler("Incorrect Answer\n","#dc2626"));
      console.log(kuler(`Correct Answer ${rightAns}\n`,"#fde047"));
    }}  //Main Logical part for the checking ans


function highScorer(leaderBoard){
  leaderBoard.data.push({name:userName, score:score})
  //console.log(leaderBoard);
  let sortedList =leaderBoard.data.sort((a,b)=> (b.score - a.score));
  console.log(kuler("\n\n\n\n Your position in Leader Board\n","#451a03"))
  for(let leader of sortedList){
    console.log(kuler(`${leader.name} \nScore- ${leader.score}\n\n`,"#881337"));
  }
} // logical part for scoring scores of all users and set according to leaderboard





  
