// ============================================
// TYPING EFFECT ANIMATION
// ============================================

// Configuration
const typingWords = [
  "AI Videos",
  "AI Automation",
  "AI Agents",
  "AI Voice Agent",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

// DOM Elements
const typingElement = document.getElementById("typing-text");
const cursor = document.getElementById("cursor");

// Typing Function
function type() {
  const currentWord = typingWords[wordIndex];

  if (isDeleting) {
    // Delete characters one by one
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 100; // Faster deletion

    // When word is fully deleted
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % typingWords.length; // Move to next word
      typingSpeed = 500; // Pause before typing next word
    }
  } else {
    // Type characters one by one
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 150; // Normal typing speed

    // When word is fully typed
    if (charIndex === currentWord.length) {
      isDeleting = true;
      typingSpeed = 1500; // Pause before deleting
    }
  }

  setTimeout(type, typingSpeed);
}

// ============================================
// COUNTDOWN TIMER
// ============================================

// Set your target date here (October 28, 2025)
const targetDate = new Date("November 11, 2025 00:00:00").getTime();

// Store previous values to detect changes
let previousValues = {
  days: null,
  hours: null,
  minutes: null,
  seconds: null,
};

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Calculate time units
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update display with animation
  updateTimeDisplay("days", days);
  updateTimeDisplay("hours", hours);
  updateTimeDisplay("minutes", minutes);
  updateTimeDisplay("seconds", seconds);

  // If countdown is finished
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".countdown-label").textContent =
      "Registration Closed";
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
  }
}

function updateTimeDisplay(id, value) {
  const element = document.getElementById(id);
  const formattedValue = value.toString().padStart(2, "0");

  // Check if value has changed
  if (previousValues[id] !== formattedValue) {
    // Add flip animation
    element.classList.add("flip");

    // Update the value
    element.textContent = formattedValue;

    // Remove animation class after animation completes
    setTimeout(() => {
      element.classList.remove("flip");
    }, 600);

    // Update previous value
    previousValues[id] = formattedValue;
  }
}

// Initialize countdown
let countdownInterval;

// ============================================
// MOBILE MENU FUNCTIONALITY
// ============================================

const mobileMenuCheckbox = document.getElementById("mobile-menu");
const menuLinks = document.querySelectorAll('label[for="mobile-menu"] a');

// Close mobile menu when clicking on any link
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuCheckbox.checked = false;
  });
});

// Prevent body scroll when mobile menu is open
mobileMenuCheckbox.addEventListener("change", function () {
  if (this.checked) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // Skip if href is just "#"
    if (href === "#") {
      e.preventDefault();
      return;
    }

    const target = document.querySelector(href);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  // Start typing effect after 1 second delay
  setTimeout(type, 1000);

  // Initialize countdown timer
  updateCountdown(); // Run immediately
  countdownInterval = setInterval(updateCountdown, 1000); // Then every second

  // Add fade-in animation to hero section
  const heroSection = document.querySelector("section");
  if (heroSection) {
    heroSection.style.opacity = "0";
    heroSection.style.transform = "translateY(20px)";

    setTimeout(() => {
      heroSection.style.transition =
        "opacity 0.8s ease-out, transform 0.8s ease-out";
      heroSection.style.opacity = "1";
      heroSection.style.transform = "translateY(0)";
    }, 100);
  }
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

let lastScroll = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // Add shadow when scrolled
  if (currentScroll > 50) {
    navbar.style.boxShadow = "0 4px 6px -1px rgba(245, 183, 0, 0.1)";
  } else {
    navbar.style.boxShadow = "none";
  }

  lastScroll = currentScroll;
});

// ============================================
// FAQ ACCORDION FUNCTIONALITY
// ============================================

function toggleFAQ(button) {
  const faqItem = button.parentElement;

  // Simply toggle the clicked item (don't close others)
  faqItem.classList.toggle("active");
}

//  Open first FAQ by default
// document.addEventListener('DOMContentLoaded', () => {
//     const firstFAQ = document.querySelector('.faq-item');
//     if (firstFAQ) {
//         firstFAQ.classList.add('active');
//     }
// });

// ============================================
// STICKY MOBILE FOOTER FUNCTIONALITY
// ============================================

// Update mobile countdown timer
function updateMobileCountdown() {
  const targetDate = new Date("November 11, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update mobile footer countdown
  const mobileDays = document.getElementById("mobile-days");
  const mobileHours = document.getElementById("mobile-hours");
  const mobileMinutes = document.getElementById("mobile-minutes");
  const mobileSeconds = document.getElementById("mobile-seconds");

  if (mobileDays) mobileDays.textContent = days + "d";
  if (mobileHours) mobileHours.textContent = hours + "h";
  if (mobileMinutes) mobileMinutes.textContent = minutes + "m";
  if (mobileSeconds) mobileSeconds.textContent = seconds + "s";

  if (distance < 0) {
    if (mobileDays) mobileDays.textContent = "0d";
    if (mobileHours) mobileHours.textContent = "0h";
    if (mobileMinutes) mobileMinutes.textContent = "0m";
    if (mobileSeconds) mobileSeconds.textContent = "0s";
  }
}

// Copy coupon code functionality
function copyCouponCode() {
  const couponCode = "EV2027";

  // Copy to clipboard
  navigator.clipboard
    .writeText(couponCode)
    .then(() => {
      // Show toast notification
      const toast = document.getElementById("coupon-toast");
      if (toast) {
        toast.classList.add("show");

        // Hide after 2 seconds
        setTimeout(() => {
          toast.classList.remove("show");
        }, 2000);
      }
    })
    .catch((err) => {
      console.error("Failed to copy coupon code:", err);
    });
}

// Initialize mobile countdown on page load
document.addEventListener("DOMContentLoaded", () => {
  updateMobileCountdown();
  setInterval(updateMobileCountdown, 1000);

  // Hide sticky footer when scrolling to footer section
  const stickyFooter = document.getElementById("sticky-mobile-footer");
  const footer = document.querySelector("footer");

  if (stickyFooter && footer) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stickyFooter.style.display = "none";
          } else {
            if (window.innerWidth < 1024) {
              stickyFooter.style.display = "block";
            }
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(footer);
  }
});
