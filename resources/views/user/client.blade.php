@extends('layouts.layoutAdmin')

@section('content')

<section> <!-- Título -->
    <div class="titulo-gestion">
        <h1>¡Bienvenid@!</h1>
    </div>
</section>

<section>
    <div id="div-gestion-stock">
        <button type="button" class="botones-gestion-stock">Modificar mis datos</button>
        <button type="button" class="botones-gestion-stock">Añadir dirección de entrega</button>
    </div>
    <div class="div-gestion-usuarios">
        <ul>
            <li>ID:
                <ul class="id">

                </ul>
            </li>
            <li>NOMBRE:
                <ul class="nombre">

                </ul>
            </li>
            <li>DNI:
                <ul class="dni">

                </ul>
            </li>
            <li>EMAIL:
                <ul class="email">

                </ul>
            </li>
            <li>ROL:
                <ul class="rol">

                </ul>
            </li>
            <li>DIRECCIÓN DE ENTREGA:
                <ul class="direccion">

                </ul>
            </li>
        </ul>
    </div>
</section>

@endsection
