window.addEventListener('load', () => {
  const links = document.querySelectorAll('#menu .nav li a');
  const link = document.location.href;
  links.forEach((i) => {
    if (link === i.href) {
      i.classList.add('active');
    } else {
      i.classList.remove('active');
    }
  });
});
