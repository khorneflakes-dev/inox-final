let ubicacionPrincipal = window.pageYOffset;
let factor = 0.5
window.onscroll = function () {
    let Desplazamiento_Actual = window.pageYOffset;
    if (window.pageYOffset >= 0 && window.pageYOffset < screen.height * factor) {
        // document.getElementById('navbar').style.backgroundColor = 'blue'
        // document.getElementById('options1').style.color = 'white'
        // document.getElementById('options2').style.color = 'white'
        // document.getElementById('options3').style.color = 'white'
        // document.getElementById('options4').style.color = 'white'
        document.getElementById('logo').style.opacity = '100%'

    }

    else if (ubicacionPrincipal >= Desplazamiento_Actual) {
        document.getElementById('navbar').style.top = '0'
    }
    else if (window.pageYOffset >= screen.height * factor) {
        // document.getElementById('navbar').style.backgroundColor = 'white'
        document.getElementById('navbar').style.top = '-11vh'
        document.getElementById('options1').style.color = '#081E36'
        document.getElementById('options2').style.color = '#081E36'
        document.getElementById('options3').style.color = '#081E36'
        document.getElementById('options4').style.color = '#081E36'
        document.getElementById('logo').style.opacity = '100%'
    }

    ubicacionPrincipal = Desplazamiento_Actual;

}
let cantidad_1 = 0
let cantidad_2 = 0
let cantidad_3 = 0

const contadores = {
    cantidad1: 8000,
    tiempo1: 0.375,
    cantidad2: 250,
    tiempo2: 12,
    cantidad3: 400,
    tiempo3: 7.5,
}

const tiempo1 = setInterval(() => {

    if (window.pageYOffset >= 2800) {
        cantidad_1 += 10
        numero1.textContent = '+' + cantidad_1 + ' Productos'
        if (cantidad_1 >= contadores.cantidad1) {
            clearInterval(tiempo1)
        }

    }
}, contadores.tiempo1);

const tiempo2 = setInterval(() => {

    if (window.pageYOffset >= 2800) {
        cantidad_2 += 1
        numero2.textContent = '+' + cantidad_2 + ' Empresas beneficiadas'
        if (cantidad_2 >= contadores.cantidad2) {
            clearInterval(tiempo2)
        }

    }
}, contadores.tiempo2);

const tiempo3 = setInterval(() => {

    if (window.pageYOffset >= 2800) {
        cantidad_3 += 1
        numero3.textContent = '+' + cantidad_3 + ' Soluciones'
        if (cantidad_3 >= contadores.cantidad3) {
            clearInterval(tiempo3)
        }

    }
}, contadores.tiempo3);



console.log(contadores.tiempo1)
console.log(demo(1500))
// esta parte mide el tiempo en milisegundos
// falta configurar la parte de screen.height para hacer la funcion responsive