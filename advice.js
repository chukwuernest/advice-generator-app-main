const advive_number = document.getElementById("up");
const advice = document.getElementById("advice");
const btn = document.querySelector(".btn");
const URL = "https://api.adviceslip.com/advice";

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let advice = get_advice();
  let advive_number = get_id();
});
function get_advice() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const word = data.slip.advice;
      console.log(word);
      document.getElementById("advice").textContent = `${word}`;
    })
    .catch(
      (error) => (document.getElementById("advice").textContent = `Error`)
    );
}

function get_id() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const id = data.slip.id;
      console.log(id);
      document.getElementById("up").textContent = `Advice #${id}`;
    })
    .catch(
      (error) => (document.getElementById("up").textContent = `Advice #Error`)
    );
}
