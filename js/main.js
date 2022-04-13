let menuMobileDom = document.getElementById("menuHam");
let menuDom = document.getElementById("mainNav");

if(menuMobileDom != null && menuDom != null)
{
    menuMobileDom.addEventListener('click', function(){
        menuDom.classList.toggle("is-active");
    });
}
