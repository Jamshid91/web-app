const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,   
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
    },
});

const start_btns = document.querySelectorAll('button.start')

start_btns.forEach(start => {
    
    start.addEventListener('click', () => {
        start.classList.add('bg-primary', 'dark:bg-primary');
        start.textContent = 'Claim'
    })
})