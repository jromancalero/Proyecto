let d = document;
let containerMuebles = document.querySelector(".container-muebles");
let containerEspejos = document.querySelector(".container-espejos");
let containerPatas = document.querySelector(".container-patas");
let containerAccesorios = document.querySelector(".container-accesorios");
let miniCarrito = d.querySelector("#header-count");
miniCarrito.textContent = sessionStorage.length;

const getAll = async (lugar, categoria) => {
    try {
        let res = await fetch("/api/products");
        json = await res.json();
        console.log(json);
        let contador = 0;

        json.forEach((productos) => {
            if (productos.category === categoria && contador !== 3) {
                contador++;
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
                lugar.append(article);
                /* Database */
                boton.dataset.value = productos.id;
                console.log(boton.dataset);
            }
        });
    } catch (err) {
        let message = err.statusText || "Ocurrio un error";
        containerMuebles.insertAdjacentHTML(
            "afterend",
            `<p><b>Error ${err.status}: ${message} </b></p>`
        );
    }
};

getAll(containerMuebles, "Muebles").then(() => {
    let botones = d.querySelectorAll(".boton-ver-producto");
    let numProductos = 0;
    for (let boton of botones) {
        boton.addEventListener("click", function (e) {
            numProductos += 1;
            console.log(e);
            window.sessionStorage.setItem(numProductos, e.target.dataset.value);
            miniCarrito.textContent = sessionStorage.length;
        });
    }
});
getAll(containerAccesorios, "Accesorios").then(() => {
    let botones = d.querySelectorAll(".boton-ver-producto");
    let numProductos = 0;
    for (let boton of botones) {
        boton.addEventListener("click", function (e) {
            numProductos += 1;
            console.log(e);
            window.sessionStorage.setItem(numProductos, e.target.dataset.value);
            miniCarrito.textContent = sessionStorage.length;
        });
    }
});
getAll(containerEspejos, "Espejos").then(() => {
    let botones = d.querySelectorAll(".boton-ver-producto");
    let numProductos = 0;
    for (let boton of botones) {
        boton.addEventListener("click", function (e) {
            numProductos += 1;
            console.log(e);
            window.sessionStorage.setItem(numProductos, e.target.dataset.value);
            miniCarrito.textContent = sessionStorage.length;
        });
    }
});
getAll(containerPatas, "Patas").then(() => {
    let botones = d.querySelectorAll(".boton-ver-producto");
    let numProductos = 0;
    for (let boton of botones) {
        boton.addEventListener("click", function (e) {
            numProductos = sessionStorage.length + 1;
            console.log(e);
            window.sessionStorage.setItem(numProductos, e.target.dataset.value);
        });
    }
});
