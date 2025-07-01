document.querySelectorAll(".projectItem").forEach(item => {
  item.addEventListener("click", e => {
    e.preventDefault();

    const container = item.closest(".project-container");
    container.classList.toggle("active");
  });
});