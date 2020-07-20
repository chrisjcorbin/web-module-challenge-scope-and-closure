// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter1 is showing the count variable inside of counterMaker. This means, it will only be available locally and not be accessible outside of the function.
 * counter2 is showing the count variable outside of counterMaker. This means, it will be accessible inside and outside and so be considered global. 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter1 uses a closure. You can tell because it has the variable declared inside of the function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * counter1 would be preferrable most of the time as it maintains data privacy by making the variable(s) declared inside of the function only accessible therein.
 * 
 * counter2 would be ideal if you need access to a variable outside of a function. Although, is not recommended or preferred in most cases.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  let points = Math.floor(Math.random() * 3);
  return points;
}

console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(runs, num){
  let final = {
  'Home': 0, 
  'Away': 0,
  }
  for (let i = 0; i < num; i++){
    final.Home += runs();
    final.Away += runs();
  }
  return final;
}

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function scoreboard(getInningScore, num) {
  let finalRuns = {
  'Home': 0,
  'Away': 0,
  }
  for (let i = 0; i < num; i++) {
    finalRuns.Home = finalRuns.Home + getInningScore();
    finalRuns.Away = finalRuns.Away + getInningScore();
    if (i===0){
      console.log(`${i+1}st inning: ${finalRuns.Away}-${finalRuns.Home}`);
    }else if(i===1){
      console.log(`${i+1}nd inning: ${finalRuns.Away}-${finalRuns.Home}`);
    }else if(i===2){
      console.log(`${i+1}rd inning: ${finalRuns.Away}-${finalRuns.Home}`);
    }else{
      console.log(`${i+1}th inning: ${finalRuns.Away}-${finalRuns.Home}`);
    }
  }
  return (`Final Score : ${finalRuns.Away} - ${finalRuns.Home}`);
}

console.log(scoreboard(inning, 9));