const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

const stars = [];
const numStars = 200;
const attractionStrength = 0.05;
const returnStrength = 0.01;

let mouseX = 0;
let mouseY = 0;
let userInteracting = false;

function resizeCanvasToHome() {
  const home = document.querySelector('.home');
  canvas.width = home.clientWidth;
  canvas.height = home.clientHeight;
}

function createStars() {
  stars.length = 0;
  for (let i = 0; i < numStars; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    stars.push({
      x,
      y,
      originalX: x,
      originalY: y,
      radius: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5
    });
  }

  mouseX = canvas.width / 2;
  mouseY = canvas.height / 2;
}

function updateMousePosition(x, y) {
  mouseX = x;
  mouseY = y;
  userInteracting = true;
}

function getCanvasRelativePosition(event) {
  const rect = canvas.getBoundingClientRect();
  const x = (event.clientX || event.touches[0].clientX) - rect.left;
  const y = (event.clientY || event.touches[0].clientY) - rect.top;
  return { x, y };
}

canvas.addEventListener("mousemove", (event) => {
  const { x, y } = getCanvasRelativePosition(event);
  updateMousePosition(x, y);
});

canvas.addEventListener("touchmove", (event) => {
  const { x, y } = getCanvasRelativePosition(event);
  updateMousePosition(x, y);
});

canvas.addEventListener("mouseleave", () => {
  userInteracting = false;
});

setInterval(() => {
  if (!userInteracting) {
    mouseX += (Math.random() - 0.5) * 20;
    mouseY += (Math.random() - 0.5) * 20;
  }
}, 100);

