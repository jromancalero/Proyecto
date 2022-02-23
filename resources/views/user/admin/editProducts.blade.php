@extends('layouts.layoutAdmin')

<script type="text/javascript" src="{!! asset('js/editarProductos.js') !!}" defer></script>

@section('content')

<section> <!-- Título -->
    <div class="titulo-gestion">
        <h1>Gestión de productos</h1>
    </div>
</section>

<section>
    <div class="div-gestion-productos">
        <h1 class="accion">Agregar Producto</h1>
        <form class="crud-form form-gestion-productos" action="{{route('products.store')}}">
            @csrf
            <label for="nombre">Nombre del Producto</label>
            <input type="text" name="nombre" placeholder="Nombre" required>
            <br>
            <label for="precio">Precio del Producto</label>
            <input type="text" name="precio" placeholder="Precio" required>
            <br>
            <label for="image">Nombre de la Imagen</label>
            <input type="text" name="image" placeholder="Imagen" required>
            <br>
            <label for="taxe">% de la Tasa</label>
            <input type="text" name="taxe" placeholder="Taxe" required>
            <br>
            <label for="discount">% del Descuento</label>
            <input type="text" name="discount" placeholder="Discount" required>
            <br>
            <label for="category">Nombre de la Categoria</label>
            <input type="text" name="category" placeholder="Category" required>
            <br>
            <label for="description">Descripcion del Producto</label>
            <input type="text" name="description" placeholder="Description" required>
            <br>
            <label for="style">Estilo del Producto</label>
            <input type="text" name="style" placeholder="Style" required>
            <br>

            <input id="boton-enviar-gestion-productos" type="submit" value="Enviar">
            <input type="hidden" name="id">
        </form>

        <h2>Listar Productos</h2>
        <table class="crud-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Imagen</th>
                    <th>Tasa</th>
                    <th>Descuento</th>
                    <th>Categoria</th>
                    <th>Descripcion</th>
                    <th>Estilo</th>
                    <th>Acciones</th>
                </tr>
                <tbody>
                </tbody>
            </thead>
        </table>
        <template id="crud-template">
            <tr>
                <td class="id"></td>
                <td class="nombre"></td>
                <td class="precio"></td>
                <td class="image"></td>
                <td class="taxe"></td>
                <td class="discount"></td>
                <td class="category"></td>
                <td class="description"></td>
                <td class="style"></td>
                <td>
                    <button class="edit">Editar</button>
                    <button class="eliminar">Eliminar</button>
                </td>

            </tr>
        </template>
    </div>
</section>

<section>
    {{-- <button type="button" class="boton-ver-producto">Volver</button> --}}
    <a  class="boton-ver-producto" href="{{route('admin')}}">Volver</a>
</section>

@endsection
