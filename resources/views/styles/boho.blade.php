
@extends('layouts.layout')
<script type="text/javascript" src="{!! asset('js/estilos.js') !!}" defer></script>
<script type="text/javascript" src="{!! asset('js/carrito.js') !!}" defer></script>

@section('content')

<div id="textos-featured">
    <h1 class="estilo">Boho</h1>
</div>




<section>
    <div id="container-products"></div>
</section>


<div id="boton-ver-mas"></div>

@forelse ($products as $product)
{{$product->name}}
<br>
@empty
No hay productos
@endforelse
@endsection
