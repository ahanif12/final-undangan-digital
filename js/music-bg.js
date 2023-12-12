const audioPlayPause = () => {
    const playPause = document.querySelector('.audio button')
    const audio = document.querySelector('#audio')
    if (audio.paused) {
        audio.play()
        playPause.textContent = 'Pause'
    }else{
        audio.pause()
        playPause.textContent = 'Play'
        // playPause.classList.add('fa-pause')
    }
}