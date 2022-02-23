const d = document;
$table = d.querySelector(".crud-table");
$form = d.querySelector(".crud-form");
$table = d.querySelector(".crud-table");
$template = d.getElementById("crud-template").content;
$fragment = d.createDocumentFragment();
editar = d.querySelector(".accion");

/* LEER LAS PETICIONES */

const getAll = async () => {
    try {
        let res = await fetch("/api/products");
        json = await res.json();

        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        console.log(json);

        json.forEach((index) => {
            $template.querySelector(".nombre").textContent = index.name;
            $template.querySelector(".id").textContent = index.id;
            $template.querySelector(".precio").textContent = index.price;
            $template.querySelector(".image").textContent = index.image;
            $template.querySelector(".taxe").textContent = index.taxe;
            $template.querySelector(".discount").textContent = index.discount;
            $template.querySelector(".category").textContent = index.category;
            $template.querySelector(".description").textContent =
                index.description;
            $template.querySelector(".style").textContent = index.style;
            /* ---------------------------------------------------------- */
            $template.querySelector(".edit").dataset.id = index.id;
            $template.querySelector(".edit").dataset.nombre = index.name;
            $template.querySelector(".edit").dataset.precio = index.price;
            $template.querySelector(".edit").dataset.image = index.image;
            $template.querySelector(".edit").dataset.taxe = index.taxe;
            $template.querySelector(".edit").dataset.discount = index.discount;
            $template.querySelector(".edit").dataset.category = index.category;
            $template.querySelector(".edit").dataset.description =
                index.description;
            $template.querySelector(".edit").dataset.style = index.style;

            /* ---------------------------------------------------------- */
            $template.querySelector(".eliminar").dataset.id = index.id;

            let $clone = d.importNode($template, true);
            $fragment.append($clone);
        });

        $table.querySelector("tbody").append($fragment);
    } catch (err) {
        let message = err.statusText || "Ocurrio un error";
        $table.insertAdjacentHTML(
            "afterend",
            `<p><b>Error ${err.status}: ${message} </b></p>`
        );
    }
};
d.addEventListener("DOMContentLoaded", getAll);

/* Delegacion de eventos para el crud */

d.addEventListener("submit", async (e) => {
    if (e.target === $form) {
        e.preventDefault();
        console.log(e.target.nombre.value);
        console.log(e.target.precio.value);
        if (!e.target.id.value) {
            //CREATE-POST
            console.log(e);
            try {
                let precioFinal = parseInt(e.target.precio.value);
                let options = {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json;charset=UTF-8",
                    },
                    body: JSON.stringify({
                        name: e.target.nombre.value,
                        price: precioFinal,
                        image: e.target.image.value,
                        taxe: e.target.taxe.value,
                        discount: e.target.discount.value,
                        category: e.target.category.value,
                        description: e.target.description.value,
                        style: e.target.style.value,
                    }),
                };

                let res = await fetch("/api/products", options);
                json = await res.json();

                //manipulacion del error
                if (!res.ok)
                    throw { status: res.status, statusText: res.statusText };

                //recargar página despues de ver si hay algun error
                location.reload();
            } catch (err) {
                console.log(err);
                let message = err.statusText || "Ocurrio un error";
                $form.insertAdjacentHTML(
                    "afterend",
                    `<p><b>Error ${err.status}: ${message} </b></p>`
                );
            }
        } else {
            //ACTULIZACION UPDATE-PUT
            try {
                let options = {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json;charset=UTF-8",
                    },
                    body: JSON.stringify({
                        name: e.target.nombre.value,
                        price: precioFinal,
                        image: e.target.image.value,
                        taxe: e.target.taxe.value,
                        discount: e.target.discount.value,
                        category: e.target.category.value,
                        description: e.target.description.value,
                        style: e.target.style.value,
                    }),
                };
                console.log(`${e.target.id.value}`);
                //añadimos a productos/ruta de el valor de el id de la variable = `${e.target.id.value}`
                let res = await fetch(
                    `/api/products/${e.target.id.value}`,
                    options
                );
                json = await res.json();

                //manipulacion del error
                if (!res.ok)
                    throw { status: res.status, statusText: res.statusText };

                //recargar la pagina
                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrio un error";
                $form.insertAdjacentHTML(
                    "afterend",
                    `<p><b>Error ${err.status}: ${message} </b></p>`
                );
            }
        }
    }
});

d.addEventListener("click", async (e) => {
    if (e.target.matches(".edit")) {
        editar.textContent = "Editar";
        $form.nombre.value = e.target.dataset.nombre;
        $form.precio.value = e.target.dataset.precio;
        $form.id.value = e.target.dataset.id;
        $form.image.value = e.target.dataset.image;
        $form.taxe.value = e.target.dataset.taxe;
        $form.category.value = e.target.dataset.category;
        $form.discount.value = e.target.dataset.discount;
        $form.description.value = e.target.dataset.description;
        $form.style.value = e.target.dataset.style;
    }
    if (e.target.matches(".eliminar")) {
        let isDelete = confirm(
            `Estas seguro de querer eliminar el producto ${e.target.dataset.id}?`
        );

        if (isDelete) {
            //Delete - DELETE BORRAR PRODUCTO
            try {
                let options = {
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json;charset=utf-8",
                    },
                };

                let res = await fetch(
                    `/api/products/${e.target.dataset.id}`,
                    options
                );
                json = await res.json();

                //manipulacion del error
                if (!res.ok)
                    throw { status: res.status, statusText: res.statusText };

                //recargar la pagina
                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrio un error";
                alert(`Error ${err.status}: ${message}`);
            }
        }
    }
});
