document.addEventListener("DOMContentLoaded", function () {

  const anoAtual = document.getElementById("anoAtual");

  if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
  }

  const menu = document.getElementById("menuPrincipal");
  const linksMenu = document.querySelectorAll(
    "#menuPrincipal .nav-link, #menuPrincipal .btn"
  );

  linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
      if (
        window.innerWidth < 992 &&
        menu &&
        menu.classList.contains("show")
      ) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

});
