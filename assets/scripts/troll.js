
var sound = document.createElement('audio')
sound.id = 'audio'
sound.controls = 'controls'
sound.src = 'assets/audio/yeah.mp3'
sound.type = 'audio/mp3'
document.body.appendChild(sound)

function playAudio() {
  document.getElementById('audio').play();
}

setTimeout("playAudio()", 5000);