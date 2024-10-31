const musicas = document.querySelectorAll(".musicas");
const btnPlayPause = document.getElementById("playPause");
const iconBtn = document.getElementById("iconBtn");

let musicaAtual = null;

musicas.forEach(musica => {
  const audio = musica.querySelector(".audio");
  
  musica.addEventListener("click", ()=>{
    document.querySelectorAll(".audio").forEach(outroAudio =>{
      if(outroAudio !== audio){
      outroAudio.pause();
      outroAudio.currentTime = 0;
      iconBtn.classList.add("bi-play-circle-fill")
      iconBtn.classList.remove("bi-pause-circle-fill")
      }
    });
    musicaAtual = audio;

  });
});

btnPlayPause.addEventListener("click", ()=>{
  if(musicaAtual){
    if(musicaAtual.paused){
      musicaAtual.play()
      iconBtn.classList.remove("bi-play-circle-fill")
      iconBtn.classList.add("bi-pause-circle-fill")
    }else{
      musicaAtual.pause()
      iconBtn.classList.add("bi-play-circle-fill")
      iconBtn.classList.remove("bi-pause-circle-fill")
    }
  }
})