/* Se ha cambiado */

const d = document;

let categoria = d.querySelector(".categoria");
let categoriaProducto = categoria.textContent;
categoria.textContent = categoria.textContent.toLocaleUpperCase();
let divContainer = d.querySelector("#container-products");
let miniCarrito = d.querySelector("#header-count");
miniCarrito.textContent = sessionStorage.length;
let contador = 0;
let botonVerMas = d.createElement("button");
let divBotonVerMas = d.querySelector("#boton-ver-mas");

/* LEER PETICION API REST */

const getAll = async (seguir) => {
    try {
        let res = await fetch("/api/products");
        json = await res.json();
        console.log(json);

        json.forEach((productos) => {
            if (contador === 20) {
                botonVerMas.textContent = "VER MAS";
                divBotonVerMas.append(botonVerMas);
            } else if (productos.id >= seguir) {
                if (productos.category === categoriaProducto) {
                    contador++;
                    //console.log(contador);
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
                    img.src = `../img/${categoriaProducto}/${productos.image}.webp`;
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
                    /* Database */
                    boton.dataset.value = productos.id;
                    console.log(boton.dataset);
                }
            }
        });
        contador = 0;
        botonVerMas.addEventListener("click", function (e) {
            let seguir = +20;
            botonVerMas.style = "display: none";
            getAll(seguir);
        });
    } catch (err) {
        let message = err.statusText || "Ocurrio un error";
        divContainer.insertAdjacentHTML(
            "afterend",
            `<p><b>Error ${err.status}: ${message} </b></p>`
        );
    }
};

getAll(0).then(() => {
    let botones = d.querySelectorAll(".boton-ver-producto");
    let numProductos = 0;

    for (let boton of botones) {
        boton.addEventListener("click", function (e) {
            numProductos = sessionStorage.length + 1;
            console.log(e);
            window.sessionStorage.setItem(numProductos, e.target.dataset.value);
            miniCarrito.textContent = sessionStorage.length;
        });
    }
});
