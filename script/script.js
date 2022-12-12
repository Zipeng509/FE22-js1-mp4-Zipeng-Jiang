const controls1 = anime({
    targets: '.letter',
    keyframes: [
        { opacity: 0, translateY: "-100%" },
        { opacity: 1, translateY: 0 },
    ],
    delay: anime.stagger(300),
    duration: 3000
})

const duration = 12000
const controls2 = anime({
    targets: ".img-container-overlay",
    opacity: 0,
    duration,
})

const controls3 = anime({
    targets: ".img-the-rock",
    opacity: 0,
    duration,
})

const controls4 = anime({
    targets: ".img-zipeng",
    opacity: 1,
    duration,
})

const controls5 = anime({
    targets: '.btn',
    scale: [
      {value: .1, easing: 'easeOutSine', duration: 500},
      {value: 1, easing: 'easeInOutQuad', duration: 1200}
    ],
    delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
    loop: true
  });
  
const play = () => {
    controls1.play()
    controls2.play()
    controls3.play()
    controls4.play()
    controls5.play()
}

const restart = () => {
    controls1.restart()
    controls2.restart()
    controls3.restart()
    controls4.restart()
    controls5.restart()
}

const pause = () => {
    controls1.pause()
    controls2.pause()
    controls3.pause()
    controls4.pause()
    controls5.pause()
}

const stop = () => {
    restart()
    pause()
}

pause()

const playBtn = document.querySelector('#play');
const pauseBtn = document.querySelector('#pause');
const stopBtn= document.querySelector('#stop');

playBtn.addEventListener('click', play);
pauseBtn.addEventListener('click', pause);
stopBtn.addEventListener('click', stop);