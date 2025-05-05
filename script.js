// 🎈 Event Handling
const btn = document.getElementById("actionBtn");
btn.addEventListener("click", () => {
  btn.textContent = "Clicked!";
  btn.style.backgroundColor = "#4caf50";
});

btn.addEventListener("dblclick", () => {
  alert("🎉 Secret double-click unlocked!");
});

btn.addEventListener("mouseover", () => {
  btn.style.opacity = 0.8;
});

btn.addEventListener("mouseout", () => {
  btn.style.opacity = 1;
});

document.addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
});

// 🎮 Interactive Elements
const thumbnails = document.querySelectorAll(".thumbnails img");
const mainImage = document.getElementById("mainImage");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    mainImage.src = thumb.dataset.src;
  });
});

const accordionButtons = document.querySelectorAll(".accordion-btn");
accordionButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

// 📋 Form Validation
const form = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (!email.value.includes("@")) {
    feedback.textContent = "Please enter a valid email.";
    feedback.style.color = "red";
    return;
  }

  if (password.value.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = "Form submitted successfully!";
  feedback.style.color = "green";

  // Add an alert to notify the user
  alert("Your message has been received. Thank you!");
});

// Bonus: Real-time feedback
const passwordInput = document.getElementById("password");
passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length < 8) {
    passwordInput.style.borderColor = "red";
  } else {
    passwordInput.style.borderColor = "green";
  }
});
