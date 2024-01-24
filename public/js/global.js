var webProject = [
  {
    title: "Futaba Dental Clinic",
    tools: "WordPress, HTML, SCSS, JS, PHP",
    description:
      "Customized WordPress Responsive Header, Footer and back to top button with custom widget using HTML, CSS, JS and PHP",
    image: "public/assets/project-1.png",
    links: "https://futaba-d.jp/",
  },
  {
    title: "Lemon",
    tools: "WordPress, HTML, SCSS, JS, PHP",
    description:
      "Customized WordPress Responsive Header, Footer and back to top button with custom widget using HTML, CSS, JS and PHP",
    image: "public/assets/project-2.png",
    links: "https://npolemon.com/",
  },
  {
    title: "Oita University Hospital",
    tools: "WordPress, HTML, SCSS, JS, PHP",
    description:
      "Customized WordPress Responsive Header, Footer and back to top button with custom widget using HTML, CSS, JS and PHP",
    image: "public/assets/project-3.png",
    links: "https://kangob.wp.med.oita-u.ac.jp/",
  },
  {
    title: "Dipo Star Finance",
    tools: "HTML, SCSS, JS",
    description:
      "UI Slicing with HTML, CSS, JS. Using Leaflet.js to show branch locations",
    image: "public/assets/project-4.png",
    links: "https://www.dipostar.com/",
  },
  {
    title: "PetAny",
    tools: "Vue.js, Vuetify, SCSS, Figma",
    description:
      "(Not hosted yet) Designed UI in Figma, Ui Slicing and API Integration using Vue.js Vuetify and SCSS, Using Leaflet to pick user location",
    image: "public/assets/project-5.png",
    links: "https://web.hepiproperty.com/",
  },
  {
    title: "Hepi Property",
    tools: "Vue.js, Vuetify, SCSS",
    description:
      "Responsive UI implementation and API Integration using Vue.js, Vuetify and SCSS",
    image: "public/assets/hepi.jpg",
    links: "https://github.com/jzyka/hepi-property-fe.git",
  },
];

var uiProject = [
  {
    title: "Proview App",
    description: "UI Design for B to B E-Commerce",
    image: "public/assets/project-ui-1.jpg",
    links: "",
  },
  {
    title: "PetAny",
    description:
      "UI Design for Booking Vet Appointment, Medical Record, E-Commerce, Clinic and Staff Management",
    image: "public/assets/project-5.png",
    links:
      "https://www.figma.com/file/Rfez53GPNqXZwsvuh4Tbvw/PetAny?type=design&node-id=292%3A15668&t=ccGNsBglqZz1EW5e-1",
  },
];

window.addEventListener("DOMContentLoaded", function () {
  for (var i = 0; i < webProject.length; i++) {
    document.querySelector(".website-project").innerHTML += `
        <div class="project-card">
            <img src="${webProject[i].image}" alt="" />
            <p class="project-name">${webProject[i].title}</p>
            <p class="project-tools">${webProject[i].tools}</p>
            <p class="project-desc">${webProject[i].description}</p>
            <a href="${webProject[i].links}" class="see-project">See Project</a>
        </div>
     `;
  }
  for (var i = 0; i < uiProject.length; i++) {
    var projectLink = uiProject[i].links
      ? `<a href="${uiProject[i].links}" class="see-project">See Project</a>`
      : `<p class="no-project-link">Project Unreleased</p>`;

    document.querySelector(".ui-project").innerHTML += `
        <div class="project-card" id="project-card-ui">
            <img src="${uiProject[i].image}" alt="" />
            <p class="project-name">${uiProject[i].title}</p>
            <p class="project-desc">${uiProject[i].description}</p>
            ${projectLink}
        </div>
     `;
  }
});

function sidebarBtn() {
  var element = document.getElementById("header-contain");
  element.classList.toggle("active");
}
