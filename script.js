let btn_color2 = document.querySelector(".btn-color2");
let btn_color  = document.querySelector(".btn-color");
let move = document.querySelector(".move ul");
let btn_open = document.querySelector(".btn-mn");
let btn_open2 = document.querySelector(".close-menu");
let menu = document.querySelector(".menu-nav");
let openNav = false;

btn_open.addEventListener("click",()=>{
   btn_open2.classList.toggle("open-menu");
   if(!openNav){
         menu.style.left = 0 +"px"
      }
   else{
         menu.style.left = -250 +"px"
      }
   openNav = !openNav;
});
function animated_letter(){
   if(!move){return}
   let vitesse = 1180;
   setInterval(()=>{
      vitesse-=5;
      if(vitesse < -1180){
         vitesse = 1180
         move.style.rigth = 100 +"px"
      }
         move.style.right = vitesse+"px";
   },100);
   requestAnimationFrame(animated_letter());
}
function animation_btn(){
   if(!btn_color){return}
    let size = 0
    let direction = 1;
     setInterval(()=>{
        size += direction;
        if(size >= 10){direction = -1}
        if(size < 1){direction = 1}
        btn_color.style.boxShadow = `0 0 ${size}px rgba(0,255,255, 1)`;
     },98);
 }
function animation_btn2(){
   if(!btn_color2){return}
    let size2 = 0
    let direction2 = 1;
     setInterval(()=>{
        size2 += direction2;
        if(size2 >= 10){direction2 = -1}
        if(size2 < 1){direction2 = 1}
        btn_color2.style.boxShadow = `0 0 ${size2}px rgba(0,255,255, 1)`;
     },98);
 }
animation_btn();
animation_btn2();
requestAnimationFrame(animated_letter());

