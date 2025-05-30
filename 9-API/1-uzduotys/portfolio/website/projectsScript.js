const BASE_URL = "http://localhost:7788";

const getData = (url) => {
  return fetch(BASE_URL + url).then((response) => response.json());
};

const addProjectsIntoCarousel = (projects) => {
  let carouselHtml = document.querySelector(".carousel-inner");

  carouselHtml.innerHTML = projects
    .map((project, index) => {
        let activeClass = "";
  if (index === 0) {
    activeClass = "active";
  }
        return `
            <div class="carousel-item ${activeClass}">
                <div class="carousel-caption d-none d-md-block ">
                    <h5>${project.name}</h5>
                    <p>${project.description}</p>
                                    <div class="main-block-tags">
                    ${project.technologies.map(item => `<p>${item}</p>`).join('')}
                </div>
                </div>
            </div>
        `;
    })
    .join("");
    
    
};

const addIndicatorsIntoCarousel = (numberOfIndicators) => {
  let indicatorsHtml = document.querySelector(".carousel-indicators");

  for (let i = 0; i < numberOfIndicators; i++) {
    let isActive = "";
    if (i === 0) {
      isActive = 'class="active"';
    }
    indicatorsHtml.innerHTML += `
    <button
  type="button" ${isActive}
  data-bs-target="#carouselExampleDark"
  data-bs-slide-to="${i}"
  aria-current="true"
  aria-label="Slide ${i}"
></button>`;
  }
};

//   <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
//   <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>

window.addEventListener("DOMContentLoaded", async () => {
  let projects = await getData("/projects");
  console.log(projects);
  addProjectsIntoCarousel(projects);
  addIndicatorsIntoCarousel(projects.length);
});
