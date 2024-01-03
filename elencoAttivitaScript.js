const table = document.getElementById("table-root")
var request = new XMLHttpRequest()

request.open("GET", "http://127.0.0.1:8000/activities/")
request.onload = function() {
    var data = JSON.parse(this.response)

    if(request.status >= 200 && request.status < 400) {
        data.forEach((attivita) => {
            const row = document.createElement("tr")
            row.setAttribute("class", "row")

            const columnAttivitaDescrizione = document.createElement("td")
            columnAttivitaDescrizione.textContent = attivita.attivita_descrizione
            row.appendChild(columnAttivitaDescrizione)

            const columnAttivitaData = document.createElement("td")
            columnAttivitaData.textContent = attivita.attivita_data
            row.appendChild(columnAttivitaData)

            const columnAttivitaUtente = document.createElement("td")

            var requestUtente = new XMLHttpRequest()
            requestUtente.open("GET", "http://127.0.0.1:8000/sales_management/readUtente/" + attivita.utente_id)
            requestUtente.onload = function () {
                var dataUtente = JSON.parse(this.response)

                if (requestUtente.status >= 200 && requestUtente.status < 400) {
                    columnAttivitaUtente.textContent = dataUtente.utente_username;
                }
            }

            requestUtente.send()
            row.appendChild(columnAttivitaUtente)

            table.appendChild(row)
        })
    }
}

request.send()