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


// Animation : 

    gsap.registerPlugin(ScrollTrigger)

const project = document.querySelector('.project1')
console.log((project.clientWidth))
let square_width = 10

let percent = (10/100 * project.clientWidth)
console.log(percent)

let scalePercent = 18/100 * project.clientWidth /10
console.log(scalePercent)


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

tl.to('.project_content1',{  x : percent})
.to('.square1',{scale:scalePercent},0)
.to('.tracker1',{x:percent/2},0)

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