// //////////////////////////////////////////////////////////
 // init Isotope
      var iso = new Isotope(".isotope-container .row", {
        itemSelector: ".col-6",
        layoutMode: "fitRows",
      });

      // filter items on click
      document.querySelectorAll(".menu-filters li").forEach((btn) => {
        btn.addEventListener("click", function () {
          document
            .querySelector(".menu-filters .filter-active")
            ?.classList.remove("filter-active");
          this.classList.add("filter-active");
          let filterValue = this.getAttribute("data-filter");
          iso.arrange({ filter: filterValue });
        });
      });

      // arrow back //////////////////////////////////////////////////
      document
        .getElementById("back-btn")
        .addEventListener("click", function () {
          window.location.href = "../index.html"; // غيرها لاسم صفحة الهوم بتاعتك
        });

$(document).on('turbolinks:load', function () {
    const observer = lozad();
    observer.observe();
  })
  if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
  }
  document.querySelectorAll('img').forEach(img => {
  img.setAttribute('draggable', 'false');
})
// ///////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  // منع النقر بزر الفأرة الأيمن على الصفحة بالكامل
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  // منع سحب الصور
  document.addEventListener("dragstart", function (e) {
    if (e.target.tagName === "IMG") {
      e.preventDefault();
    }
  });

  // تعطيل اختصارات F12 و Ctrl+U و Ctrl+Shift+I
  document.addEventListener("keydown", function (e) {
    if (e.key === "F12" || 
        (e.ctrlKey && e.key === "u") || 
        (e.ctrlKey && e.shiftKey && e.key === "I")) {
      e.preventDefault();
      alert("تم تعطيل عرض المصدر لحماية المحتوى!");
    }
  });
});