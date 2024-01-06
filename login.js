function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    console.log(username);
    console.log(password);

    if(requiredFields(username, password) == true) {
        var request = new XMLHttpRequest()

        request.open("GET", "http://127.0.0.1:8000/sales_management/checkUserExist/?username=" + username + "&password=" + password, true)
        request.onload = function() {
            if (request.status === 200) {
                var data = JSON.parse(this.response);
        
                if (data.length > 0) {
                    var utente = data[0]; // Accedi al primo oggetto nell'array

                    var utente_id = utente.utente_id;
        
                    document.cookie = "utente_id=" + utente_id + "; path=/";
                    window.location.href = "./index.html";
                } else {
                    alert("Nessun utente trovato.");

                    document.getElementById("password").value = "";
                }
            } else {
                console.error("Errore nella richiesta. Stato: " + request.status);
            }
        };
        
        

        request.send();
    }
}

function requiredFields(username, password) {
    if(username == "") {
        alert("Inserire uno username");
        return false;
    }
    else if (password == "") {
        alert("Inserire la password");
        return false
    }

    return true;
}