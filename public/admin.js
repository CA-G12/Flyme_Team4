let pilotsBtn = document.querySelector('#tools .pilotsBtn a');
let flightsBtn = document.querySelector('#tools .flightsBtn a');
let addBtn = document.querySelector('#tools > div.user-tools > ul.main-menu > li:nth-child(3) > a');
let pilotsContainer = document.querySelector('.pilotsContainer');
let flightsContainer = document.querySelector('.flightsContainer');
let addContainer = document.querySelector('.addPilot');
let editPilotBtn = document.querySelector('.pilot-card .edit-btn');
let editPilotSubmit = document.querySelector('body > div > div.pilotsContainer > div > form > button');
let editFlightBtn = document.querySelector('.flight-card .edit-btn');
let editFlightSubmit = document.querySelector('body > div > div.flightsContainer > div > form > button');
pilotsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    switchContent(flightsContainer, pilotsContainer)
    switchContent(addContainer, pilotsContainer)
    clearActiveLi();
    e.target.parentNode.classList.add('active');
})
flightsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    switchContent(pilotsContainer, flightsContainer);
    switchContent(addContainer, flightsContainer);
    clearActiveLi();
    e.target.parentNode.classList.add('active');
})
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    switchContent(pilotsContainer, addContainer);
    switchContent(flightsContainer, addContainer);
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


fetch("/flights")
    .then((data) => data.json())
    .then((data) => generateFlightsCards(data))
    .catch((err) => console.log("Error"));

function generateFlightsCards(data) {
    let Pilotname = '';
    flightsContainer.textContent = "";
    data.forEach((e) => {
        console.log(e.date);
        const flightCardDiv = document.createElement("div");
        flightCardDiv.classList = "flight-card";
        flightsContainer.appendChild(flightCardDiv);

        const content = document.createElement("div");
        content.classList = "flight-card-content";
        flightCardDiv.appendChild(content);

        const imgDiv = document.createElement("div");
        imgDiv.classList = "f_card_profile_img";
        const image = document.createElement("img");
        image.src =
            "https://c8.alamy.com/zooms/9/d3f6ee44040c47ee8de1dcf15b114000/d4x48d.jpg";
        imgDiv.appendChild(image);
        content.appendChild(imgDiv);

        const detailsDiv = document.createElement("div");
        detailsDiv.classList = "flight_details";
        content.appendChild(detailsDiv);

        const flightName = document.createElement("p");
        flightName.textContent = e.pilot_id;
        detailsDiv.appendChild(flightName);

        const date = document.createElement("h3");
        date.textContent = e.date;
        detailsDiv.appendChild(date);

        const time = document.createElement("p");
        time.textContent = e.time;
        detailsDiv.appendChild(time);

        const directions = document.createElement("p");
        directions.textContent = e.directions;
        detailsDiv.appendChild(directions);

        const iconsDiv = document.createElement("div");
        iconsDiv.classList = "card_actions";
        content.appendChild(iconsDiv);

        const editLink = document.createElement("a");
        editLink.classList = "btn edit-btn";
        iconsDiv.appendChild(editLink);

        const editIcon = document.createElement("i");
        editIcon.classList = "fa-solid fa-pen";
        editLink.appendChild(editIcon);

        const deleteLink = document.createElement("a");
        deleteLink.classList = "btn delete-btn";
        deleteLink.href = `/flight/${e.id}`
        iconsDiv.appendChild(deleteLink);

        const deleteIcon = document.createElement("i");
        deleteIcon.classList = "fa-solid fa-trash";
        deleteLink.appendChild(deleteIcon);

        //create the form
        const form = document.createElement("form");
        form.action = "/flight";
        form.method = "post";
        form.classList = "update-flight";
        //add eventListener to edit btn
        editLink.addEventListener("click", (e) => {
            //   e.preventDefault();
            switchContent(content, form);
        });

        form.innerHTML += `<label for="">date
        <input type="date" name="date">
    </label>
    <label for="">ID
        <input type="number" name="id" value="${e.id}">
    </label>
    <label for="">time
        <input type="text" name="time" value="${e.time}">
    </label>
    <label for="">directions
        <input type="text" name="directions" value="${e.directions}">
    </label>
    <label for="">Pilot
        <input type="number" name="pilot_id" value="${e.pilot_id}">
    </label>`;
        flightCardDiv.appendChild(form);
        const updateBtn = document.createElement('button');
        updateBtn.classList = 'btn';
        updateBtn.textContent = 'Edit'
        updateBtn.addEventListener('click', (e) => {
            // e.preventDefault();
            switchContent(form, content)
        })
        form.appendChild(updateBtn);
    });
}