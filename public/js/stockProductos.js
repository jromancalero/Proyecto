const d = document;

let divContainer = d.querySelector("#container-products");
let botones = d.querySelectorAll(".botones-gestion-stock");
let mas = "mas";
let menos = "menos";
let fecha = "fecha";
let importe = "importe";

for (let boton of botones) {
    boton.addEventListener("click", function (e) {
        //console.log(e.target);

        if (e.target.matches(".mas-vendidos")) {
            divContainer.innerHTML = "";
            getAll(mas);
        } else if (e.target.matches(".menos-vendidos")) {
            divContainer.innerHTML = "";
            getAll(menos);
        } else if (e.target.matches(".fecha")) {
            getAll(fecha);
        } else if (e.target.matches(".importe")) {
            getAll(importe);
        }
    });
}

function ordenarAsc(p_array_json, p_key) {
    p_array_json.sort(function (a, b) {
        return a[p_key] > b[p_key];
    });
}
function ordenarDesc(p_array_json, p_key) {
    ordenarAsc(p_array_json, p_key);
    p_array_json.reverse();
}

/* LEER PETICION API REST */

const getAll = async (operacion) => {
    try {
        let res = await fetch("/api/products");
        json = await res.json();
        console.log(json.sort());

        if (operacion === "mas") {
            ordenarAsc(json, "numSell");
        } else if (operacion === "menos") {
            ordenarDesc(json, "numSell");
        }

        json.forEach((productos) => {
            let article = d.createElement("article");
            let divImg = d.createElement("div");
            let linkImg = d.createElement("a");
            let img = d.createElement("img");
            /* ------------------------------------ */
            let tituloProducto = d.createElement("h1");
            let linkH1 = d.createElement("a");
            /* ------------------------------------- */
            let descripcion = d.createElement("p");
            /* --------------------------------------- */
            let precio = d.createElement("p");
            /* --------------------------------------- */
            let divBoton = d.createElement("div");
            let boton = d.createElement("button");
            /* ---------------------------------------- */
            /* AÑADIR DATOS A LOS CAMPOSS */
            linkH1.textContent = productos.name;
            descripcion.textContent = productos.description;
            precio.textContent = `${productos.price} €`;
            boton.textContent = "Añadir al carrito";
            /* AÑADIMOS LAS CLASES*/
            linkImg.className = "products";
            img.className = "img-products";
            linkH1.className = "nombre-producto";
            descripcion.className = "descripcion-producto";
            precio.className = "precio-producto";
            boton.className = "boton-ver-producto";
            /*AÑADIR SRC/ALT/ENLACES ECT*/
            linkImg.href = "#";
            img.title = "Ver producto";
            img.alt = `Foto de ${productos.name}`;
            img.src = `/img/${productos.category}/${productos.image}.webp`;
            linkH1.href = "#";
            boton.href = "#";
            /* AÑADIMOS TODO A LA PÁGINA */
            divImg.append(linkImg);
            linkImg.append(img);
            tituloProducto.append(linkH1);
            divBoton.append(boton);
            article.append(
                divImg,
                tituloProducto,
                descripcion,
                precio,
                divBoton
            );
            divContainer.append(article);
        });
    } catch (err) {
        let message = err.statusText || "Ocurrio un error";
        divContainer.insertAdjacentHTML(
            "afterend",
            `<p><b>Error ${err.status}: ${message} </b></p>`
        );
    }
};
