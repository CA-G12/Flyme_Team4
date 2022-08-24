const container = document.querySelector(".container");
const flightSection = document.querySelector('#flights')
fetch("/pilots")
  .then((data) => data.json())
  .then((data) => fetchPilotCards(data));

function fetchPilotCards(data) {
  container.textContent = "";
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i].name);
    const cardDiv = document.createElement("div");
    cardDiv.classList = "card";
    container.appendChild(cardDiv);

    const image = document.createElement("img");
    image.src = data[i]["image_url"];
    cardDiv.appendChild(image);

    const details = document.createElement("div");
    details.classList = "details";
    cardDiv.appendChild(details);

    const pilotName = document.createElement("h4");
    pilotName.textContent = data[i]["name"];
    details.appendChild(pilotName);

    const experience = document.createElement("p");
    experience.textContent = data[i]["experience"];
    details.appendChild(experience);

    const viewFlights = document.createElement("a");
    viewFlights.href = '#flights'
    const para = document.createElement("p");
    para.textContent = "View Flights";
    viewFlights.appendChild(para);
    cardDiv.appendChild(viewFlights);
  }
}

const flightsContainer = document.querySelector(".flights-container");

fetch("/flights")
  .then((data) => data.json())
  .then((data) => fetchFlightsCards(data));

function fetchFlightsCards(data) {
    console.log(data);
  flightsContainer.textContent = "";
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]["directions"]);
    const card = document.createElement("div");
    card.classList = "card";
    flightsContainer.appendChild(card);

    const detailsDiv = document.createElement("div");
    detailsDiv.classList = "details";
    card.appendChild(detailsDiv);

    const flightName = document.createElement("h4");
    flightName.textContent = data[i]["pilot_id"];
    detailsDiv.appendChild(flightName);

    const date = document.createElement("p");
    var today  = new Date(data[i].date);

    date.textContent = 'Date: '
    const spanDate = document.createElement("span");
    spanDate.textContent = today.toLocaleDateString("en-US");
    detailsDiv.appendChild(date);
    date.appendChild(spanDate);

    const time = document.createElement("p");
    time.textContent = 'Time: '
    const spanTime = document.createElement("span");
    spanTime.textContent = data[i]["time"];
    detailsDiv.appendChild(time);
    time.appendChild(spanTime);

    const directions = document.createElement("p");
    directions.textContent = 'Directions: '
    const spanDirections = document.createElement("span");
    spanDirections.textContent = data[i]["directions"];
    detailsDiv.appendChild(directions);
    directions.appendChild(spanDirections);
  }
}
