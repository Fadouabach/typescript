const links = document.querySelectorAll(".navbar a")

links.forEach(link => {
  if (link.href.includes(window.location.pathname)) {
    link.style.color = "#2563eb"
  }
})
