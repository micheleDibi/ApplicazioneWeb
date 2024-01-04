function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    console.log(username);
    console.log(password);

    if(requiredFields(username, password) == true) {
        var request = new XMLHttpRequest()

        request.open("GET", "http://127.0.0.1:8000/sales_management/checkUserExist/?username=" + username + "&password=" + password, true)
        request.onload = function() {
            var data = JSON.parse(this.response)

            console.log(data);

            if(request.status == 200) {
                console.log(data.utente_id);
                var utente_id = data.utente_id

                document.cookie = "utente_id=" + utente_id + "; path=/";

                window.location.href = "./index.html"
            }
        }

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