const modalViews = document.querySelectorAll('.get_modal'),
      modalBtns = document.querySelectorAll('.get_button'),
      modalCloses = document.querySelectorAll('.get_modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () =>{
    modal(i)
  })
})

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () =>{
    modalViews.forEach((modalView) =>{
      modalView.classList.remove('active-modal')
    })
  })
})
// Property carousel

const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter]");

let lastClickedBtn = filterBtn[0];

const filter = function () {
  lastClickedBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedBtn = this;

  for (let i = 0; i < filterItems.length; i++) {
    if (filterItems[i].dataset.filter === this.dataset.filterBtn) {
      filterItems[i].style.display = "block";
    } else {
      filterItems[i].style.display = "none";
    }
  }
}

addEventOnElem(filterBtn, "click", filter);

// Testimonials carousel
var count = 0;
var inc = 0;
var margin = 0;
var slider = document.getElementsByClassName('slider-width')[0];
var itemDisplay = 0;
if(screen.width > 950){
  itemDisplay = document.getElementsByClassName('testimonial-category')[0].getAttribute('item-display-d');
}
console.log(itemDisplay)
