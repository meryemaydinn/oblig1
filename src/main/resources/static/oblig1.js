let Bestilling = [];



function BillettBestilling (){

  let film = document.getElementById('film').value;
    let antall = document.getElementById('antall').value;
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    antall = Number(antall);

    let valid = true;

    if (!film.trim()) {
        let ut;
        ut = "Velg en film";
        document.getElementById("filmError").innerHTML = ut;
        document.getElementById("filmError").style.color = "red";
        valid = false;
    } else {
        document.getElementById("filmError").innerHTML = "";
    }

    if (isNaN(antall) || (antall <= 0)) {
        let ut;
        ut = "Må skrive noe inn i antall";
        document.getElementById("antallError").innerHTML = ut;
        document.getElementById("antallError").style.color = 'red';
        valid = false;
    } else {
        document.getElementById("antallError").innerHTML = "";
    }

    if (!name.trim()){
        let ut;
        ut = "Må skrive noe inn i fornavnet";
        document.getElementById("nameError").innerHTML = ut;
        document.getElementById("nameError").style.color = 'red';
        valid = false;
    } else {
        document.getElementById("nameError").innerHTML = "";
    }

    if (!surname.trim()) {
        let ut;
        ut = "Må skirve noe inn i fornavnet";
        document.getElementById("surnameError").innerHTML = ut;
        document.getElementById("surnameError").style.color = 'red';
        valid = false;
    }else {
        document.getElementById("surnameError").innerHTML = "";
    }

    const phoneRegex = /^\d{8}$/;
    if (!phoneRegex.test(phone.trim())) {
        let ut;
        ut = "Ugyldig Telefonnr";
        document.getElementById("phoneError").innerHTML = ut;
        document.getElementById("phoneError").style.color = 'red';
        valid = false;
    }else {
        document.getElementById("phoneError").innerHTML = "";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
        let ut;
        ut = "Ugyldig epostadresse";
        document.getElementById("emailError").innerHTML = ut;
        document.getElementById("emailError").style.color = 'red';
        valid = false;
    }
    else {
        document.getElementById("emailError").innerHTML = "";
    }

if (valid) {
    let informasjon = {
        film : film,
        antall :antall,
        name : name,
        surname : surname,
        phone : phone,
        email : email,
    };


    Bestilling.push(informasjon);

    document.getElementById("film").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";

    visBestilling();
}
    return valid;
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