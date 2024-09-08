const popUps = document.querySelectorAll('.popUp'),
      popUp_close = document.querySelectorAll('.popUp-close'),
      awards_btn = document.querySelector('.awards-btn');


awards_btn.addEventListener('click', () => {
    popUps.forEach(popUp => {
        popUp.classList.remove('hidden')
    })
})



popUp_close.forEach(close => {
    close.addEventListener('click', () => {
        close.parentElement.classList.add('popUpHide');
        setTimeout(() => {
            close.parentElement.parentElement.classList.add('hidden');
            window.location.reload()
        }, 500);
    })
});


window.addEventListener('click', (e) => {
    popUps.forEach(popUp => {
        if(e.target == popUp) {
            popUp.children[0].classList.add('popUpHide');
            setTimeout(() => {
                popUp.classList.add('hidden');
                window.location.reload()
            }, 500);
        }
    })
})