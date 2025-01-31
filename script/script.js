document.addEventListener('DOMContentLoaded', function () {
    const submenuToggles = document.querySelectorAll('.submenu-toggle');
  
    submenuToggles.forEach(toggle => {
      toggle.addEventListener('click', function () {
        this.classList.toggle('active');
        const submenu = this.nextElementSibling;
        submenu.classList.toggle('active');
      });
    });
  });