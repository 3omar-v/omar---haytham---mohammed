let favorites = [];
let recentlyViewed = [];

fetch("https://edu-me01.github.io/Json-Data/properties.json")
  .then(response => response.json())
  .then(data => {
    const firstSix = data.properties.slice(0, 6);
    const prop_3 = document.querySelector(".prop_3");
    const prop_4 = document.querySelector(".prop_4");

    firstSix.forEach(property => {
      const cardHTML = `
        <div class="box col-md-4 p-4 prop_3_cards position-relative">
          <i class="fa-solid fa-heart position-absolute top-0 end-0 m-3 text-danger" style="cursor:pointer;" data-id="${property.id}"></i>
          <img src="${property.images}" class="w-100 rounded-3 rounded-bottom-0" alt="${property.name}">
          <div class="container my-2">
            <span class="bg-success rounded-2 p-1 mx-1 text-white">${property.type}</span>
            <span class="bg-success rounded-2 p-1 text-white">${property.status}</span>
            <h4 class="my-2 fw-bold">${property.name}</h4>
            <p><i class="fa-solid fa-location-dot px-1"></i>${property.location}</p>
            <span><i class="fa-solid fa-bed px-2"></i> ${property.bedrooms}</span>
            <span><i class="fa-solid fa-bath px-2"></i> ${property.bathrooms}</span>
            <span><i class="fa-brands fa-squarespace px-2"></i> ${property.squareFeet}</span>
            <h4 class="text-success my-3">${property.price}$</h4>
            <button class="btn btn-success w-100 view-btn" data-id="${property.id}">View Details</button>
          </div>
        </div>
      `;

      prop_3.innerHTML += cardHTML;
    });

    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("fa-heart")) {
        const id = e.target.getAttribute("data-id");
        if (!favorites.includes(id)) favorites.push(id);
        console.log("Favorites:", favorites);
      }

      if (e.target.classList.contains("view-btn")) {
        const id = e.target.getAttribute("data-id");
        const selected = data.properties.find(p => p.id == id);
        if (selected && !recentlyViewed.find(p => p.id == id)) {
          recentlyViewed.push(selected);
          renderRecentlyViewed();
        }
      }
    });

    function renderRecentlyViewed() {
      const recentlySection = document.querySelector(".prop_4");

      recentlyViewed.forEach(property => {
        recentlySection.innerHTML += `
          <div class="box col-md-4 p-4 prop_3_cards">
            <img src="${property.images}" class="w-100 rounded-3 rounded-bottom-0" alt="${property.name}">
            <div class="container my-2">
              <span class="bg-success rounded-2 p-1 mx-1 text-white">${property.type}</span>
              <span class="bg-success rounded-2 p-1 text-white">${property.status}</span>
              <h4 class="my-2 fw-bold">${property.name}</h4>
              <p><i class="fa-solid fa-location-dot px-1"></i>${property.location}</p>
              <span><i class="fa-solid fa-bed px-2"></i> ${property.bedrooms}</span>
              <span><i class="fa-solid fa-bath px-2"></i> ${property.bathrooms}</span>
              <span><i class="fa-brands fa-squarespace px-2"></i> ${property.squareFeet}</span>
              <h4 class="text-success my-3">${property.price}$</h4>
            </div>
          </div>
        `;
      });
    }
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
