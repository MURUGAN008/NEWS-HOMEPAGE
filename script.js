let sideBar = document.querySelector(".side-bar");
function showSideBar(){
    sideBar.style.display = 'block';
}
function hideSideBar(){
    sideBar.style.display = 'none';
}
let lastScrollY = window.scrollY;
window.addEventListener("scroll",()=>{
    if(lastScrollY < window.scrollY){
        document.querySelector("header").style.display = "initial";
        document.querySelector("header").style.position = "fixed";
    }
    else{
        if(window.scrollY>100){
        document.querySelector("header").style.display = "none";
    }}
    lastScrollY = window.scrollY;
    // document.querySelector("header").style.position = "fixed";
})