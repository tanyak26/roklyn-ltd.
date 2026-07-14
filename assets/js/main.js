const toggle = document.querySelector(".nav__toggle");
const links = document.querySelector(".nav__links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const sentMessage = document.querySelector("[data-form-sent]");

if (sentMessage && new URLSearchParams(window.location.search).get("sent") === "1") {
  sentMessage.hidden = false;
}

const contactForm = document.querySelector("[data-contact-form]");

if (contactForm) {
  contactForm.addEventListener("submit", () => {
    const submitButton = contactForm.querySelector("[data-submit-button]");

    if (submitButton) {
      submitButton.textContent = "Sending enquiry...";
    }
  });
}
