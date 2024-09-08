const html = document.querySelector('html');
const switchBtn = document.querySelector('.switch-btn');
const langBtn = document.querySelector('.lang-head');
const langLists = document.querySelectorAll('.lang-list li');


langBtn.addEventListener('click', () => {
  langBtn.parentElement.classList.toggle('showLang')
});

langLists.forEach(list => {
  list.addEventListener('click', () => {
    list.parentElement.parentElement.classList.remove('showLang');
    langBtn.children[1].textContent = list.textContent
  })
});

document.addEventListener('click', (e) => {
  langBtn.parentElement.contains(e.target) || langBtn.parentElement.classList.remove('showLang')
})

function store(value){
    localStorage.setItem('dark', value);
  }
  
  function load(){
    const dark = localStorage.getItem('dark');
    if(!dark){
      store(false);
    } else if( dark == 'true'){
      html.classList.add('dark');
      switchBtn.classList.add('clickSwitch')
    } else if(dark == 'false'){ 
      switchBtn.classList.remove('clickSwitch')
    }
  }
  
  
  load();
  
  switchBtn.addEventListener('click', () => {            
     switchBtn.classList.toggle('clickSwitch') ;
    html.classList.toggle('dark');
    store(html.classList.contains('dark'));
  })