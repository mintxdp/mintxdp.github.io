
gsap.registerPlugin(ScrollTrigger)

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
let line2=document.querySelector('.line2')
menubox.addEventListener('click',function (){
   if(state){
    gsap.to('.line1',{
        rotation:0
    })
    gsap.to('.line3',{
        rotation:0
    })
    line2.style.stroke='black'
        menuState.off()
        // nav.style.position='static'
        state=false;
   }
   else{
      menuState.on()
      gsap.to('.line1',{
        rotation:40
    })
    gsap.to('.line3',{
        rotation:-40
    })
    line2.style.stroke='#93B1A6'

      state=true;
     
      window.addEventListener('scroll',function (){
        menuState.off()
        state=false
        // nav.style.position='static'
        gsap.to('.line1',{
            rotation:0
        })
        gsap.to('.line3',{
            rotation:0
        })
        line2.style.stroke='black'
        
     })

   }
})

let tracker = document.querySelector('.tracker')

let tracker_height=tracker.clientHeight;

let tracker_circle2=document.querySelector('.tracker_circle2')
let tracker_circle3=document.querySelector('.tracker_circle3')



gsap.to('.tracker_circle1',{
     y:95,
     fill:'#93B1A6',
    scrollTrigger : {
        trigger : ".mainarea2",
        start: "top 100%",
        end:"top 0%",
        scrub:true,
        // markers : {
            // startColor: 'purple',
            // endColor : 'orange',
            // fontSize:'2rem'
        // },
    },
})

gsap.to('.tracker_circle2',{
    y:95,
    fill:'#5C8374',
    // z:10,
   scrollTrigger : {
       trigger : ".mainarea3",
       start: "top 100%",
       end:"top 0%",
       scrub:true,
    //    markers : {
        //    startColor: 'purple',
        //    endColor : 'orange',
        //    fontSize:'2rem'
    //    },
   },
})



