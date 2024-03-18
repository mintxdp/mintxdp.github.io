let menubox = document.querySelector('.menu')
let menuitems = document.querySelector('.menuitems')

menuState={
    on : function (){
        menuitems.style.display='grid'
    },
    off : function (){
        menuitems.style.display='none'
    }
}
state =false

let nav = document.querySelector(".navbar")
console.log(menuState.on)

menubox.addEventListener('click',function (){
   if(state){
        menuState.off()
        nav.style.position='static'
        state=false;
   }
   else{
      menuState.on()
      nav.style.position='fixed'
      state=true;
   }
})


window.addEventListener('scroll',function (){
   if(this.window.scrollY>2){
    // nav.style.border='solid black 1px'
   }
   else{
    nav.style.border='none'
   }
})