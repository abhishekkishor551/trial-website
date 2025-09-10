// Smooth scroll for the button
document.querySelector('.btn').addEventListener('click', function(e) {
  e.preventDefault();
  const target = document.querySelector(this.getAttribute('href'));
  target.scrollIntoView({ behavior: 'smooth' });
});

// Optional: Animate features on scroll
const features = document.querySelectorAll('.feature-card');

window.addEventListener('scroll', () => {
  features.forEach(feature => {
    const featureTop = feature.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight / 1.2;
    if (featureTop < triggerPoint) {
      feature.style.opacity = '1';
      feature.style.transform = 'translateY(0)';
      feature.style.transition = 'all 0.6s ease';
    }
  });
});

// Modal logic
const modal = document.getElementById("loginModal");
const btn = document.getElementById("loginBtn");
const closeBtn = document.querySelector(".close");

// Open modal
btn.onclick = () => {
  modal.style.display = "flex";
};

// Close modal
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Close when clicking outside
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("loginModal");
  const btn = document.getElementById("loginBtn");
  const closeBtn = document.querySelector(".close");

  // Open modal
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Close with X
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close on outside click
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});


