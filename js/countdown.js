const countdownPernikahan = document.querySelector('#countdown');

// Countdown
const countdown = new Date('Dec 15, 2023')
const setCountdown = setInterval(() => {
    const now = new Date()

    const distance = countdown - now

    const days = Math.floor((distance / (1000 * 60 * 60 * 24)));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    const minute = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
    const second = Math.floor((distance % (1000 * 60) / (1000)));

    countdownPernikahan.innerHTML = '<div id="time-countdown" >' + 
                                        '<div id="time-format" >' + 
                                            '<span> ' + days + ' : ' + hours + ' : ' + minute + ' : '
                                            + second + 
                                            ' </span>' + 
                                        '</div>' + 
                                        '<div id="text-time">' 
                                            + '<span>Hari</span>' + '<span>Jam</span>' + '<span>Menit</span>' 
                                            + '<span>Detik</span>' + 
                                        '</div>' + 
                                    '</div>'
});