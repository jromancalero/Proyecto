@extends('layouts.layoutAdmin')
<script type="text/javascript" src="{!! asset('js/stockProductos.js') !!}" defer></script>

@section('content')

<section> <!-- Título -->
    <div class="titulo-gestion">
        <h1>Gestión de stock</h1>
    </div>
</section>

<section>
    <div id="div-gestion-stock">
        <button type="button" class="botones-gestion-stock mas-vendidos">Productos más vendidos</button>
        <button type="button" class="botones-gestion-stock menos-vendidos">Productos menos vendidos</button>
        <button type="button" class="botones-gestion-stock fecha">Ver pedidos por fecha</button>
        <button type="button" class="botones-gestion-stock importe">Ver pedidos por importe</button>
    </div>
    <div id="container-products">

    </div>
</section>

<section>
    <a  class="boton-ver-producto" href="{{route('admin')}}">Volver</a>
</section>

@endsection
