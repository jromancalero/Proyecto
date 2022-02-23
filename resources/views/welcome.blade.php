@extends('layouts.layout')

<script type="text/javascript" src="{!! asset('js/index.js') !!}" defer></script>

@section('content')

<section><!--Products-->
    <div class="mySlides fade">
        <div id="slider-01">
            <article id="div-slider-01">
                <h1 id="texto-slider-01">NORDIC is coming!</h1><!--Texto H1-->
                <h2>Descubre la nueva colección</h2>
                <div>
                    <a id="btn-slider-01"  href="{{route("nordico")}} ">Ver estilo Nórdico</a><!--Botón-->
                </div>
            </article>
        </div>
    </div>
    <div id="textos-featured">
        <h1>MUEBLES</h1>
    </div>
    <div id="container-products" class="container-muebles">

    </div>
    <div class="boton-ver-x">
        <a href="{{route("muebles")}}"> Ver Muebles</a>
    </div>
</section>

<section><!--Products-->
    <div class="mySlides fade">
        <div id="slider-02">
            <article id="div-slider-02">
                <h1 id="texto-slider-02">Pasión por lo natural</h1><!--Texto H1-->
                <h2>Tu baño, más cálido</h2>
                <div>
                    <a  href="{{route("boho")}} " id="btn-slider-02">Ver estilo Boho</a><!--Botón-->
                </div>
            </article>
        </div>
    </div>
    <div id="textos-featured">
        <h1>ESPEJOS</h1>
    </div>
    <div id="container-products" class="container-espejos">

    </div>
    <div class="boton-ver-x">
        <a href="{{route("espejos")}}"> Ver Espejos</a>
    </div>
</section>

<section><!--Products-->
    <div class="mySlides fade">
        <div id="slider-03">
            <article>
                <h1 id="texto-slider-03">Estructuras a la vista</h1><!--Texto H1-->
                <h2>Muebles de baño con mucho carácter</h2>
                <div>
                    <a href="{{route("industrial")}} " id="btn-slider-03">Ver estilo Industrial</a><!--Botón-->
                </div>
            </article>
        </div>
    </div>
    <div id="textos-featured">
        <h1>PATAS</h1>
    </div>
    <div id="container-products" class="container-patas">


    </div>
    <div class="boton-ver-x">
        <a href="{{route("patas")}}"> Ver Patas</a>
    </div>
</section>

<section><!--Products-->
    <div class="mySlides fade">
        <div id="slider-04">
            <article>
                <h1 id="texto-slider-04">¿Buscas sofisticación?</h1><!--Texto H1-->
                <h2>Traemos el lujo para el baño</h2>
                <div>
                    <a href="{{route("glamour")}} " id="btn-slider-04">Ver estilo Glamour</a><!--Botón-->
                </div>
            </article>
        </div>
    </div>
    <div id="textos-featured">
        <h1>ACCESORIOS</h1>
    </div>
    <div id="container-products" class="container-accesorios">

    </div>
    <div class="boton-ver-x">
        <a href="{{route("accesorios")}}"> Ver Accesorios</a>
    </div>
</section>

@endsection



{{-- ICONO DE CARRITO DE LARAVEL:
    <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="-mt-px w-5 h-5 text-gray-400">
    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
</svg> --}}
