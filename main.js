const menuOp = document.querySelector('.header-right');
menuOp.addEventListener('click', function(){
    document.querySelector('.hamburger-menu').classList.add('active')
});

const menuCl = document.querySelector('.close');
menuCl.addEventListener('click', function(){
    document.querySelector('.hamburger-menu').classList.remove('active')
});