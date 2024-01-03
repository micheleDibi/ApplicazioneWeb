const table = document.getElementById("table-root")
var request = new XMLHttpRequest()

request.open('GET', 'http://127.0.0.1:8000/sales_management/readCliente/', true)
request.onload = function () {
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        data.forEach((utente) => {
            const row = document.createElement("tr")
            row.setAttribute("class", "row")

            const columnClienteDenominazione = document.createElement("td")
            const clienteDenominazione = document.createElement("p")
            clienteDenominazione.textContent = utente.cliente_denominazione
            columnClienteDenominazione.appendChild(clienteDenominazione)
            row.appendChild(columnClienteDenominazione)

            const columnClienteCodiceFiscale = document.createElement("td")
            const clienteCodiceFiscale = document.createElement("p")
            clienteCodiceFiscale.textContent = utente.cliente_codice_fiscale
            columnClienteCodiceFiscale.appendChild(clienteCodiceFiscale)
            row.appendChild(columnClienteCodiceFiscale)

            const columnClientePartitaIva = document.createElement("td")
            const clientePartitaIva = document.createElement("p")
            clientePartitaIva.textContent = utente.cliente_partita_iva
            columnClientePartitaIva.appendChild(clientePartitaIva)
            row.appendChild(columnClientePartitaIva) 

            table.appendChild(row)
        })
    }
    else {
        console.log('error')
    }
}

request.send()