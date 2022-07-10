const button = document.querySelector('#button');
const toggle = document.querySelector('#toggle');
const navList = document.querySelector('.nav_list');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const main = document.querySelector('#main');


toggle.addEventListener('click', () => {
navList.classList.toggle('active');
main.style.backgroundBlendMode = 'darken';
hamburger.classList.toggle('active2');
close.classList.toggle('active3');
})

const scrolll = document.querySelector("#scrolll");
const scrollr = document.querySelector("#scrollr");

scrolll.addEventListener('click', () => {
    var left = document.querySelector(".comment_section");
    left.scrollBy(350, 0);
})

scrollr.addEventListener('click', () => {
    var right = document.querySelector(".comment_section");
    right.scrollBy(-350, 0);
})


const comment = document.querySelectorAll(".comment");
const commentSection = document.querySelector(".comment_section");
const span1 = document.querySelector("#span1");
const span2 = document.querySelector("#span2");
const span3 = document.querySelector("#span3");
const span4 = document.querySelector("#span4");
const commentSlider = document.querySelector(".comment_slider");

            span1.addEventListener('click', () => {
                comment[0].classList.add('comment');
                            comment[0].style.display = "flex";
                            comment[3].style.display = "none";
                            comment[1].style.display = "none";
                            comment[2].style.display = "none";
                            commentSection.style.overflow = "hidden";
                            span1.style.backgroundColor = "hsl(12, 88%, 59%)";
                            span2.style.backgroundColor = "#fff";
                            span3.style.backgroundColor = "#fff";
                            span4.style.backgroundColor = "#fff";
            })
            
            span2.addEventListener('click', () => {
                comment[0].style.display = "none";
                        comment[2].style.display = "none";
                        comment[3].style.display = "none";
                        comment[1].style.display = "flex";
                        comment[1].classList.add('commentSection');
                        commentSection.style.overflow = "hidden";
                        span2.style.backgroundColor = "hsl(12, 88%, 59%)";
                        span1.style.backgroundColor = "#fff";
                            span3.style.backgroundColor = "#fff";
                            span4.style.backgroundColor = "#fff";
            })
            span3.addEventListener('click', () => {
                comment[0].style.display = "none";
                        comment[1].style.display = "none";
                        comment[3].style.display = "none";
                        comment[2].style.display = "flex";
                        comment[2].classList.add('commentSection');
                        commentSection.style.overflow = "hidden";
                        span3.style.backgroundColor = "hsl(12, 88%, 59%)";
                        span1.style.backgroundColor = "#fff";
                            span2.style.backgroundColor = "#fff";
                            span4.style.backgroundColor = "#fff";
            })
            span4.addEventListener('click', () => {
                comment[0].style.display = "none";
                        comment[2].style.display = "none";
                        comment[1].style.display = "none";
                        comment[3].style.display = "flex";
                        comment[3].classList.add('commentSection');
                        commentSection.style.overflow = "hidden";
                        span4.style.backgroundColor = "hsl(12, 88%, 59%)";
                        span1.style.backgroundColor = "#fff";
                            span3.style.backgroundColor = "#fff";
                            span2.style.backgroundColor = "#fff";
            })
            
        

const email = document.querySelector("#email");
const submit = document.querySelector("#submit");
const errorMessage = document.querySelector("#error_message");

            submit.addEventListener('click', (e) => {
                e.preventDefault();
              var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                  if(email.value === "" || email.value == "null")
                  {
                      email.style.border = "2px solid hsl(12, 88%, 59%)";
                        errorMessage.innerHTML = "Please insert a valid email";
                        errorMessage.style.color = "hsl(12, 88%, 59%)";
                  }
               if (!email.value.match(mailformat) )
               {
                email.style.border = "2px solid hsl(12, 88%, 59%)";
                errorMessage.innerHTML = "Please insert a valid email";
                errorMessage.style.color = "hsl(12, 88%, 59%)";
               }
               else
               {
                email.style.border = "0px solid hsl(12, 88%, 59%)";
                errorMessage.innerHTML = "";
               }
               
                  })