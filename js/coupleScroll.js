function couple (){
    let coupleScroll = document.querySelectorAll('.scrollPicture')

    for (let i = 0; i < coupleScroll.length; i++) {
        let scroll = coupleScroll[i];
        let windowHeight = window.innerHeight
        let top = scroll.getBoundingClientRect().top
        let elementVisible = 100
        
        if (top <  windowHeight - elementVisible ) {
            scroll.classList.add('active')
        }else{
            scroll.classList.remove('active')
        } 
    }
}

window.addEventListener('scroll', couple)