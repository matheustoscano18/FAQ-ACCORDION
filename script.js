const faqs = document.querySelectorAll(".toggle");

faqs.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    
    toggle.classList.toggle("active");
  });

});
