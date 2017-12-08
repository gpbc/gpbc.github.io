function changeNavOnScroll() {
  var $nav = $('nav');
  this.scrollY > 300 ? $nav.css('background', 'rgba(232, 238, 255, 0.9)')
                     : $nav.css('background', 'rgba(232, 238, 255, 0.2)');
};

window.addEventListener('scroll', changeNavOnScroll, false);
