const dotCon = document.getElementById("dot-con");
const st = document.getElementById("st");
const nd = document.getElementById("nd");
const rd = document.getElementById("rd");
const copy = document.getElementById("tcopy");

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

if (i === 1) {
  st.addEventListener("click", getToggle(i)); // 1st click
} else if (i === 0) {
  st.addEventListener("click", nowToggle(i)); // 2nd click
}

//copy handeler--
copy.addEventListener("copy", (event) => {
  event.clipboardData.setData("text/plain", "Ha Ha Ha");
  event.preventDefault();
});
