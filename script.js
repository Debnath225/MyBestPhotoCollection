const st = document.getElementById("st");
const nd = document.getElementById("nd");
const rd = document.getElementById("rd");
const copy = document.getElementById("copy");
// let uplodedPhoto = document.getElementById("uplodedPhoto");

// let onOffline = function () {
//   if (navigator.onLine) {
//     console.log("online");
//   } else {
//     console.log("offline");
//   }
// };
// window.addEventListener("online", onOffline);

let getToggle = (toggleMenu = (e) => {
  e = 0;
  st.style.transform = `translateY(4px) rotate(-45deg)`;
  rd.style.transform = `translateY(-12px) rotate(45deg)`;
  nd.style.visibility = "hidden";
});
let nowToggle = (toggleMenu = (e) => {
  e = 0;
  st.style.transform = `translateY(0px) rotate(0deg)`;
  rd.style.transform = `translateY(0px) rotate(0deg)`;
  nd.style.visibility = "visible";
});

// if (i === 1) {
//   st.addEventListener("click", getToggle(i)); // 1st click
// } else if (i === 0) {
//   st.addEventListener("click", nowToggle(i)); // 2nd click
// }

//copy handeler--
copy.addEventListener("copy", (event) => {
  event.clipboardData.setData("text/plain", "Ha-Ha-Ha");
  event.preventDefault();
});

// uplodedPhoto.addEventListener("change", function (event) {
//   let reader = new FileReader();
//   reader.onload = function () {
//     document.getElementById("preview").src = reader.result;
//   };
//   reader.readAsDataURL(event.target.files[0]);
// });
//

//toggle back ground

// lightDarkMode.addEventListener("click", () => {
//   istoggle++;
// });

//search bar
const search = document.getElementById("search");
const photContainer = document.getElementById("container");

const photosWrappers = photContainer.children;

search.addEventListener("input", () => {
  const searchValue = search.value.toLowerCase();
  Array.from(photosWrappers).forEach((Wrapper) => {
    const photo = Wrapper.querySelector("img");
    const photoAlt = photo.alt.toLowerCase();
    if (photoAlt.includes(searchValue)) {
      Wrapper.style.display = "block";
    } else {
      Wrapper.style.display = "none";
    }
  });
});
