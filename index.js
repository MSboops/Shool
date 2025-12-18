$(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    if($(this).hasClass('is-active')){
      $('.mnu_top').slideDown(300);
    }else{
      $('.mnu_top').slideUp(300);
    }
  })
})
const hamburger = document.getElementById('hamburger');
const mnu_top = document.getElementById('mnu_top');

hamburger.addEventListener('click', () => {
  mnu_top.classList.toggle('show');
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    mnu_top.classList.remove('show');
  }
});