function updateStars() {
  for (let star of stars) {
    const dx = mouseX - star.x;
    const dy = mouseY - star.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 200) {
      star.speedX += (dx / distance) * attractionStrength;
      star.speedY += (dy / distance) * attractionStrength;
    } else {
      const returnDX = star.originalX - star.x;
      const returnDY = star.originalY - star.y;
      star.speedX += returnDX * returnStrength;
      star.speedY += returnDY * returnStrength;
    }

    star.x += star.speedX;
    star.y += star.speedY;

    star.speedX *= 0.95;
    star.speedY *= 0.95;
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#6b0fb2";
  ctx.shadowBlur = 10;
  ctx.shadowColor = "#6b0fb2";

  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function animate() {
  updateStars();
  drawStars();
  requestAnimationFrame(animate);
}

resizeCanvasToHome();
createStars();
animate();

window.addEventListener("resize", () => {
  resizeCanvasToHome();
  createStars();
  userInteracting = false;
});

document.addEventListener("DOMContentLoaded", function () {
  const filters = document.querySelectorAll('.portfolio-filters li');
  const items = document.querySelectorAll('.portfolio-item');

  filters.forEach(filter => {
    filter.addEventListener('click', function () {
      document.querySelector('.filter-active').classList.remove('filter-active');
      this.classList.add('filter-active');

      const filterValue = this.getAttribute('data-filter');

      items.forEach(item => {
        if (filterValue === '*' || item.classList.contains(filterValue.slice(1))) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };
});

document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxText = document.getElementById("lightbox-text");
  const closeBtn = document.querySelector(".close-lightbox");

  const lightboxData = {
 "Platinum Hair & Beauty": `Platinum Hair & Beauty is a modern, stylish website built specifically for a thriving salon based in Scotland.
<br><br>
I developed this site using WordPress with the Astra child theme. This setup ensures that any updates to the core Astra theme won’t affect the custom design or functionality — keeping the website stable and future-proof.
<br><br>
Using Elementor alongside Astra, I was able to create a clean, responsive layout that beautifully showcases the salon's services, pricing, and team. From subtle animations to the booking integrations, every element was crafted to elevate the user experience.
<br><br>
I also added custom CSS and PHP tweaks to enhance performance and styling beyond what plugins alone could offer. The final result is a polished, mobile-friendly site that truly reflects the salon's brand — sleek, elegant, and professional.`
,
  
    "FMX Events": `FMX Events is a site I built on WordPress using Elementor. 
  I set it up with the Elementor child theme, which means the core theme can be updated safely without breaking anything, giving full flexibility and future-proofing the site.
  <br><br>
  From there, I added in custom code throughout including bespoke CSS, JavaScript, and PHP tweaks to push the design beyond Elementor’s built-in capabilities.
  <br><br>
  Everything from layout enhancements to interactive components was fine-tuned manually.
  <br><br>
  The end result is a polished, fast-loading site that works perfectly. It reflects the high-energy, professional vibe of the FMX Events brand, and combines creative design with clean, maintainable development under the hood.`,
  
    "EKOS Group": `EKOS Group is the central website for a growing collection of high-end holiday parks across the UK — offering luxury lodges and residential homes in tranquil countryside and coastal settings.
  <br><br>
  I built this site using WordPress with Elementor, and crucially, set it up using the Astra child theme. This ensures the site can be updated without risk of breaking styles or structure, giving the client long-term stability and flexibility.
  <br><br>
  Alongside the main site, I developed all of the individual park websites, each with unique content and imagery but maintaining a consistent brand experience. You can explore these sites via the <a href="https://ekosgroup.co.uk/our-parks/" target="_blank" style="color:#6b0fb2; text-decoration:underline;">Our Parks</a> section.
  <br><br>
  The project involved custom CSS, PHP enhancements, and JS interactions to elevate the design beyond the basics — resulting in a clean, responsive experience across all devices.`,
  
    "Caledonia Luxe Stays": `Caledonia Luxe Stays is a premium property rental business offering luxurious short-term stays in beautiful locations throughout Scotland.
  <br><br>
  The website was built using a bespoke WordPress theme, with Elementor used alongside to enhance page structure and give the client flexible control over content layout.
  <br><br>
  This approach enabled a fully customised experience while still allowing for easy edits through a visual editor. Everything from the visual styling to the responsive layout was hand-tuned for a high-end, performance-focused result.
  <br><br>
  The final product is clean, elegant, and easy to manage — exactly what you'd expect from a brand offering modern luxury stays.`,
  "The Warrington Hotel": `The Warrington Hotel website was built using WordPress and Elementor, tailored specifically for this elegant boutique hotel in London.
<br><br>
I developed the site using a child theme to ensure that core theme updates will never affect the customisations, allowing long-term maintainability and flexibility.
<br><br>
The design showcases the hotel’s unique character while providing a seamless user experience — from browsing rooms and facilities to contacting or booking directly.
<br><br>
I also added custom CSS and JavaScript enhancements throughout the site to refine the layout and functionality. The final result is a sleek, responsive platform that reflects the luxurious, modern feel of The Warrington Hotel brand.`,
"Jessica's Helping Hand": `Jessica’s Helping Hand is a heartfelt and compassionate website built to support and promote a Glasgow-based childrens charity.
<br><br>
This site was developed in WordPress using a custom child theme built on top of Astra, ensuring safe theme updates without impacting the site’s core design or features.
<br><br>
I used Elementor alongside the theme to design a clean, accessible layout that’s both welcoming and informative..
<br><br>
Additional custom CSS and PHP tweaks helped tailor the styling and interactions beyond what Elementor offers natively, making the user experience smoother and more engaging.
<br><br>
The final result is a polished, responsive site that reflects the care and professionalism at the heart of Jessica’s Helping Hand.`
  };
  
  document.querySelectorAll(".portfolio-item").forEach((item) => {
    const title = item.querySelector("h4").textContent.trim();
    const icon = item.querySelector(".fa-magnifying-glass");

    if (icon) {
      icon.addEventListener("click", function (e) {
        e.preventDefault();
        lightboxText.innerHTML = lightboxData[title] || "<p>Project details coming soon!</p>";

        lightbox.style.display = "flex";
      });
    }
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
