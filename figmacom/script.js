let menu = document.querySelector('#menu');
let link = document.querySelector('.link');


menu.onclick = () => {
    menu.classList.toggle('fa-times');
    link.classList.toggle('active');
}