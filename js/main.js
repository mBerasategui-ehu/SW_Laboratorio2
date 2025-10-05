window.onload = function() {
    //Ejercicio 1:
    mostrarImagenClick()
    alertBotonesClick()

    //Ejercicio 2:
    quitarEmailPredeterminado()

    //Ejercicio 3:
    let combobox = document.getElementById('combobox');
    combobox.addEventListener('change', imprimirCombobox)
    anadirFila();

    //Ejercicio 4:
    let loginForm = document.getElementById('form');
    loginForm.addEventListener('submit', gestionarLogin);

    //Ejericio 5:
    cambiarImagenAutomatico();
}

function mostrarImagenClick(){
    let imagen = document.getElementById("image")
    imagen.onclick = function(){
        console.log("Se ha pulsado la imagen")
    }
}

function alertBotonesClick(){
    let botones = document.getElementsByClassName("navbutton")
    for (let i = 0; i < botones.length; i++) {
        botones[i].onclick = function(){
            alert("Redirigiendo a " + botones[i].innerText)
        }
    }
}

function quitarEmailPredeterminado() {
    let user = document.getElementById("user")
    user.onfocus = function () {
        if (user.value === "tu@email") {
            user.value = ""
        }
    }
    user.onblur = function () {
        if (user.value === "") {
            user.value = "tu@email"
        }
    }
}

function imprimirCombobox(){
    let combobox = document.getElementById('combobox');
    if(combobox.value === "pizzaMala"){
        console.log("Pizza con piña… Non sei il benvenuto in Italia 🤌")
    }
    else{
        let comidas = document.getElementsByClassName("_self")
        for (let i = 0; i < comidas.length; i++) {
            if (comidas[i].value === combobox.value) {
                console.log("Has seleccionado: " + comidas[i].innerText)
            }
        }
    }
}

function anadirFila(){
    let combobox = document.getElementById('combobox');

    let option = document.createElement("option");
    option.className = "_self";
    option.value = "pizzaMala";
    option.textContent = "Pineapple Pizza";

    combobox.appendChild(option);
}

function gestionarLogin(){

    let user = document.getElementById("user").value
    let password = document.getElementById("pass").value

    let despuesDeArroba = user.split("@")[1]

    if (despuesDeArroba === "ehu.eus" && password.length > 3) {
        alert("El botón ha sido pulsado. ¡Bienvenido, " + user + "!")
    }
    else{
        alert("El botón ha sido pulsado. Inicio de sesión fallido.")
        console.log("Inicio de sesión fallido para el usuario: " + user)
    }
}

function cambiarImagenAutomatico(){

    let arrayImagenes = [
        "../images/fresas.png",
        "../images/limon.png",
        "../images/mandarinas.png",
        "../images/manzanas.png",
        "../images/melon.png",
        "../images/sesamo.png"
    ]

    let index = 0;
    let imagen = document.getElementById("image")

    imagen.onclick = function() {
        clearInterval(intervalo)
        console.log("Cambio de imágenes detenido")
        return false
    }

    let intervalo = setInterval(function(){
        imagen.style.backgroundImage = "url('" + arrayImagenes[index] + "')";
        imagen.style.backgroundSize = "cover";

        index = (index + 1) % arrayImagenes.length;

    }, 3000);
}