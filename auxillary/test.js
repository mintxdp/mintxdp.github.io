
// let line = document.querySelector('.line')
// 
// 
// let polygon=document.querySelector('.polygon-h')
// window.addEventListener('resize',function (){
    // let sc_width=window.innerWidth
    //  let sc_heigth=window.innerHeight
// 
// 
// 
    // //  let points = `${sc_width/10},${sc_heigth*3/10} ${sc_width*1.5/10},${sc_heigth*3/10}`
    //  
    // 
// 
    // line.setAttribute('x1',sc_width/10)
// line.setAttribute('y1',sc_heigth/10,)
// line.setAttribute('x2',sc_width/10)
// line.setAttribute('y2',sc_heigth*3/10)
// polygon.setAttribute('points',points)
// 
// 
// })
// 
// 
// 
// 
//main code 




let letter_h1=document.querySelector('.h1')
let letter_h2=document.querySelector('.h2')
let letter_h3=document.querySelector('.h3')
let letter_e=document.querySelector('.e')
let letter_l1=document.querySelector('.l1')
let letter_l2=document.querySelector('.l2')
let letter_o=document.querySelector('.o')









window.addEventListener('resize',function(){

    let x=window.innerWidth
    let y=window.innerHeight
    // 
    path_string=`M ${x*22/100} ${y*16/100} L ${17.5*x/100} ${17.5*y/100} `
letter_e.setAttribute('d',path_string)
// letter_l1.setAttribute('d','')
// letter_l2.setAttribute('d','')
// letter_o.setAttribute('d','')
// if(x>700){
    // letter_h1.setAttribute('width','2%')
    // letter_h2.setAttribute('width','2%')
    // letter_h3.setAttribute('width','2%')
// }

    

})