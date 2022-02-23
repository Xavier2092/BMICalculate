'use strict';
$(document).ready(() => {
    /*CONTENIDO*/
    const   contenidoIndex = $('#contenidoIndex');
            contenidoIndex.append(`
                                <!-- INDEX -->
                                <div id="index" class="carousel-item active index">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 leftContent" id="imgIndex1">
                                            <img src="https://i.postimg.cc/Qd3YYH4t/fitness.png" class="d-block w-100 index index__img imgIndex" title="fitness partners" alt="pareja compañera de rutina de ejercicios">
                                            <a href="https://xavier2092.github.io/BMICalculate/pages/imc.html" class="btn btn-outline-light">>>><b>Acá puede calcular su IMC</b><<<</a>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 centerContent">
                                            <h4 class="index index__title title">Bienvenido a la Calculadora virtual de IMC!</h4>
                                            <h5 class="index index__title title">¿Qué es el IMC?</h5>
                                            <p>El índice de masa corporal (IMC) <b>es una razón matemática que asocia la masa y la talla de un individuo</b>, ideada por el estadístico belga Adolphe Quetelet, por lo que también se conoce como índice de Quetelet.</p>
                                            <p>Esto nos permite calcular, de manera sencilla, la cantidad de grasa, que tenemos en nuestro cuerpo. <b>Ahora bien, existe un novedoso método, que, según expertos, es más exacto todavía para calcular el nivel porcentual de grasa en nuestro cuerpo, así llamado el Porcentage de Grasa Corporal (PGC). Acá, en éste post, te enseñaremos a calcular tanto el Indice de Masa Corporal (IMC), como el Porcentaje de Grasa Corporal</b>, al igual que las diferencias entre cada una.</p>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 rightContent">
                                            <img src="https://i.postimg.cc/D0Qp7hmF/medidas-mujer.png" class="d-block w-100 imgIndex index index__img" title="chica fitness" alt="mujer tomando las medidas de su cintura">
                                            <a href="https://xavier2092.github.io/BMICalculate/pages/pgc.html" class="btn btn-outline-light">>>><b>Acá puede calcular su PGC</b><<<</a>
                                        </div>
                                    </div>
                                </div>`
                                );

    const   contenidoIMC = $('#contenidoIMC');
            contenidoIMC.append(`
                                <!-- IMC -->
                                <div id="imc" class="carousel-item active imc">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-5 leftContent">
                                            <img src="https://i.postimg.cc/hvKbbdPW/formular-IMC.jpg" class="d-block w-100 formulaIMC imc imc__img" alt="formula para obtener el indice de masa muscular, y la lectura de los resultados posibles" title="formula y resultados del IMC">
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 formularioIMC form form_tableIMC centerContent">
                                            <form href="" id="formulario">
                                                <fieldset>
                                                    <table>
                                                        <th colspan="2">
                                                            <legend>Calcula tu IMC:</legend>
                                                        </th> 
                                                        <tr>
                                                            <td class="d-none d-sm-block d-md-block d-lg-block d-xl-block labelIMC">
                                                                <label for="">Nombre</label>
                                                            </td>
                                                            <td>
                                                                <input type="text" id="nombreIMC" placeholder="Nombre">
                                                            </td>
                                                        </tr> 
                                                        <tr>
                                                            <td class="d-none d-sm-block d-md-block d-lg-block d-xl-block labelIMC">
                                                                <label for="">Edad</label>
                                                            </td>
                                                            <td>
                                                                <input id="edadIMC" type="number" placeholder="Edad">
                                                            </td>
                                                        </tr> 
                                                        <tr>
                                                            <td class="d-none d-sm-block d-md-block d-lg-block d-xl-block labelIMC">
                                                                <label for="">Estatura</label>
                                                            </td>
                                                            <td>
                                                                <input id="estaturaIMC" type="number" placeholder="Estatura en cm">
                                                            </td>
                                                        </tr> 
                                                        <tr>
                                                            <td class="d-none d-sm-block d-md-block d-lg-block d-xl-block labelIMC">
                                                                <label for="">Peso</label>
                                                            </td>
                                                            <td>
                                                                <input id="pesoIMC" type="number" placeholder="Peso en Kgs">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan=2 class="selector enviar">
                                                            <input type="reset" id="reset" name="Limpiar Campos" value="Limpiar Campos" class="btn btn-outline-light"><input id="btnGuardar" class="btn btn-outline-light" value="Calcular"  type="submit" data-target="#modal" data-toggle="modal">
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </fieldset>
                                            </form>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-12 col-xl-3 titleIMC imc__contenido rightContent">
                                            <h5 class="imc imc__title title">¿Cómo se calcula el Indice de Masa Corporal?</h5>
                                            <p>El Indice de Masa Corporal se calcula dividiendo los kilogramos de peso por el cuadrado de la estatura en metros (IMC = peso [kg]/ estatura [m2]).</p>
                                            <p>Como podemos apreciar en la imagen referencial, esta sería la lectura de su IMC de acuerdo a su resultado:</p>
                                            <ul class="calculo">
                                                <li><em class="calculo calculo__imcBajo imcBajo">IMC < 18.5</em>, está dentro de los valores correspondientes a “bajo peso”.</li>
                                                <li><em class="calculo calculo__imcNormal imcNormal">IMC entre 18.5 y 24.9</em>, está dentro de los valores “normales” o de peso saludable.</li>
                                                <li><em class="calculo calculo__imcAlto imcAlto">IMC entre 25.0 y 29.9</em>, está dentro de los valores correspondientes a “sobrepeso”.</li>
                                                <li><em class="calculo calculo__imcMuyAlto imcMuyAlto">IMC > 30.0</em>, está dentro de los valores de “obesidad”.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                `);

    const   contenidoPGC = $("#contenidoPGC");
            contenidoPGC.append(`
                            <!-- PGC -->
                            <div id="pgc" class="carousel-item active pgc">
                                <div class="row justify-content-center">
                                    <div class="col-xs-12 ol-sm-12 col-md-6 col-lg-6 col-xl-4 leftContent">
                                        <img src="https://i.postimg.cc/tR1VwkwS/running-man.png" class="d-block w-100 imgPGC pgc pgc__img" title="running man" alt="Hombre ejercitandose, corriendo">
                                    </div>
                                    <div class="col-xs-12 ol-sm-12 col-md-6 col-lg-6 col-xl-4 formularioIMC form form_tablePGC centerContent">
                                        <h3 class="title">Calcula tu PGC</h3>
                                        <form action="#">
                                            <fieldset>
                                                <table>
                                                    <tr>
                                                        <td class="d-none d-sm-block d-md-block d-lg-block d-xl-block labelPGC">
                                                            <label for="nombre2">Nombre</label>
                                                        </td>
                                                        <td>
                                                            <input type="text" id="nombrePGC" placeholder="Nombre">
                                                        </td>
                                                    </tr> 
                                                    <tr>
                                                        <td class="d-none d-sm-block d-md-block d-lg-block d-xl-block labelPGC">
                                                            <label for="edad2">Edad</label>
                                                        </td>
                                                        <td>
                                                            <input type="number" id="edadPGC" placeholder="Edad">
                                                        </td>
                                                    </tr> 
                                                    <tr>
                                                        <td class="d-none d-sm-block d-md-block d-lg-block d-xl-block labelPGC">
                                                            <label for="sexo">Sexo:</label>
                                                        </td>
                                                        <td id="sexo" >
                                                            M <input id="masculino" class="masculino" type="radio" value="masculino" name="sexo" title="Macsulino" checked> | <input type="radio" id="femenino" class="femenino" value="femenino" name="sexo" title="Femenino">  F
                                                        </td>
                                                    </tr> 
                                                    <tr>
                                                        <td class="d-none d-sm-block d-md-block d-lg-block d-xl-block labelPGC">
                                                            <label for="estatura">Estatura</label>
                                                        </td>
                                                        <td>
                                                            <input  type="number" placeholder="Estatura" id="estaturaPGC" title="Estatura en cms">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="d-none d-sm-block d-md-block d-lg-block d-xl-block labelPGC">
                                                            <label for="cuello">Circunferencia de cuello </label>
                                                        </td>
                                                        <td>
                                                            <input id="cuello" placeholder="Medidas del cuello" type="number" title="Cirfunferencia del cuello en cms">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="d-none d-sm-block d-md-block d-lg-block d-xl-block labelPGC">
                                                            <label for="cintura">Circunferencia de cintura</label>
                                                        </td>
                                                        <td>
                                                            <input id="cintura" type="number" placeholder="Medidas de la cintura" title="Cirfunferencia de la cintura en cms">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="d-none d-sm-block d-md-block d-lg-block d-xl-block labelPGC">
                                                            <label for="cadera">Circunferencia de cadera </label>
                                                        </td>
                                                        <td>
                                                            <input id="cadera" type="number" placeholder="No requerido" title="Cirfunferencia de la cadera en cms" id="cadera" disabled>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan=2>
                                                            <small>*medidas solicitadas en centímetros*</small>
                                                        </td>
                                                    </tr>
                                                    <tr>  
                                                        <td  colspan=2 class="selector enviar">
                                                            <input type="reset" name="Limpiar Campos" class="btn btn-outline-light" value="Limpiar Campos">
                                                            
                                                            <input id="btnGuardar2" class="btn btn-outline-light btn-xs" value="Calcular"  type="submit" data-target="#modal" data-toggle="modal">
                                                        </td>
                                                    </tr>
                                                </table>
                                            </fieldset>
                                        </form>
                                    </div>
                                    <div class="col-xs-12 ol-sm-12 col-md-12 col-lg-12 col-xl-4 pgcContent pgc__content rightContent">
                                        <h3>y... ¿Qué es el Porcentaje de Grasa Corporal?</h3>
                                        <p class="parrafo">Por su parte, el Porcentaje de Grasa Corporal (<b>PGC ó BFP por sus siglas en inglés: Body Fat Percentage</b>) de un ser humano u otro ser vivo es la masa total de grasa dividida por la masa corporal total, multiplicada por 100; la grasa corporal incluye grasa corporal esencial y grasa corporal de almacenamiento.</p>
                                        <p class="parrafo">Existen diversos métodos de cálculo del PGC, pero uno de los más exactos es el usado por las fuerzas armadas de Estados Unidos, los Navy Force. Para hacer el cálculo del PGC <b>se necesitan los siguientes datos: Estatura, peso, circunferencia del cuello, cintura y caderas (éste último sólo necesario para para el cálculo en mujeres.)</b></p>
                                    </div>
                                </div>
                            </div>
                            `);                         
                            
    /*MODAL Form*/
    const   modalIMC = $('#modalForm');
            modalIMC.append(`
                            <div class="modal" id="modal" aria-hidden="true">
                            <div class="modal-dialog modal-md modal-dialog-centered">
                                <div class="modal-content" id="contenido">
                                        <div class="modal-header btn-modal" id="cerrarModal">
                                            <button class="btn btn-danger cerrarModal" data-dismiss="modal" justify-content-end>X</button>
                                        </div>
                                        <div class="modal-body">
                                            <div id="resultado">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `);


    /* PROBANDO */
    $(".leftContent").show(1000);
    $(".centerContent").show(2000);
    $(".rightContent").show(3000);

    /* RESULTADO DEL IMC y/o PGC */
    let h2_IMC = $('#resultado');
    $("#btnGuardar").on("click", function(e){
        e.preventDefault();
        $("#modal").fadeIn(1500);
    });
    $("#modal").modal({
        backdrop: 'static',
        show: false,
    });

    $("#cerrarModal").click(function(e) {
        e.preventDefault();
        location.reload();
        
    });

    /* PRUEBA */    

    /*FUNCION PARA CALCULAR IMC*/
    $("#btnGuardar").on("click", function(e) {
        e.preventDefault();
        const   camposForm = {nombre: "", edad: 0, estatura: 0, peso: 0, IMC: 0};
            
            camposForm.nombre = $("#nombreIMC").val();
            camposForm.edad = $("#edadIMC").val();
            camposForm.estatura = $("#estaturaIMC").val();
            camposForm.peso = $("#pesoIMC").val();
        

        let formulaIMC = ((parseFloat($('#edadIMC').val()*0))+parseFloat($("#pesoIMC").val())/parseFloat((($("#estaturaIMC").val())*0.01)**2)).toFixed(2);
    
            camposForm.IMC = formulaIMC;
            
            typeof camposForm.edad === 'number';
            typeof camposForm.peso === 'number';
            typeof camposForm.estatura === 'number';
            typeof camposForm.IMC === 'number';

/*------MUESTRA DE RESULTADOS EN HTML------*/
        
    

        const saludo = ('<p class="texto1" style="display: none;">Bienvenido a la calculadora interactiva de tu Indice de Masa Corporal.</p>');
        
        if(camposForm.IMC == 'NaN'){
            alert(`¡ERROR!  Debes ingresar valores numéricos en los campos de Edad, Peso y Estatura para obtener tu IMC.`);
            $("#modal").modal(()=>{
                $("#container").hidden("true");
            })
        }else{
            
            if(formulaIMC < 18.5){
                $("#cerrarModal").prepend(saludo);
                h2_IMC.append('<p class="texto" style="display: none;">Hola <b class="imcBajo">'+$("#nombreIMC").val().toUpperCase()+'</b>! Tu <b>IMC</b> es: <b class="imcBajo">'+formulaIMC+'</b>. Estás por debajo de tu peso ideal.</p>');
                
                    $.ajax({
                        url : '../js/json/recomendaciones.json',
                        type : 'GET',
                        dataType : 'json',
                        success : function(json) {
                            h2_IMC.append('<p class="alimentacion" style="display: none;">Nuestras recomendaciones para tí, <b class="imcBajo">'+$('#nombreIMC').val().toUpperCase()+'</b>:</p>');
                           h2_IMC.append('<b class="alimentacion" style="display: none;">Alimentacion:</b>');
                            $('<p class="alimentacion" style="display: none;"/>').text(json.alimentacionIMCBajo).appendTo('#resultado').html(json.html).appendTo('#resultado');
                            h2_IMC.append('<b class="alimentacion" style="display: none;">Ejercicios:</b>');
                            $('<p class="alimentacion" style="display: none;"/>').text(json.ejerciciosIMCBajo).appendTo('#resultado').html(json.html).appendTo('#resultado');
                            $(".alimentacion").show(2500);
                        },
                        error : function(xhr, status) {
                            alert('Disculpe, existió un problema');
                        }
                        
                    });
                
            }else if(formulaIMC >= 18.5 && formulaIMC <= 25){
                $("#cerrarModal").prepend(saludo);
                h2_IMC.append('<p class="texto" style="display: none;">Hola <b class="imcNormal">'+$("#nombreIMC").val().toUpperCase()+'</b>! Tu <b>IMC</b> es: <b class="imcNormal">'+formulaIMC+'</b>. Te encuentras en el peso ideal de acuerdo a tus medidas.</p>');
                $.ajax({
                    url : '../js/json/recomendaciones.json',
                    type : 'GET',
                    dataType : 'json',
                    success : function(json) {
                        h2_IMC.append('<p class="alimentacion" style="display: none;">Nuestras recomendaciones para tí, <b class="imcNormal">'+$('#nombreIMC').val().toUpperCase()+'</b>:</p>');
                       h2_IMC.append('<b class="alimentacion" style="display: none;">Alimentacion:</b>');
                        $('<p class="alimentacion" style="display: none;"/>').text(json.alimentacionIMCIdeal).appendTo('#resultado').html(json.html).appendTo('#resultado');
                        h2_IMC.append('<b class="alimentacion" style="display: none;">Ejercicios:</b>');
                        $('<p class="alimentacion" style="display: none;"/>').text(json.ejerciciosIMCIdeal).appendTo('#resultado').html(json.html).appendTo('#resultado');
                        $(".alimentacion").show(2500);
                    },
                    error : function(xhr, status) {
                        alert('Disculpe, existió un problema');
                    }
                    
                });
            }else if(formulaIMC > 25 && formulaIMC <= 30){
                $("#cerrarModal").prepend(saludo);
                h2_IMC.append('<p class="texto" style="display: none;">Hola <b class="imcAlto">'+$("#nombreIMC").val().toUpperCase()+'</b>! Tu <b>IMC</b> es: <b class="imcAlto">'+formulaIMC+'</b>. Cuidado. Estás por encima de tu peso ideal. </p>');
                $.ajax({
                    url : '../js/json/recomendaciones.json',
                    type : 'GET',
                    dataType : 'json',
                    success : function(json) {
                        h2_IMC.append('<p class="alimentacion" style="display: none;">Nuestras recomendaciones para tí, <b class="imcAlto">'+$('#nombreIMC').val().toUpperCase()+'</b>:</p>');
                       h2_IMC.append('<b class="alimentacion" style="display: none;">Alimentacion:</b>');
                        $('<p class="alimentacion" style="display: none;"/>').text(json.alimentacionIMCAlto).appendTo('#resultado').html(json.html).appendTo('#resultado');
                        h2_IMC.append('<b class="alimentacion" style="display: none;">Ejercicios:</b>');
                        $('<p class="alimentacion" style="display: none;"/>').text(json.ejerciciosIMCAlto).appendTo('#resultado').html(json.html).appendTo('#resultado');
                        $(".alimentacion").show(2500);
                    },
                        error : function(xhr, status) {
                            alert('Disculpe, existió un problema');
                        }
                
                });
            }else if(formulaIMC > 30){
                $("#cerrarModal").prepend(saludo);
                h2_IMC.append('<p class="texto" style="display: none;">Hola <b class="imcMuyAlto">'+$("#nombreIMC").val().toUpperCase()+'</b>! Tu <b>IMC</b> es: <b class="imcMuyAlto">'+formulaIMC+'</b>. Estás en estado de Obesidad. Debes consultar a tu médico cuanto antes. </p>');
                $.ajax({
                    url : '../js/json/recomendaciones.json',
                    type : 'GET',
                    dataType : 'json',
                    success : function(json) {
                        h2_IMC.append('<p class="alimentacion" style="display: none;">Nuestras recomendaciones para tí, <b class="imcMuyAlto">'+$('#nombreIMC').val().toUpperCase()+'</b>:</p>');
                       h2_IMC.append('<b class="alimentacion" style="display: none;">Alimentacion:</b>');
                        $('<p class="alimentacion" style="display: none;"/>').text(json.alimentacionIMCAlto).appendTo('#resultado').html(json.html).appendTo('#resultado');
                        h2_IMC.append('<b class="alimentacion" style="display: none;">Ejercicios:</b>');
                        $('<p class="alimentacion" style="display: none;"/>').text(json.ejerciciosIMCAlto).appendTo('#resultado').html(json.html).appendTo('#resultado');
                        $(".alimentacion").show(2500);
                    },
                        error : function(xhr, status) {
                            alert('Disculpe, existió un problema');
                        }
                    });
            }

            $(".texto1").show(500);
            $(".texto").show(500);

        }   
        /*------MUESTRA DE ARREGLO EN CONSOLA------*/        
        
        if(camposForm.IMC == 'NaN'){
            console.log("Error al ingresar los datos. Vuelva a intentarlo.");
        }else{
        const arreglo = [{Nombre: $("#nombreIMC").val(), Edad: $("#edadIMC").val(), Peso: $("#pesoIMC").val(), Estatura: $("#estaturaIMC").val(), IMC: formulaIMC}];
        console.table(arreglo);
        }
    });



    /* FUNCION PARA CALCULAR PGC */


    
    

    /*FUNCION DE BOTONES RADIO DEL PGC*/                
    const sexoM =   $("#masculino").click(()=> {
                    $("#cadera").attr("disabled", true);
                    $("#cadera").attr("placeholder", "No requerido.");
                    })

    const sexoF =   $("#femenino").click(()=> {
                    $("#cadera").attr("disabled", false);
                    $("#cadera").attr("placeholder", "Medidas de la cadera");
        
                    });
        
    $("#btnGuardar2").on("click", function(e) {
        e.preventDefault();
        const   camposForm2 = {nombre: "", edad: 0, sexo: "", estatura: 0, cuello: 0, cintura: 0, cadera: 0, PGC: 0};
            
            camposForm2.nombre = $("#nombrePGC").val();
            camposForm2.edad = $("#edadPGC").val();
            camposForm2.sexo = $('input[name="sexo"]:checked').val();
            camposForm2.estatura = $("#estaturaPGC").val();
            camposForm2.cuello = $("#cuello").val();
            camposForm2.cintura = $("#cintura").val();
            camposForm2.cadera = $("#cadera").val();

        

        
        if(camposForm2.sexo == 'masculino'){
            let formularPGCHombre= (495 / ( 1.0324 - 0.19077 * parseFloat(Math.log10( (parseFloat($('#cintura').val())) - (parseFloat($('#cuello').val())) )) + 0.15456 * parseFloat(Math.log10( (parseFloat($('#estaturaPGC').val())) )) ) - 450).toFixed(2);

            camposForm2.PGC = formularPGCHombre;
            typeof camposForm2.sexo === 'number';
            typeof camposForm2.edad === 'number';
            typeof camposForm2.estatura === 'number';
            typeof camposForm2.cuello === 'number';
            typeof camposForm2.cintura === 'number';
            typeof camposForm2.cadera === 'number';
            typeof camposForm2.PGC === 'number';
        
            if(formularPGCHombre == 'NaN'){
                alert(`¡ERROR!  Debes ingresar valores numéricos en los campos requeridos para obtener su PGC.`);
                $("#modal").modal(()=>{
                    $("#container").hidden("true");
                })                
            }else{
                    h2_IMC.append('<div id="resultadoPGCH"><p class="texto" style="display: none;">Hola <b>'+$("#nombrePGC").val().toUpperCase()+'</b>! Tu <b>PGC</b> es: <b>'+formularPGCHombre+'%</b>.</p><p class="status" style="display: none;">Éste es tu status de acuerdo a tu PGC:<p></p><img class="alimentacion" style="display: none;" src="https://i.postimg.cc/4xQR5Khr/pgchombres.png" alt="" width="100%;"></div>');
                    $(".alimentacion").fadeIn(2500);
                    $(".texto1").show(500);
                    $(".texto").show(500);
                    $(".status").fadeIn(1500);
            }
          
            /*------MUESTRA DE ARREGLO EN CONSOLA------*/        
        
            if(camposForm2.PGC == 'NaN'){
                console.log("Error al ingresar los datos. Vuelva a intentarlo.");
            }else{
                const arreglo = [{Nombre: $("#nombrePGC").val(), Edad: $("#edadPGC").val(), Sexo: $('input[name="sexo"]:checked').val(), Estatura: $("#estaturaPGC").val(), Cuello: $("#cuello").val(), Cintura: $("#cintura").val(), Cadera: $("#cadera").val(), PGC: formularPGCHombre}];
                console.table(arreglo);
            }

/**FORMULA PGC MUJERES **/
        }else if(camposForm2.sexo == 'femenino'){
            let formularPGCMujer =  (495 / ( 1.29579 - 0.35004 * parseFloat(Math.log10( (parseFloat($('#cintura').val())) + (parseFloat($('#cadera').val())) - (parseFloat($('#cuello').val())) )) + 0.22100 * parseFloat(Math.log10( (parseFloat($('#estaturaPGC').val())) )) ) - 450).toFixed(2);
            
            camposForm2.PGC = formularPGCMujer;

            typeof camposForm2.edad === 'number';
            typeof camposForm2.sexo === 'number';
            typeof camposForm2.estatura === 'number';
            typeof camposForm2.cuello === 'number';
            typeof camposForm2.cintura === 'number';
            typeof camposForm2.cadera === 'number';
            typeof camposForm2.PGC === 'number';
        
            if(formularPGCMujer == 'NaN'){
                alert(`¡ERROR!  Debes ingresar valores numéricos en los campos requeridos para obtener su PGC.`);
                $("#modal").modal(()=>{
                    $("#container").hidden("true");
                })
            }else{
                    h2_IMC.append('<div id="resultadoPGCM"><p class="texto" style="display: none;">Hola <b>'+$("#nombrePGC").val().toUpperCase()+'</b>! Tu <b>PGC</b> es: <b>'+formularPGCMujer+'%</b>.</p><p class="status" style="display: none;">Éste es tu status de acuerdo a tu PGC:<p></p><img class="alimentacion" style="display: none;" src="https://i.postimg.cc/W44WRthF/pgcmujeres.jpg" alt="" width="100%;"></div>');
                    $(".alimentacion").fadeIn(2500);
                    $(".texto1").show(500);
                    $(".texto").show(500);
                    $(".status").fadeIn(1500);
            }
          
            /*------MUESTRA DE ARREGLO EN CONSOLA------*/        
        
            if(camposForm2.PGC == 'NaN'){
                console.log("Error al ingresar los datos. Vuelva a intentarlo.");
            }else{
                const arreglo = [{Nombre: $("#nombrePGC").val(), Edad: $("#edadPGC").val(), Sexo: $('input[name="sexo"]:checked').val(), Estatura: $("#estaturaPGC").val(), Cuello: $("#cuello").val(), Cintura: $("#cintura").val(), Cadera: $("#cadera").val(), PGC: formularPGCMujer}];
                console.table(arreglo);
            };
        };
    })
});
