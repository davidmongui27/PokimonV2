function cerrarSesion(){
    localStorage.removeItem("Usuario")
    window.location.href="/INDEX.html"
    alert("Has cerrado sesion")
}