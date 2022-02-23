<header id="menu-sticky">
    <nav> <!--Barra superior-->
        <div class="flex-container">
            <section class="hamburger-menu"> <!-- Menu Hamburger -->
                    <input id="menu__toggle" type="checkbox"/>
                    <label class="menu__btn" for="menu__toggle">
                        <span></span>
                    </label>

                    <ul class="menu__box">
                        <li><a class="menu__item" href="{{route('muebles')}}">Muebles</a></li>
                        <li><a class="menu__item" href="{{route("espejos")}}">Espejos</a></li>

                        <li><a class="menu__item" href="{{route("accesorios")}}">Accesorios</a></li>
                        <li><a class="menu__item" href="{{route("patas")}}">Patas</a></li>
                        <li class="desplegable"><a class="menu__item" href="#">Estilos<i class="fas fa-chevron-down"></i></a>
                            <ul class="submenu">
                                <li><a class="menu__item" href="{{route("nordico")}}">Nórdico</a></li>
                                <li><a class="menu__item" href="{{route("boho")}}">Boho</a></li>
                                <li><a class="menu__item" href="{{route("industrial")}}">Industrial</a></li>
                                <li><a class="menu__item" href="{{route("glamour")}}">Glamour</a></li>
                            </ul>
                        </li>
                    </ul>
            </section>

            <section id="div-logo"><!--Logo-->
                <a href="{{route("index")}}">
                    <img id="logo" src={{ asset("../img/logotipo-color.png") }} alt="Logotipo de Projjject">
                </a>
            </section>

            <section id="iconos-acceso"><!--Panel acceso-->
                <ul id="iconos-resp">
                    <li class="fa fa-search iconos-acceso-estilo" ><!--Search-->
                        <form action="" autocomplete="on">
                        <input class="buscador" id="search" name="search" type="text" placeholder="Buscar...">
                        <input class="buscador-boton" id="search_submit" value="Buscar" type="submit">
                        </form>
                    </li>
                    <li><!--User-->
                        <a class="fa fa-user iconos-acceso-estilo" href="{{route('profile.show')}}"></a>
                    </li>
                    <li><!--Cesta-->
                        <a class="fa fa-shopping-basket iconos-acceso-estilo" href="{{route('Carrito')}}"></a>
                        <span class="count" id="header-count">3</span>
                    </li>
                </ul>
            </section>
        </div>
    </nav>
    <hr>
</header>
