let project_wrapper = document.getElementById('project')
let Project = 
{
    number : undefined,
    element : document.createElement('div'),
    class:`project${this.number} projects`,
    elements : {
        pr_detail : {
            class : "project_detail",
            element : document.createElement("div"),
            elements : {
                tracker : {
                    element :document.createElement("div"),
                    class : "tracker",
                    id : "tracker",
                    elements : {
                        line1 : {
                            element :  document.createElement("div") ,
                            class : "line1",
                            id : "line1",
                        },
                        line2 : {
                            element :  document.createElement("div") ,
                            class : "line2",
                            id : "line2"
                        },
                        sqr : {
                            element :  document.createElement("div") ,
                            class : "square",
                            id : "square"
                        }
                    }
                }
            }
        },
        
       pr_content:  {
        element :  document.createElement("div"),
            class : `project_content`,
            elements : {
                 project_title : {
                  class:`project_title`,
                  element :  document.createElement("span"),
                 },
                 project_stack : {
                 class : " project_stack",
                 element :  document.createElement("div"),
                 },
                 project_content :{
                    element :  document.createElement("p"),
                    class : "content",

                 },
                 project_link : {
                    element :  document.createElement("div"),
                    elements : {
                        link_element : document.createElement("a")
                    }
                 }
            }
           
        }

    }
}

function Generate(){

    let newProject = Object.assign(Project)
    project_wrapper.appendChild(newProject.element)
 
    child_project=newProject.element
    newProject.number=5;
    newProject.element.class=newProject.class



    
}



// Animation 

// let projects = document.getElementsByClassName('projects')
// let content = document.getElementsByClassName('content')
// let circle = document.getElementsByClassName('.circle')

// console.log(projects[0])
// console.log(content[0])

// window.addEventListener('scroll',function(){

// })


// document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
// })
const items = document.querySelectorAll('.content')
let oh = document.getElementsByClassName('content')
console.log(oh[0].getBoundingClientRect())

// items.forEach(item => {
//     gsap.to(item,
//         {
//             scrollTrigger : {
//                 trigger : item,
//                 scroller : '.project',
//                 start : "top 300",
//                 end : "top 150px",
//                 scrub : true,
//                 markers : true
//             },
//             x : 50,
//             // duration : 1,
//             // ease : "power2.out"
//         }
//     )
// })



// items.forEach(item => {
//     gsap.to(item,{
//         scrollTrigger : {
//             trigger : item,
//             scroller : '.project',
//             start : "bottom 150px",
//             end : "bottom 50px",
//             scrub : false,
//             markers : {
//                 startColor : "yellow",
//                 endColor : "blue",
//                 fontSize : "12px",
//                 indent : 20
//             }
//         },
//         x : 0,
//         duration : 1,
//         ease : "power2.out"
//     })
// })
let tl =gsap.timeline({
    scrollTrigger : {
        scroller : '.project',
        trigger : '.project1',
        start : 'top 100px',
        end : 'top 0px',
        scrub : true
    }
}
)

tl.to('.project_content1',{  x : 50})
.to('.square1',{scale:3},0)

let tl2 =gsap.timeline({
    scrollTrigger : {
        scroller : '.project',
        trigger : '.project2',
        start : 'top 100px',
        end : 'top 0px',
        scrub : true
    }
}
)

tl2.to('.project_content2',{x:50})
.to('.square2',{scale:3},0)


let tl3 =gsap.timeline({
    scrollTrigger : {
        scroller : '.project',
        trigger : '.project3',
        start : 'top 100px',
        end : 'top 0px',
        scrub : true
    }
}
)

tl3.to('.project_content3',{x:50})
.to('.square3',{scale:3},0)