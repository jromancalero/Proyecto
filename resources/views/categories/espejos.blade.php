@extends('layouts.layout')
<script type="text/javascript" src="{!! asset('js/productos.js') !!}" defer></script>
@section('content')
<<<<<<< HEAD
<h1 class="espejos">Espejos</h1>
@forelse ($products as $product)

{{$product->name}}
<br>

=======
<h1 class="categoria" id="textos-featured">Espejos</h1>



<section>
    <div id="container-products"></div>
</section>


<div id="boton-ver-mas"></div>
>>>>>>> c79f5509cd61e7eb6c48fb2babf5597892ab3159

@empty
No hay productos
@endforelse
@endsection

