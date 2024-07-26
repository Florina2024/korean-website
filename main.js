/*--show menu--*/
document.addEventListener("DOMContentLoaded", () => {
    const headerMenu = document.getElementById("header-menu");
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");
  
    if (navToggle) {
      navToggle.addEventListener("click", () => {
        headerMenu.classList.add("show-menu");
      });
    }
  
    if (navClose) {
      navClose.addEventListener("click", () => {
        headerMenu.classList.remove("show-menu");
      });
    }
  });
  
   /*--remove menu mobile--*/
   const headerLink = document.querySelectorAll(".header__link");
  
   const linkAction = () => {
     const headerMenu = document.getElementById("header-menu");
     headerMenu.classList.remove("show-menu");
   };
   headerLink.forEach((n) => n.addEventListener("click", linkAction));

  