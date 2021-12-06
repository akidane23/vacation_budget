//const { response } = require("express");

const goButtons = document.getElementsByClassName("add-trip");

for (let i = 0; i < goButtons.length; i++) {
  goButtons[i].addEventListener("click", (e) => {
    e.preventDefault();
    const tripId = e.target.id;
    fetch("/api/add-trip", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ trip_id: tripId }),
    }).then(res => window.location.reload())
    .catch(err => console.log(err));
  });
}

