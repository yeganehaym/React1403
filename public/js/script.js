window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.top-bar');
    if (window.scrollY > 50) { // ارتفاعی که نوار باید پس زمینه تیره پیدا کند
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });