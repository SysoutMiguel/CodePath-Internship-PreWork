//Global Constants

const cluePauseTime = 333;
const nextClueWaitTime = 1000;

// Global Variables
var tonePlaying = false;
var volume = 0.5; // bw 0.0 & 1.0
var pattern = [];
var progress = 0;
var gamePlaying = false;
var guessCounter = 0;
var playerMistakes = 0;
var clueHoldTime = 1000;

function startGame(){
  // Init. game Vars
  playerMistakes = 0;
  progress = 0;
  gamePlaying = true;
  pattern = randomPattern();
  // This swaps Start && Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume();
  let delay = nextClueWaitTime;
  for (let i = 0; i <= progress; i++){
    console.log("play single clue: "+ pattern[i] + " in "+ delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;
    if (clueHoldTime > 500){
      clueHoldTime = clueHoldTime-50;
    } else {
      clueHoldTime = clueHoldTime;
    }

  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You Lost :(")
}

function winGame(){
  stopGame();
  alert("Game Over, You Win!! Hooray");
}

function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      }else{
        progress++;
        playClueSequence();
      }
    }else{
      guessCounter++;
    }
  }else{
    if (playerMistakes < 2){
      playerMistakes++;
      playClueSequence();
    } else {
      loseGame();  
    }
    
  }
}   

function randomPattern() {
    return Array.apply(null, Array(8)).map(function() {
        return Math.round(Math.random() * 8) + 1;
    });
  
}


// Sound Synthesis Functions
const freqMap = {
  1: 200.6,
  2: 260.6,
  3: 320.3,
  4: 430.2,
  5: 500.6,
  6: 720.3,
  7: 922.4,
  8: 980.0,
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)