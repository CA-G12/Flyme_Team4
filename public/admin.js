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
fetch("/pilots")
    .then((data) => data.json())
    .then((data) => generatePilotCards(data))
    .catch((err) => console.log("Error"));

function generatePilotCards(data) {
    pilotsContainer.textContent = ''
    data.forEach(e => {
        let pilotCard = createNode('div', "pilot-card");
        let pilotCardContent = createNode('div', "pilots-card-content");
        let pilotImg = createNode('div', 'pilot-img');
        let card_profile_img = createNode('div', 'p_card_profile_img card_profile_img');
        let img = createNode('img', '');
        img.src = e.image_url;
        card_profile_img.appendChild(img);
        let pilot_details = createNode('div', 'pilot_details');
        let h3 = createNode('h3');
        h3.textContent = e.name;
        let p = createNode('p');
        p.textContent = e.experience;
        pilot_details.appendChild(h3);
        pilot_details.appendChild(p);
        let card_actions = createNode('div', 'card_actions');
        let edit_btn = createNode('a', 'btn edit-btn');
        let delete_btn = createNode('a', 'btn delete-btn');
        let edit_btn_i = createNode('i', 'fa-solid fa-pen');
        edit_btn.appendChild(edit_btn_i);
        let delete_btn_i = createNode('i', 'fa-solid fa-trash');
        delete_btn.appendChild(delete_btn_i);
        delete_btn.href = `/pilot/${e.id}`;
        card_actions.appendChild(edit_btn);
        card_actions.appendChild(delete_btn);
        pilotCardContent.appendChild(pilotImg)
        pilotCardContent.appendChild(card_profile_img)
        pilotCardContent.appendChild(pilot_details)
        pilotCardContent.appendChild(card_actions)
        pilotCard.appendChild(pilotCardContent)
        let form = createNode('form', 'update-pilot');
        form.innerHTML += `
        <label for="">Name
            <input type="text" name="name" value='${e.name}'>
        </label>
        <label for="">ID
            <input type="number" name="id" value='${e.id}'>
        </label>
        <label for="">Image
            <input type="url" name="image_url" value='${e.image_url}'>
        </label>
        <label for="">Experience
            <textarea name="experience" cols="18" rows="5">${e.experience}</textarea>
        </label>`
        let updatBtn = createNode('button', 'btn')
        updatBtn.textContent = 'Edit';
        form.appendChild(updatBtn);
        form.method = 'post'
        form.action = '/pilot'
        pilotCard.appendChild(form);
        edit_btn.addEventListener('click', (e) => {
            e.preventDefault();
            switchContent(pilotCardContent, form);
        })
        updatBtn.addEventListener('click', (e) => {
            // e.preventDefault();
            switchContent(form, pilotCardContent);
        })
        pilotsContainer.appendChild(pilotCard);
    });

}

function createNode(node, className) {
    let n = document.createElement(node);
    n.className = className;
    return n;
}