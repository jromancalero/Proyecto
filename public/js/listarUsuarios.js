const d = document;
let divContainer = document.querySelector(".container-users");

let listaID = d.querySelector(".id");
let listaNombre = d.querySelector(".nombre");
let listaDNI = d.querySelector(".dni");
let listaEmail = d.querySelector(".email");
let listaRol = d.querySelector(".rol");
let listaDireccion = d.querySelector(".direccion");

/* LEER PETICION API REST */

const getAllUsers = async () => {
    try {
        let res = await fetch("/api/user");
        json = await res.json();
        console.log(json);
        json.forEach((users) => {
            let liNombre = d.createElement("li");
            let liID = d.createElement("li");
            let liDNI = d.createElement("li");
            let liEmail = d.createElement("li");
            let liRol = d.createElement("li");
            let liDirección = d.createElement("li");

            liNombre.textContent = users.name;
            liDNI.textContent = users.dni;
            liID.textContent = users.id;
            liEmail.textContent = users.email;
            liRol.textContent = users.rol;
            liDirección.textContent = users.direction;

            listaID.append(liID);
            listaNombre.append(liNombre);
            listaDNI.append(liDNI);
            listaEmail.append(liEmail);
            listaRol.append(liRol);
            listaDireccion.append(liDirección);
        });
    } catch (err) {
        let message = err.statusText || "Ocurrio un error";
        divContainer.insertAdjacentHTML(
            "afterend",
            `<p><b>Error ${err.status}: ${message} </b></p>`
        );
    }
};

getAllUsers();
