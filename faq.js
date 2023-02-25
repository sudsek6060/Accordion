'use strict';
const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

function createFaq() {
  faqData.forEach(function(set){
    const html = `
  <div  class="faq ">
  <div class="faq_header">
   <h3>${set.question}</h3>
   
    <p class="hidden">${set.answer}</p>
   <div class="show_btn">
        <span onlick='btnUpdate()' >+</span>
      </div>
  </div>
 </div>
  `
  // console.log(set.question);
  const container = document.querySelector('.accordian_body')
  container.insertAdjacentHTML('beforeend', html)
  })
}
createFaq()

const btn = document.querySelectorAll('.show_btn')
btn.forEach(function(t) {
  t.addEventListener('mouseover', function(e){
    // e.preventDefault()
    const clicked = e.target.closest('.faq_header')
    const para = clicked.childNodes[3];
    const act = document.querySelectorAll('p')
    act.forEach(function(t){
      t.classList.add('hidden');
      
    }) 
    para.classList.remove('hidden');
    
    // console.log(para);
    
  });

})