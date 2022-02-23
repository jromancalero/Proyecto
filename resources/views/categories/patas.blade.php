@extends('layouts.layout')
<script type="text/javascript" src="{!! asset('js/productos.js') !!}" defer></script>
@section('content')
<h1 class="categoria" id="textos-featured">Patas</h1>



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

