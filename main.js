let container =document.querySelector(".container")
let title = document.querySelector(".title")
let progresss_containe = document.querySelector(".progresss-containe")
let progress = document.querySelector(".progress")
let audio = document.querySelector(".audio")
let img = document.querySelector(".img")
let forword =document.getElementById('forword')
let stop =document.getElementById('stop')
let back =document.getElementById('back')
 let songs =["hey" ,"summer" ,"ukulele"]
 let somgIndex =2
 loadsong(songs[somgIndex])
 function loadsong (song){

title.innerHTML = song
audio.src = `music/${song}.mp3`
img.src = `images/${song}.jpg`

 }
function prev(){

somgIndex--
if(somgIndex <0){
    somgIndex = songs.length -1
}
loadsong(songs[somgIndex])
playAudio()

}
//make progreaa pare
function progressaudio(e){
const { duration ,currentTime} = e.srcElement
const percnt = (currentTime /duration) *100
progress.style.width = `${percnt}%`

}
audio.addEventListener("timeupdate" ,progressaudio)
function next(){


somgIndex++
if(somgIndex >songs.length -1 ){
    
    somgIndex = 0
}

loadsong(songs[somgIndex])
playAudio()

}

 
 //add events to dom
 back.addEventListener("click" ,prev)
 forword.addEventListener('click' , next)
stop.onclick =() =>{
let state = container.classList.contains("play")
if(state){

stopAudio()

}else{

    playAudio()

}

}
//stopaudio
function stopAudio(){

container.classList.remove("play")
stop.querySelector("i").classList.remove("fa-play")
stop.querySelector("i").classList.add("fa-stop")

audio.pause()
 
}
//play audio
function  playAudio(){

audio.play()
container.classList.add("play")
stop.querySelector("i").classList.remove("fa-stop")
stop.querySelector("i").classList.add("fa-play")
}
