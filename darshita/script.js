=
#js boilerplate

//we will be adding event listeners 

//so now initialize the variables as follows:
/*
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));*/

//here on left side are the names of the variable and on right are written the class names or id names at which we have to apply that event listener
//song1 wh name hai jis name se apnne apna song save kra hoga in file while downloading

//now we will be adding our fav 10 songs in our album
//the syntax is as follows:
//where replace 
/*
let songs = [
    //array of objects
    {songName: "write here the name of the song ", filePath: "write here yiur file path example-> songs/1.mp3  means songs folder me 1.mp3 name ki file ka hona", coverPath: "here should be cover photo ka path write same as song ka path examke-> covers/1.jpg"},

//do this for all the other 9 songs also 
//example for 2nd  and 3rd
    {songName: "song name ", filePath: "what is your file path  ", coverPath: "what is your cover path"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},

//and so on till 10
   
]*/

//now to make call back function use the following syntax but note that use proper/same class/id names as used in html 
/*

songItems.forEach((element, i)=>{ 
    // for each leta hai ek call back function
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    // image ka src apnne cover path krke diya

    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 */

/*


//function to handle play/pause/click
//use the syntax: 

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        //itna krne ke bad bja kr dekho then.....icon pause me convert hojye
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        //itna krne ke bad bja kr dekho then.....icon pause me convert hojye
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})


// time changed event of audio // time update event
//listen to events*/

//we need to update seekbar as well as time 
//we will be using time update in event listener
/*

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    // kitna percent me chahiye means ki percent apni chal chuki h audio
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value= progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
*/

//see the syntax and read the comments and then use ij your js 
/*


const makeAllPlays = ()=>{
    // function pause ko play bnane ke liye]
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{

        if(e.target.classList.contains('fa-play-circle'))
        {
            songIndex=parseInt(e.target.id);
        console.log(e.target);
        // e kya hai jispr click hua
        // target se wo element mil jyga jispr click hua 
        makeAllPlays();

        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');

        // ek bar kisi ne click kiya then yha hojye
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.play();
        gif.style.opacity=1;
        // and then since song change hua hai so current time ko 0 krdege
         audioElement.currentTime =0;
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');

        }
        else if(e.target.classList.contains('fa-pause-circle'))
        {
            songIndex=parseInt(e.target.id);
            console.log(e.target);
            // e kya hai jispr click hua
            // target se wo element mil jyga jispr click hua 
            makeAllPlays();
    
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');

    
            // ek bar kisi ne click kiya then yha hojye
            audioElement.src = `songs/${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.pause();
            gif.style.opacity=0;
      
            audioElement.currentTime = progress;
             masterPlay.classList.remove('fa-pause-circle');
             masterPlay.classList.add('fa-play-circle');
   
    
        }
        
        
    })
})


// yh kaise pta chalega ki jis pr click kra hai wo apna 1st ya 5th ya konsa song hai
// so we have given indexing and id dedi sbko

// now...next and previous pr click wla

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
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
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

// name bhi bdle as song chages
// bydefault 1st wla rkhrge
*/

//your assignment would be ki ap jb play pause kroge usme ek kmi lgegi with above syntax
//find that and resolve it with your skills
