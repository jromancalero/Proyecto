@extends('layouts.layout')
<script type="text/javascript" src="{!! asset('js/carrito.js') !!}" defer></script>
@section('content')

<section> <!-- Título -->
    <div id="textos-featured">
        <h2 id="subtitulo">Envío gratuíto para compras superiores a 1.000€</h2>
        <h1>Shopping Cart</h1>
    </div>
</section>

<section id="seccion-carrito-compra"> <!-- Productos del carrito -->

</section>

<section><!-- Botón Comprar -->
    <div id="boton-comprar">
        <button href="#" class="compra">Finalizar compra</button>
    </div>
</section>

@endsection
