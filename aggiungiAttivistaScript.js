const select = document.getElementById("utente_id")
var request = new XMLHttpRequest()

request.open('GET', 'http://127.0.0.1:8000/sales_management/readUtente/', true)
request.onload = function () {
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        data.forEach((utente) => {
            const option = document.createElement("option")
            option.textContent = utente.utente_username
            option.setAttribute("value", utente.utente_id)
            select.appendChild(option)
        })
    }
}

request.send()

function aggiungiAttivita() {
    var descrizione = document.getElementById("descrizione").value;
    var data = document.getElementById("data").value;
    var id_utente = document.getElementById("utente_id").value;

    if (requiredFields(descrizione, id_utente) == true) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var datetime = date + ' ' + time;

        const xhr = new XMLHttpRequest()
        xhr.open("POST", "http://127.0.0.1:8000/activities/createActivity/")
        xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8")

        const body = JSON.stringify({
            attivita_descrizione: descrizione,
            attivita_data: (data != "") ? data : null,
            utente_id: id_utente,
            attivita_created_by: 1,
            attivita_created_at: datetime,
            attivita_updated_by: 1,
            attivita_updated_at: datetime
        });

        console.log(body)

        xhr.onload = () => {
            if (xhr.readyState == 4 && xhr.status == 201) {
                console.log(JSON.parse(xhr.responseText));
            } else {
                console.log(`Error: ${xhr.status}`);
            }
        };

        xhr.send(body);
    }
}

function requiredFields(desc, utente_id) {

    if (desc == "") {
        alert("Inserire una descrizione all'attività")
        return false;
    }
    else if (utente_id == "") {
        alert("Inserire un utente di assegnazione")
        return false;
    }

    return true;
}