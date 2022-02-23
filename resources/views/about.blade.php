@extends('layouts.layout')

@section('content')

<section>
    <div id="textos-featured">
        <h1>Un poquito de nosotros</h1>
    </div>
</section>
<section>
    <div>
        <div class="au-column">
            <div class="au-card">
                <div class="au-container">
                    <h1>Jorge Román</h1>
                    <h2>JS Manager</h2>
                    <h3>Capaz de ingerir 5.000kcal en una merienda.</h3>
                    <h4><a href="mailto:jantoni@projjject.com">jroman@projjject.com</a></h4>
                    <button type="button" class="boton-ver-producto">Contacto</button>
                </div>
            </div>
        </div>

        <div class="au-column">
            <div class="au-card">
                <div class="au-container">
                    <h1>Joan Antoni</h1>
                    <h2>CEO del backend</h2>
                    <h3>99% fe en el Levante. 1% suerte.</h3>
                    <h4><a href="mailto:jantoni@projjject.com">jantoni@projjject.com</a></h4>
                    <button type="button" class="boton-ver-producto">Contacto</button>
                </div>
            </div>
        </div>

        <div class="au-column">
            <div class="au-card">
                <div class="au-container">
                    <h1>Javier Ariño</h1>
                    <h2>Art Director</h2>
                    <h3>Sabe dónde has puesto un doble espacio.</h3>
                    <h4><a href="mailto:jantoni@projjject.com">jarino@projjject.com</a></h4>
                    <button type="button" class="boton-ver-producto">Contacto</button>
                </div>
            </div>
        </div>
    </div>
</section>

@endsection
