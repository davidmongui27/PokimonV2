    function Loguear() {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

        let usuario = JSON.parse(localStorage.getItem("usuario"));

        if (usuario === null) {
            alert("No has sido registrado");
            window.location.href ="/vistas/registro.html"; 
            return; 
        }

        if (usuario[2] === username && usuario[4] === password) {
            localStorage.setItem("usuario", JSON.stringify(usuario)); 
            window.location.href = "/vistas/inicio.html"; 
            alert("Usuario válido");
        } else {
            alert("Credenciales incorrectas");
        }
    }
        