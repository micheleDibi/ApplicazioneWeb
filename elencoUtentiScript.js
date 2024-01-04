const table = document.getElementById("user-table-root")
var request = new XMLHttpRequest()

request.open("GET", "http://127.0.0.1:8000/sales_management/readUtente/")
request.onload = function() {
    var data = JSON.parse(this.response)

    if(request.status >= 200 && request.status < 400) {
        data.forEach((utente) => {
            const row = document.createElement("tr")
            row.setAttribute("class", "row")

            const columnUtenteUsername = document.createElement("td")
            columnUtenteUsername.textContent = utente.utente_username
            row.appendChild(columnUtenteUsername)

            const columnUtentePassword = document.createElement("td")
            columnUtentePassword.textContent = utente.utente_password
            row.appendChild(columnUtentePassword)

            const columnUtenteLastLogin = document.createElement("td")
            columnUtenteLastLogin.textContent = utente.utente_last_login
            row.appendChild(columnUtenteLastLogin)

            const columnUtenteLastLogout = document.createElement("td")
            columnUtenteLastLogout.textContent = utente.utente_last_logout
            row.appendChild(columnUtenteLastLogout)

            const columnModifica = document.createElement("button")
            columnModifica.textContent = "Modifica"
            row.appendChild(columnModifica)

            table.appendChild(row)
        })
    }
    else alert(request.status)
}

request.send()
