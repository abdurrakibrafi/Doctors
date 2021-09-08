//Preloader
var preloader=document.querySelector(".preloader")
window.addEventListener("load", vanish)
function vanish(){
    preloader.classList.add("timeout")
}
//Scroll button
const toTop = document.querySelector (".to-top");

window.addEventListener("scroll",() => {
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
   }else {
       toTop.classList.remove("active");
   }
});


            