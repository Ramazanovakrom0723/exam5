const users__cards = document.querySelector(".Ticket");
const API_URL = "https://fakestoreapi.com/products";
function nav() {
  var nav = document.getElementById("nav");
  nav.classList.toggle("active");
}
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputs = form.querySelectorAll("input");
  const values = Array.from(inputs).reduce((acc, input) => {
    acc[input.placeholder] = input.value;
    return acc;
  }, {});

  alert(`
    CHIPTA MALUMOTI
    Nechanchi qato: ${values["Nechanchi qator"]}
    Nechansi stol: ${values["Nechansi stol"]}
    Chipta soni: ${values["Chipta soni"]}
    F.I.SH: ${values["F.I.SH"]}
    To'lov turi: ${values["To'lov turi"]}
    Chipta narxi: 100$
  `);
});
