console.log("Welcome to Sur..");
let songindex = 0;
let audioElement = new Audio('0.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {songname: "Radha",filePath: "0.mp3",coverpath: "5468.jpg"},
    {songname: "Illahi",filePath: "1.mp3",coverpath: "5337.jpg"},
    {songname: "Chunar",filePath: "2.mp3",coverpath: "5337.jpg"},
    {songname: "Ishare Tere",filePath: "3.mp3",coverpath: "5341.jpg"},
    {songname: "Akh Lad Jaave",filePath: "4.mp3",coverpath: "5223.jpg"},
    {songname: "Chogada",filePath: "5.mp3",coverpath: "5267.jpg"},
    {songname: "Aaj Dil Shayrana",filePath: "6.mp3",coverpath: "5213.jpg"},
]
songitems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverpath; 
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname; 
})
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

songitems.forEach((Element, i) =>
{
    console.log(Element, i);
    Element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    Element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');  
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogressbar.value= progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressbar.value*audioElement.duration/100;
})
const makeallplays = ()=>
{
    Array.from(document.getElementsByClassName('icons')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>
{
    if(e.target.classList.contains('fa-play-circle'))
        {
        songindex=parseInt(e.target.id);
        console.log(e.target);
        audioElement.src = `/${songindex+1}.mp3`;
        masterSongName.innerText = songs[songindex].songname;
        audioElement.play();
        gif.style.opacity=1;
         audioElement.currentTime =0;
         masterplay.classList.remove('fa-play-circle');
         masterplay.classList.add('fa-pause-circle');
        }
    
})
document.getElementById('next').addEventListener('click', ()=>
{
    if (songindex>=6)
    {
        songindex = 0;
    }
    else{
        songindex += 1;
    }
    audioElement.src = `${songindex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
})
document.getElementById('previous').addEventListener('click', ()=>
{
    if (songindex<=0)
    {
        songindex = 0;
    }
    else{
        songindex -= 1;
    }
    audioElement.src = `${songindex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
})

