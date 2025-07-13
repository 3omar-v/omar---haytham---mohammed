var box_dataa = document.getElementById("box_dataa");
var box_dataa2 = document.getElementById("box_dataa2");
var box_dataa3 = document.getElementById("box_dataa3");
var Reent = document.getElementById("Reent");
console.log("hiiiiiiiiii");

async function api() {
  var res = await fetch("https://edu-me01.github.io/Json-Data/properties.json");
  var final = await res.json();
  console.log(final.properties); // تحقق مما يرجع
  display(final.properties); // <== هنا التصحيح
}

function display(arr) {
  var cartoona = "";
  var cartoona2 = "";
  var cartoona3 = "";
  var cartoona4 = "";

  for (let i = 0; i < arr.length; i++) {
    if (i < 3) {
      cartoona += `
      <div class="box col-md-4 p-4">
        <img src="${arr[i].images}" class="w-100 rounded-3 rounded-bottom-0" alt="">
        <div class="container my-2">
          <span class="bg-success rounded-2 p-1 mx-1 text-white">${arr[i].type}</span>
          <span class="bg-success rounded-2 p-1 text-white">${arr[i].status}</span>
          <h4 class="my-2 fw-bold">${arr[i].title}</h4>
          <p><i class="fa-solid fa-location-dot px-1"></i>${arr[i].location}</p>
          <span><i class="fa-solid fa-bed px-2">${arr[i].bedrooms} </i></span>
          <span><i class="fa-solid fa-bath px-2"></i>${arr[i].bathrooms}</span>
          <span><i class="fa-brands fa-squarespace px-2"></i>${arr[i].squareFeet} </span>
          <h4 class="text-success my-3">${arr[i].price}$</h4>
          <button class="btn btn-success w-100">View Details</button>
        </div>
      </div>`;
    } else if (i < 6) {
      cartoona2 += `
      <div class="box col-md-4 p-4">
        <img src="${arr[i].images}" class="w-100 rounded-3 rounded-bottom-0" alt="">
        <div class="container my-2">
          <span class="bg-success rounded-2 p-1 mx-1 text-white">${arr[i].type}</span>
          <span class="bg-success rounded-2 p-1 text-white">${arr[i].status}</span>
          <h4 class="my-2 fw-bold">${arr[i].title}</h4>
          <p><i class="fa-solid fa-location-dot px-1"></i>${arr[i].location}</p>
          <span><i class="fa-solid fa-bed px-2">${arr[i].bedrooms} </i></span>
          <span><i class="fa-solid fa-bath px-2"></i>${arr[i].bathrooms}</span>
          <span><i class="fa-brands fa-squarespace px-2"></i>${arr[i].squareFeet} </span>
          <h4 class="text-success my-3">${arr[i].price}$</h4>
          <button class="btn btn-success w-100">View Details</button>
        </div>
      </div>`;
    } else if (i < 9) {
      cartoona3 += `
      <div class="box col-md-4 p-4">
        <img src="${arr[i].images}" class="w-100 rounded-3 rounded-bottom-0" alt="">
        <div class="container my-2">
          <span class="bg-success rounded-2 p-1 mx-1 text-white">${arr[i].type}</span>
          <span class="bg-success rounded-2 p-1 text-white">${arr[i].status}</span>
          <h4 class="my-2 fw-bold">${arr[i].title}</h4>
          <p><i class="fa-solid fa-location-dot px-1"></i>${arr[i].location}</p>
          <span><i class="fa-solid fa-bed px-2">${arr[i].bedrooms} </i></span>
          <span><i class="fa-solid fa-bath px-2"></i>${arr[i].bathrooms}</span>
          <span><i class="fa-brands fa-squarespace px-2"></i>${arr[i].squareFeet} </span>
          <h4 class="text-success my-3">${arr[i].price}$</h4>
          <button class="btn btn-success w-100">View Details</button>
        </div>
      </div>`;
    }
    if (i < 4) {
      cartoona4 += `
      <div class="box col-md-4 p-4">
        <img src="${arr[i].images}" class="w-100 rounded-3 rounded-bottom-0" alt="">
        <div class="container my-2">
          <span class="bg-success rounded-2 p-1 mx-1 text-white">${arr[i].type}</span>
          <span class="bg-success rounded-2 p-1 text-white">${arr[i].status}</span>
          <h4 class="my-2 fw-bold">${arr[i].title}</h4>
          <p><i class="fa-solid fa-location-dot px-1"></i>${arr[i].location}</p>
          <span><i class="fa-solid fa-bed px-2">${arr[i].bedrooms} </i></span>
          <span><i class="fa-solid fa-bath px-2"></i>${arr[i].bathrooms}</span>
          <span><i class="fa-brands fa-squarespace px-2"></i>${arr[i].squareFeet} </span>
          <h4 class="text-success my-3">${arr[i].price}$</h4>
          <button class="btn btn-success w-100">View Details</button>
        </div>
      </div>`;
    }
  }
  box_dataa.innerHTML = cartoona;
  box_dataa2.innerHTML = cartoona2;
  box_dataa3.innerHTML = cartoona3;
  Reent.innerHTML = cartoona4;
}
api();
