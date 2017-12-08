function changeNavOnScroll() {
  var $nav = $('nav');
  if(this.scrollY > 300) $nav.css('background', 'rgba(232, 238, 255, 0.9)');
};

window.addEventListener('scroll', changeNavOnScroll, false);
