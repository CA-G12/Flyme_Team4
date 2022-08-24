let pilotsBtn = document.querySelector('#tools .pilotsBtn a');
let flightsBtn = document.querySelector('#tools .flightsBtn a');
let pilotsContainer = document.querySelector('.pilotsContainer');
let flightsContainer = document.querySelector('.flightsContainer');
let editPilotBtn = document.querySelector('.pilot-card .edit-btn');
let editPilotSubmit = document.querySelector('body > div > div.pilotsContainer > div > form > button');
let editFlightBtn = document.querySelector('.flight-card .edit-btn');
let editFlightSubmit = document.querySelector('body > div > div.flightsContainer > div > form > button');
pilotsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    switchContent(flightsContainer, pilotsContainer)
    clearActiveLi();
    e.target.parentNode.classList.add('active');
})
flightsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    switchContent(pilotsContainer, flightsContainer);
    clearActiveLi();
    e.target.parentNode.classList.add('active');
})
editPilotBtn.addEventListener('click', (e) => {
    e.preventDefault();
    switchContent(document.querySelector('.pilots-card-content'), document.querySelector('.update-pilot'));
})
editPilotSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    switchContent(document.querySelector('.update-pilot'), document.querySelector('.pilots-card-content'));
})
editFlightBtn.addEventListener('click', (e) => {
    e.preventDefault();
    switchContent(document.querySelector('.flight-card-content'), document.querySelector('.update-flight'));
})
editFlightSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    switchContent(document.querySelector('.update-flight'), document.querySelector('.flight-card-content'));
})
function switchContent(hide, show) {
    hide.style.display = 'none';
    show.style.display = 'block';
}
function clearActiveLi() {
    document.querySelectorAll('aside ul li').forEach(element => {
        element.classList.remove('active');
    });
}