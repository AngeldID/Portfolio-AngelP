const player = document.getElementById('VolumeControl');

const audio = new Audio();

audio.src="resources/Persona5OSTBeneaththeMaskrain.mp3"

player.addEventListener
('click',function(){
    if(audio.paused){
        audio.play()
    }
    else{
        audio.pause()
    }
})