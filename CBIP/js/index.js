// const container = document.querySelector('.logo-marq-container');
// const content = document.querySelector('.logo-marq');

// const scroll = () => {
//   if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
//     container.scrollLeft = 0;
//   } else {
//     container.scrollLeft += 1;
//   }
// }

// setInterval(scroll, 100);

const accordionHeaders = document.querySelectorAll(".faq-header");
accordionHeaders.forEach((header) => {
  header.addEventListener("click",(event) => {
    const accordionItem = event.target.parentNode;
    accordionItem.classList.toggle("active");
    if(accordionItem.classList.contains("active")){
      event.target.querySelector('i').setAttribute('class','fa-solid fa-caret-down')
    }else {
      event.target.querySelector('i').setAttribute('class','fa-solid fa-caret-right')
    }
  })
})

var prevScrollpos = "700";
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if(window.innerWidth <= 767) {
    if (1400 >= currentScrollPos) {
      document.querySelector(".custom-nav").style.top = "-100px";
      document.getElementById('up-btn').style.display = "none";
    } else {
      document.querySelector(".custom-nav").style.top = "0";
      document.getElementById('up-btn').style.display = "block";
    }
  }else{
    if (prevScrollpos >= currentScrollPos) {
      document.querySelector(".custom-nav").style.top = "-100px";
    } else {
      document.querySelector(".custom-nav").style.top = "0";
    }
    // prevScrollpos = currentScrollPos;
  }
}



