const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
  menuButton.textContent = isOpen ? "×" : "☰";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Ouvrir le menu");
    menuButton.textContent = "☰";
  });
});

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const subject = encodeURIComponent(`Demande AUTO PRESTIGE — ${data.get("model")}`);
  const body = encodeURIComponent(
    `Nom : ${data.get("name")}\nE-mail : ${data.get("email")}\nModèle : ${data.get("model")}\n\nMessage :\n${data.get("message")}`
  );
  window.location.href = `mailto:contact@autoprestige.example?subject=${subject}&body=${body}`;
});
