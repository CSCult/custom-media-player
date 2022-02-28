console.log("welcome to Echoes");

//initialize the variables
letsongIndex=0;
let audioElement = new Audio("1.mp4");
let masterPlay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("masterplay");
let songs =[
    {songName:"walliyan",filePath:"music player/1.mp4",coverPath:"D:\music player"},
    {songName:"saiyyan",filePath:"",coverPath:""},
    {songName:"khairiyat",filePath:"",coverPath:""},
    {songName:"chidiya",filePath:"",coverPath:""},
    {songName:"excuses",filePath:"",coverPath:""},
]
let audioElement = new audio("1.mp4");
// audioElement.play();


//handle play/pause click
masterPlay.addEventListener("click",()=>{
if(audioElement.paused || audioElement.currenttime<=o){
    audioElement.play();
} 
})

//listen to events
myProgressBar.addEventListener("timeupdate",()=>{
console.log("timeupdate")
//update seek bar
})