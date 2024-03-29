const containter = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
// adding + to convert string to number
let ticketPrice = +movieSelect.value;


function updateSelectedCount() {
const selectedSeats = document.querySelectorAll('.row .seat.selected')

// storaging selected seat inside the browser
const seatIndex = [...selectedSeats].map(function(seat){
  return [...seats].indexOf(seat);
})
localStorage.setItem('selectedSeats', JSON.stringify(seatIndex))




const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount*ticketPrice;
}

// Movie select event
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// click event
containter.addEventListener("click", (e) => {
  //   condition to select only empty seats
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    //   select and deselect die empty seats
    e.target.classList.toggle("selected");
  }

  updateSelectedCount();
});
