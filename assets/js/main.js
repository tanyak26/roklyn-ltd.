const toggle = document.querySelector(".nav__toggle");
const links = document.querySelector(".nav__links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const contactForm = document.querySelector("[data-contact-form]");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(contactForm);
    const status = contactForm.querySelector("[data-form-status]");
    const summary = [
      `Thanks ${data.get("name") || "there"}.`,
      "Your enquiry note is ready.",
      "Please call ROKLYN LTD on 07346 248140 and share these details:",
      `${data.get("type") || ""} | ${data.get("service") || ""} | ${data.get("message") || ""}`
    ].join(" ");

    if (status) {
      status.textContent = summary;
    }
  });
}
