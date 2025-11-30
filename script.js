// const counters = document.querySelectorAll('.counter');

//     counters.forEach(counter => {
//       let count = parseInt(counter.getAttribute('data-start'));

//       setInterval(() => {
//         count += 1;
//         counter.textContent = count.toLocaleString();
//       }, 2000);
//     });
  const gallery = document.querySelector(".gallery");
  const items = document.querySelectorAll(".gallery-item");
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");

  let index = 0;
  let autoSlide;

  function getVisibleItems() {
    const wrapperWidth = document.querySelector(".gallery-wrapper").offsetWidth;
    const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);
    return Math.floor(wrapperWidth / itemWidth);
  }

  function showSlide() {
    const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);
    gallery.style.transform = `translateX(-${index * itemWidth}px)`;
  }

  function nextSlide() {
    const visibleItems = getVisibleItems();
    if (index < items.length - visibleItems) {
      index++;
    } else {
      index = 0;
    }
    showSlide();
  }

  function prevSlide() {
    const visibleItems = getVisibleItems();
    if (index > 0) {
      index--;
    } else {
      index = items.length - visibleItems;
    }
    showSlide();
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  items.forEach(item => {
    item.addEventListener("mouseenter", () => clearInterval(autoSlide));
    item.addEventListener("mouseleave", startAutoSlide);
  });

  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 2000);
  }

  startAutoSlide();
  window.addEventListener("resize", showSlide);


// ---- Study Counter ----
const studyCounter = document.getElementById("studyCounter");
let studyCount = parseInt(studyCounter.textContent);

function increaseStudyCounter() {
  studyCount++;
  studyCounter.textContent = studyCount;
}

setInterval(increaseStudyCounter, 1000); // every 1 second


// ---- Checked Counter ----
const checkedCounter = document.getElementById("checkedCounter");
let checkedCount = parseInt(checkedCounter.textContent);

function increaseCheckedCounter() {
  checkedCount++;
  checkedCounter.textContent = checkedCount;
}

setInterval(increaseCheckedCounter, 1000); // every 1 second


// Get the button
const backToTopButton = document.getElementById("backToTop");

// Show button when user scrolls down 200px
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Scroll smoothly to top when button is clicked
backToTopButton.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



// ---------------------------------------------About Selection--------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  const aboutSection = document.getElementById('about');
  if (!aboutSection) return;

  // Configure observer to trigger when the section is entering viewport.
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutSection.classList.add('in-view');
        aboutSection.classList.remove('out-of-view');
      } else {
        // If you want the animation to replay when user scrolls back in,
        // keep the remove line below. If you want animation only once, comment it out.
        aboutSection.classList.remove('in-view');
        aboutSection.classList.add('out-of-view');
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -20% 0px', // trigger a bit earlier (20% before bottom)
    threshold: 0.15                // when 15% of section is visible
  });

  observer.observe(aboutSection);
});


  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible'); // Remove when out of view
        }
      });
    },
    { threshold: 0.3 } // Trigger when 30% of the section is visible
  );

  document.querySelectorAll('.slide-top').forEach(el => observer.observe(el));


