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

/* FORULARIO REGISTRO */

const account = {
    NIF: "",
    user_name: "",
    email: "",
    user_password: "",
    password_confirmation: "",
};

const formulario_account = document.querySelector("#account");
const NIF = document.querySelector("#NIF");
const user_name = document.querySelector("#user_name");
const email = document.querySelector("#email");
const user_password = document.querySelector("#user_password");
const password_confirmation = document.querySelector("#password_confirmation");

/* Recoger los datos del formulario */
function leerTexto2(e) {
    account[e.target.id] = e.target.value;
    console.log(account);
}

NIF.addEventListener("input", leerTexto2);
user_name.addEventListener("input", leerTexto2);
email.addEventListener("input", leerTexto2);
user_password.addEventListener("input", leerTexto2);
password_confirmation.addEventListener("input", leerTexto2);

/* FORMULARIO PARA LAS CUENTAS */
formulario_account.addEventListener("submit", function (e) {
    //e.preventDefault();

    const { NIF, user_name, email, user_password, password_confirmation } =
        account;

    console.log(user_password);
    console.log(password_confirmation.value);
    console.log(password_confirmation.textContent);
    if (
        NIF === "" ||
        user_name === "" ||
        email === "" ||
        user_password === ""
    ) {
        mostrarError("Todos los campos son obligatorios", formulario_account);
        return;
    }
    if (validarNIF(NIF) === false) {
        mostrarError("El NIF es inválido", formulario_account);
        return;
    }
    if (validarNombre(user_name) === false) {
        mostrarError("El nombre es inválido", formulario_account);
        return;
    }
    if (validarEmail(email) === false) {
        mostrarError("El Email es inválido", formulario_account);
        return;
    }
    if (validarContraseña(user_password) === false) {
        mostrarError(
            "La contraseña debe tener al menos una mayúscula, minúscula, un número y un carácter especial y estar constituida de entre 8-20 carácteres",
            formulario_account
        );
        return;
    }
    if (user_password !== password_confirmation) {
        mostrarError("Las contraseñas deben de coincidir", formulario_account);
        return;
    }
    console.log("enviando formulario 2");
});

/* VALIDACIÓN NIF */

const arrayNIF = [
    { resto: 0, letra: "T" },
    { resto: 1, letra: "R" },
    { resto: 2, letra: "W" },
    { resto: 3, letra: "A" },
    { resto: 4, letra: "G" },
    { resto: 5, letra: "M" },
    { resto: 6, letra: "Y" },
    { resto: 7, letra: "F" },
    { resto: 8, letra: "P" },
    { resto: 9, letra: "D" },
    { resto: 10, letra: "X" },
    { resto: 11, letra: "B" },
    { resto: 12, letra: "N" },
    { resto: 13, letra: "J" },
    { resto: 14, letra: "Z" },
    { resto: 15, letra: "S" },
    { resto: 16, letra: "Q" },
    { resto: 17, letra: "V" },
    { resto: 18, letra: "H" },
    { resto: 19, letra: "L" },
    { resto: 20, letra: "C" },
    { resto: 21, letra: "K" },
    { resto: 22, letra: "E" },
];

/* Validar NIF */

function validarNIF(NIF) {
    let numeros = NIF.substring(0, 8);
    parseInt(numeros);
    let letra = NIF.substring(8, 9);
    console.log(numeros);
    /* Recorremos los numeros por si hay alguna letra dentro de ella */
    for (let index of numeros) {
        if (isNaN(index)) {
            return false;
        }
    }
    /* No se admiten la o, ñ o u y si es tiene mas de 8 carácteres */
    if (letra === "O" || letra === "Ñ" || letra === "U" || letra === "I") {
        return false;
    } else if (NIF.length > 9 || NIF.length < 8) {
        return false;
    }
    return calcularNIF(numeros, letra, arrayNIF);
}

/* Calculamos el resto del NIF/23 para ver si concuerda con su letra */
function calcularNIF(numeros, letra, arrayNIF) {
    let resto = numeros % 23;
    for (let index in arrayNIF) {
        if (
            resto === arrayNIF[index].resto &&
            letra === arrayNIF[index].letra
        ) {
            return true;
        }
    }
    return false;
}

/* VALIDACION NOMBRE */
function validarNombre(nombre) {
    let arrayNombres = nombre.split(" ");
    let nom_completo = "";
    if (nombre.length > 50) {
        return false;
    }
    if (arrayNombres.length < 2) {
        return false;
    }
    /* Pasar cada inicial a mayúscula */
    for (let i = 0; i < arrayNombres.length; i++) {
        nom_completo =
            nom_completo +
            " " +
            arrayNombres[i].charAt(0).toUpperCase() +
            arrayNombres[i].slice(1);
    }
    return nom_completo;
}

/* VALIDACIÓN EMAIL */

function validarEmail(email) {
    const validación =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (validación.test(email)) {
        return String(email).toLocaleLowerCase();
    } else {
        return false;
    }
}

/* VALIDACIÓN CONTRASEÑA */

function validarContraseña(password) {
    let validación =
        /^(?![A-z0-9]+$)(?=.[^%&',;=?$\x22])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$/;

    if (validación.test(password)) {
        return password;
    } else {
        return false;
    }
}

/* ----------------------------------------------------------------------------------------------------------- */

/* MOSTRAR PRODUCTOS SEGUN CATEGORIA */
