const btn = document.querySelector('.hamburger');
const items = document.querySelector('header nav .nav-items');

btn.addEventListener('click', ()=>{
    if (items.classList.contains('active')) {
        document.body.style.height = 'max-content';
        document.body.style.overflow = 'auto';
        items.classList.remove('active');
    } else{
        items.classList.add('active');
        document.body.style.height = '100vh';
        document.body.style.overflow = 'hidden';
    }
})