function aggiungiUtente() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(requiredFields(username, password) == true) {

        const xhr = new XMLHttpRequest()
        xhr.open("POST", "http://127.0.0.1:8000/sales_management/createUtente/")
        xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8")

        const body = JSON.stringify({
            utente_username: username,
            utente_password: password
        })

        console.log(body)

        xhr.onload = () => {
            if (xhr.readyState == 4 && xhr.status == 201) {
                console.log(JSON.parse(xhr.responseText));
            } else {
                console.log(`Error: ${xhr.status}`);
            }
        };

        xhr.send(body)

        alert("Salvataggio effettuato correttamente")
    }
}

function requiredFields(username, password) {
    if(username == "") {
        alert("Inserire lo username dell'utente")
        return false;
    }
    else if (password == "") {
        alert("Inserire una password per l'utente")
        return false;
    }

    return true;

}