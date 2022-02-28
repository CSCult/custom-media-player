let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('pbar');
let gif = document.getElementById('gif');

let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs =[
{songName:"I'm so tired of lovesong",filepath:"1.mp3"},
{songName:"Rockabye",filepath:"2.mp3"},
{songName:"Playdate",filepath:"3.mp3"},
{songName:"Into You",filepath:"4.mp3"},
{songName:"Lonely",filepath:"5.mp3"},
{songName:"Strawberries and Cigarettes",filepath:"6.mp3"}
]



masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value= progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        
        
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');
         audioElement.src = `${songIndex+1}.mp3`;
        audioElement.currentTime='0';
        audioElement.play();
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
        
        gif.style.opacity=1;
        
        
        
        
        // else if(e.target.classList.contains('fa-pause-circle'))
        // {
        //     songIndex=parseInt(e.target.id);
        //     makeAllPlays();
    
        //     e.target.classList.remove('fa-pause-circle');
        //     e.target.classList.add('fa-play-circle');
        //     audioElement.src = `${songIndex+1}.mp3`;
        //     masterSongName.innerText = songs[songIndex].songName;
        //     audioElement.pause();
        //     gif.style.opacity=0;
      
        //     audioElement.currentTime = progress;
        //      masterPlay.classList.remove('fa-pause-circle');
        //      masterPlay.classList.add('fa-play-circle');
   
    
        // }
        
        
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterPlay.classList.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
