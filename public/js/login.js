/* ------------------------------------------------------------------------------------------------ */
/* OBJETO LOGIN */
const login = {
    email_login: "",
    password_login: "",
};

const email_login = document.querySelector("#email_login");
const password_login = document.querySelector("#password_login");
const formulario = document.querySelector("#login");

//Recoger los datos del formulario para el objeto login
function leerTexto(e) {
    login[e.target.id] = e.target.value;
    console.log(login);
}

email_login.addEventListener("input", leerTexto);
password_login.addEventListener("input", leerTexto);

/* FORMULARIO LOGIN */
formulario.addEventListener("submit", function (e) {
    //e.preventDefault();

    const { email_login, password_login } = login;

    if (email_login === "") {
        mostrarError("El email es obligatorio", formulario);
        return;
    }
    if (password_login === "") {
        mostrarError("La contraseña es obligatoria", formulario);
        return;
    }

    console.log("Formulario enviado");
});

/* --------------------------------------------------------------------------------------------------------------------------------------- */

/* FUNCIONES PARA LOS FOMRULARIOS */
function mostrarError(mensaje, ubicacion) {
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("error");
    ubicacion.append(error);

    //Hacer desaparecer el error
    setTimeout(() => {
        error.remove();
    }, 10000);
}
