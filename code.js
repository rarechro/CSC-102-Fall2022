


async function countdown50() {
  



// below is a way more efficient way of doing this.


  
    console.log('start timer'); //lets me know the timer started
    var count = 50; // sets a int var to 50
    for (let step = 0; step < 10; step++) { // loop 0 through 10
      document.getElementById("CountDis").innerHTML = count; // display new count var value
      await new Promise(resolve => setTimeout(resolve, 5000)); // wait 5 seconds
      
      count = count- 5; // subtract 5 from count var
       // display new count var value
      if (count == 0){ // if count is zero do this
        document.getElementById("CountDis").innerHTML = 'Blast Off'; // set timer to blastoff
        document.alert("BlastOff"); // blastoff


      }
    }
    //await new Promise(resolve => setTimeout(resolve, 1000));
   

}



function CountDownTimer() {
  // count down timer 50 to 0 by 5
  console.log("countdown started");
  //var count = 50;
  countdown50();
  //count - 1;
  //document.getElementById("CountDis").innerHTML = count;


}


function playCraps(){

console.log("play?");
// gets random number 1-6
die1 = Math.ceil(Math.random()*6);
die2 = Math.ceil(Math.random()*6);
console.log('die1', die1, 'die2', die2);
//sets both player values to random number to be displayed
document.getElementById("dieres1").innerHTML = die1;
document.getElementById("dieres2").innerHTML = die2;


//check if craps 7 or 11
var sum = die1 + die2;

if (sum == 7 || sum == 11){
//check for lost
console.log("lose");
document.getElementById("gameresult").innerHTML = 'Lose :(';

}

else if (die1 % 2 == 0 && die1 == die2){
// check for win
console.log("win")
document.getElementById("gameresult").innerHTML = 'You Win!';
}

else{
// if neither win or lose tie
console.log("Tie")
document.getElementById("gameresult").innerHTML = 'Tie! so close 0-0';
}



//check for win


//check for tie









}