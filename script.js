/* MENU */



/*SHOW SCROLL UP */ 


/* SCROLL SECTIONS ACTIVE LINK */
// we don't need that 'cause we have multiple pages. We could've used it if we had only one page website. 

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollY = window.pageYOffset;
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58, 
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
  sectionsClass.classList.add('active-link') 
      
    }else{
      sectionsClass.classList.remove('active-link')
    }


    
  })
}
window.addEventListener('scroll', scrollActive)

/* SCROLL REVEAL ANIMATION */

