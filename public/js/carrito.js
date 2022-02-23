let divContainer = document.querySelector("#seccion-carrito-compra");
let miniCarrito = document.querySelector("#header-count");
miniCarrito.textContent = sessionStorage.length;

function obtenerDatos() {
    let arrayProductos = [];
    for (let i = 0; i < sessionStorage.length; i++) {
        arrayProductos.push(sessionStorage.getItem(sessionStorage.key(i)));
        console.log(arrayProductos);
    }
    return arrayProductos;
}

const generarCarrito = async function () {
    try {
        let arrayProductos = obtenerDatos();
        let res = await fetch("/api/products");
        json = await res.json();
        console.log(json);
        let controlador = 0;
        for (let index of arrayProductos) {
            for (let productos in json) {
                //console.log(json[productos].id);
                if (json[productos].id == index) {
                    controlador += 1;

                    let article = document.createElement("article");
                    article.className = "cart";
                    let img = document.createElement("img");
                    img.src = `/img/${json[productos].category}/${json[productos].image}.webp`;
                    img.alt = `Imagen de ${json[productos].name}`;
                    img.style = "width:35%";
                    let div = document.createElement("div");
                    let titulo = document.createElement("h1");
                    titulo.textContent = json[productos].name;
                    let descripcion = document.createElement("p");
                    descripcion.textContent = json[productos].description;
                    let precio = document.createElement("p");
                    precio.className = "precio-cart";
                    precio.textContent = json[productos].price;
                    let botonBorrar = document.createElement("button");
                    botonBorrar.textContent = "ELIMINAR PRODUCTO";
                    botonBorrar.className = "boton-eliminar";

                    botonBorrar.dataset.value = json[productos].id;
                    botonBorrar.name = controlador;
                    article.dataset.value = json[productos].id;

                    /*   console.log(botonBorrar.dataset.value);
                    console.log(article.dataset.value); */

                    div.append(titulo, descripcion, precio, botonBorrar);
                    article.append(img, div);
                    divContainer.append(article);
                }
            }
        }
    } catch (error) {}
};

generarCarrito().then(() => {
    let botones = document.querySelectorAll(".boton-eliminar");
    let articles = document.querySelectorAll("article");
    let botonFinalizarCompra = document.querySelector(".compra");

    for (let boton of botones) {
        boton.addEventListener("click", function (e) {
            console.log(e);

            console.log(e.target.name);
            for (let i = 0; i < sessionStorage.length + 1; i++) {
                console.log(i);
                if (i == e.target.name) {
                    sessionStorage.removeItem(i);
                }
            }

            for (let articulo of articles) {
                if (e.target.dataset.value === articulo.dataset.value) {
                    articulo.innerHTML = "";
                }
            }
        });
        miniCarrito.textContent = sessionStorage.length;
    }
    botonFinalizarCompra.addEventListener("click", async function () {
        let arrayProductos = obtenerDatos();
        let res = await fetch("/api/products");
        json = await res.json();
        let precioFinal = 0;
        let div = document.createElement("div");
        let precioFin = document.createElement("p");
        for (let index of arrayProductos) {
            for (let productos in json) {
                //console.log(json[productos].id);
                if (json[productos].id == index) {
                    let titulo = document.createElement("h1");
                    titulo.textContent = `Artículo: ${json[productos].name}`;
                    let precio = document.createElement("p");
                    precio.textContent = `Precio: ${json[productos].price}€`;
                    precioFinal += json[productos].price;

                    div.append(titulo);
                    div.append(precio);
                }
            }
        }
        precioFin.className = "precio-final";
        div.className = "divCompra";
        precioFin.textContent = `Precio final: ${precioFinal} €`;
        div.append(precioFin);
        sessionStorage.clear();
        divContainer.innerHTML = "";
        divContainer.append(div);
        miniCarrito.textContent = sessionStorage.length;
    });
});
