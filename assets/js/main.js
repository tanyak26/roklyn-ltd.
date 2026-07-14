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
  const sentMessage = document.querySelector("[data-form-sent]");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector("[data-submit-button]");
    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const enquiryType = String(formData.get("enquiry_type") || "").trim();
    const service = String(formData.get("service_needed") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const subject = encodeURIComponent(`New ROKLYN LTD enquiry from ${name || "website visitor"}`);
    const body = encodeURIComponent(
      [
        "New website enquiry",
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email || "Not provided"}`,
        `I am: ${enquiryType}`,
        `Service needed: ${service}`,
        "",
        "Message:",
        message
      ].join("\n")
    );

    if (submitButton) {
      submitButton.textContent = "Opening email...";
    }

    window.location.href = `mailto:info@roklynltd.co.uk?subject=${subject}&body=${body}`;

    if (sentMessage) {
      sentMessage.hidden = false;
    }

    window.setTimeout(() => {
      if (submitButton) {
        submitButton.textContent = "Email ROKLYN LTD";
      }
    }, 1200);
  });
}
