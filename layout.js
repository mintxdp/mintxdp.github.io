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

/*
functions : 
1. Show menu when clicked on it.
2. Disable menu when again clicked on it.
3. Disable menu when clicked and started scrolling.
*/

menubox.addEventListener('click',function (){
   if(state){

        menuState.off()
        // nav.style.position='static'
        state=false;
   }
   else{
      menuState.on()
      state=true;
     
      window.addEventListener('scroll',function (){
        menuState.off()
        state=false
        // nav.style.position='static'
     })

   }
})




