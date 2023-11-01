const headid=document.getElementById('head');
const twoSection=document.getElementById('twoSection');


window.addEventListener('scroll',()=>{

    if( window .scrollY > twoSection.offsetTop - headid.offsetHeight - 90){
        headid.classList.add('active');
    }
    else{
        headid.classList.remove('active');
    }

})

