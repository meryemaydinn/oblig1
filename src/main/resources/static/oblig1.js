let Bestilling = [];



function BillettBestilling (){

  let film = document.getElementById('film').value;
    if (film == null) {
        let ut;
        ut = 'Velg en film';
        document.getElementById('velg').nextElementSibling.innerHTML = ut;
        document.getElementById('velg').nextElementSibling.style.color = 'red';
    }
    let antall = document.getElementById('antall').value;
    if ((antall == null) || (antall === '')) {
        let ut;
        ut = 'Må skrive noe inn i antall';
        document.getElementById('antall').nextElementSibling.innerHTML = ut;
        document.getElementById('antall').nextElementSibling.style.color = 'red';
    }
    let name = document.getElementById('name').value;
    if ((name == null) || (name === '')){
        let ut;
        ut = 'Må skrive noe inn i fornavnet';
        document.getElementById('name').nextElementSibling.innerHTML = ut;
        document.getElementById('name').nextElementSibling.style.color = 'red';
    }
    let surname = document.getElementById('surname').value;
    if ((surname == null) || (surname === '')) {
        let ut;
        ut = 'Må skirve noe inn i fornavnet';
        document.getElementById('surname').nextElementSibling.innerHTML = ut;
        document.getElementById('surname').nextElementSibling.style.color = 'red';
    }
    let phone = document.getElementById('phone').value;
    if ((phone == null) || (phone === '')) {
        let ut;
        ut = 'Må skrive noe inn i telefonnr';
        document.getElementById('phone').nextElementSibling.innerHTML = ut;
        document.getElementById('phone').nextElementSibling.style.color = 'red';
    }
    else if (!validatePhoneNumber(phone)){
        let ut;
        ut = 'Ugyldig Telefonnr';
        document.getElementById('phone').nextElementSibling.innerHTML = ut;
        document.getElementById('phone').nextElementSibling.style.color = 'red';
    }
    let email = document.getElementById('email').value;
    if ((email == null) || (email === '')) {
        let ut;
        ut = 'Må skrive noe inn i epost';
        document.getElementById('email').nextElementSibling.innerHTML = ut;
        document.getElementById('email').nextElementSibling.style.color = 'red';
    }
    else if (!validateEmail(email)) {
        let ut;
        ut = 'Ugyldig epostadresse';
        document.getElementById('email').nextElementSibling.innerHTML = ut;
        document.getElementById('email').nextElementSibling.style.color = 'red';
    }

    function validatePhoneNumber(phoneNumber) {
        const regex = /^\d{8}$/;
        return regex.test(phoneNumber);
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(String(email).toLowerCase());
    }



    let informasjon = {
        film : film,
        antall :antall,
        name : name,
        surname : surname,
        phone : phone,
        email : email,
    };

    Bestilling.push(informasjon);

    document.getElementById('film').value = '';
    document.getElementById('antall').value = '';
    document.getElementById('name').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';

    visBestilling();
}

function visBestilling() {
    let ut = "<table>" +
        "<tr>" +
        "<th>Film</th>" +
        "<th>Antall</th>" +
        "<th>Fornavn</th>" +
        "<th>Etternavn</th>" +
        "<th>Telefonnr</th>" +
        "<th>Epost</th>" +
        "</tr>";

    for (let B of Bestilling){
        ut += "<tr>";
        ut += "<td>" + B.film + "</td><td>" + B.antall + "</td><td>" + B.name + "</td><td>" + B.surname + "</td><td>" + B.phone + "</td><td>" + B.email + "</td>";
        ut += "</tr>";
    }
    ut += "</table>";

    document.getElementById('alleBilletter').innerHTML = ut;
}


function slettBilletter() {
    Bestilling = [];
    visBestilling();
}