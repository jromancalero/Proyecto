<footer>
    <hr>
    <section><!--Superior-->
        <div id="contenedor-footer">
            <div id="li-footer-info"><!--Info-->
                <h1>INFO</h1>
                <nav>
                    <ul class="ul-footer">
                        <li>
                            <a class="li-footer" href="{{route('nosotros')}}">About</a>
                        </li>
                        <li>
                            <a class="li-footer" href="{{route('galletas')}}">Política de Cookies</a>
                        </li>
                        <li>
                            <a class="li-footer" href="{{route('policy')}}">Política de Privacidad</a>
                        </li>
                        <li>
                            <a class="li-footer" href="{{route('terminos')}}">Términos y Condiciones</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="li-footer-contact"><!--Contacto-->
                <article>
                    <h1>¿ALGUNA PREGUNTA?</h1>
                    <p class="links-footer">Para cualquier cuestión, escríbenos o llámanos: <a class="link" href="mailto:info@projjject.com?Subject=Hello">clientes@projjject.com</a></p>
                    <div>
                        <section class="icono-textos-footer">
                            <div>
                                <p class="links-footer">+34 961 539 999</p>
                            </div>
                        </section>
                    </div>
                </article>
            </div>
            <div id="logo-footer">
                <a href="{{route("index")}}">
                    <img src={{ asset("../img/isotipo-azul-oscuro.png") }} alt="Isotipo de Projjject">
                </a>
            </div>
        </div>
    </section>

    <section id="footer-inferior"><!--Inferior-->
        <div><!--Copyright-->
            <p>Copyright 2022 <a href="{{route("index")}}"> PROJJJECT </a>All Rights Reserved.</p>
        </div>
        <div><!--RRSS-->
            <ul>
                <li>
                    <a class="fab fa-facebook-square"></a>
                </li>
                <li>
                    <a class="fab fa-twitter-square"></a>
                </li>
                <li>
                    <a class="fab fa-instagram"></a>
                </li>
                <li>
                    <a class="fab fa-linkedin"></a>
                </li>
            </ul>
        </div>
    </section>

    <button onclick="topFunction()" id="scroll-top" class="fa fa-arrow-up" title="Ir arriba" aria-hidden="true"></i></button>

</footer>
