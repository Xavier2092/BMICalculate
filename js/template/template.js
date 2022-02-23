'use strict';
const d = document;
$(d).ready(() => {
    /*HEADER*/
    
    const   header = $('#header');
            header.append(`
                            <div class="col-xl-4 justify-content-center">
                                <a  class="navbar-brand header__title collapse navbar-collapse" id="titulo" data-target="#carouselExampleCaptions" href="../index.html">Inicio</a>
                            </div>
                            <div class="col-xl-4">
                                <a  class="navbar-brand header__title collapse navbar-collapse justify-content-center" id="titulo" data-target="#carouselExampleCaptions" href="../pages/imc.html">IMC</a>
                            </div>
                            <div class="col-xl-4">
                                <a  class="navbar-brand header__title collapse navbar-collapse justify-content-end" id="titulo" data-target="#carouselExampleCaptions" href="../pages/pgc.html">PGC</a>
                            </div> 
                        `);

    /*SLIDES*/

    const   slides = $('#slides');
            slides.append(`           
                            <li onclick="location.href='../index.html'" id="indexSlide"></li>
                            <li onclick="location.href='../pages/imc.html'" id="imcSlide"></li>
                            <li onclick="location.href='../pages/pgc.html'" id="pgcSlide"></li>
                        `);

    $("#indexSlide").show(200);
    $("#imcSlide").show(400);
    $("#pgcSlide").show(600);



    /*CONTENIDO*/
    /// Url actual
    let url = window.location.href;

    /// Elementos de li
    const tabs = ["index", "imc", "pgc"];

    tabs.forEach(e => {
        /// Agregar .php y ver si lo contiene en la url
        if (url.indexOf(e + ".html") !== -1) {
            /// Agregar tab- para hacer que coincida la Id
            setMenu(e + "Menu");
            setSlide(e + "Slide");
        }

    });

    /// Funcion que asigna la clase active
    function setMenu(id){
        d.getElementById(id).style.backgroundColor= "gainsboro";
        d.getElementById(id).style.color= "#484949";
        d.getElementById(id).style.fontWeight= 750 ;
    };

    function setSlide(id){
        d.getElementById(id).setAttribute("class", "active");
    }

    /*FOOTER*/
    const   footer = $('#footer');
            footer.append(` 
                            <div class="col-xl-12 fixed-bottom">
                                <sub>Todos los derechos reservados <a href="https://www.linkedin.com/in/richard-xavier-carrillo-moreno-965112136/" target="_blank"><b>©Xavier Carrillo</b></a> 2021</sub>
                            </div>
                        `);

                        




});