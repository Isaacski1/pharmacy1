// ======================= Go Top Button Start ======================//
const go_to_top = document.querySelector("[data-go-top]");
window.addEventListener("scroll", function () {
  window.scrollY >= 500
    ? go_to_top.classList.add("active")
    : go_to_top.classList.remove("active");
});

// ======================= Go Top Button End ======================//