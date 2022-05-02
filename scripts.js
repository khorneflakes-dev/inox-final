let ubicacionPrincipal = window.pageYOffset;
let factor = 0.5
window.onscroll = function () {
    let Desplazamiento_Actual = window.pageYOffset;
    if (window.pageYOffset >= 0 && window.pageYOffset < screen.height * factor) {
        document.getElementById('navbar').style.backgroundColor = 'transparent'
        document.getElementById('options1').style.color = 'white'
        document.getElementById('options2').style.color = 'white'
        document.getElementById('options3').style.color = 'white'
        document.getElementById('options4').style.color = 'white'
        document.getElementById('logo').style.opacity = '100%'

    }

    else if (ubicacionPrincipal >= Desplazamiento_Actual) {
        document.getElementById('navbar').style.top = '0'
    }
    else if (window.pageYOffset >= screen.height * factor) {
        document.getElementById('navbar').style.backgroundColor = 'white'
        document.getElementById('navbar').style.top = '-11vh'
        document.getElementById('options1').style.color = '#081E36'
        document.getElementById('options2').style.color = '#081E36'
        document.getElementById('options3').style.color = '#081E36'
        document.getElementById('options4').style.color = '#081E36'
        document.getElementById('logo').style.opacity = '100%'
    }

    ubicacionPrincipal = Desplazamiento_Actual;

}
let cantidad = 0

const contadores = {
    cantidad1: 1200,
    tiempo1: 300,
    cantidad2: 600,
    tiempo2: 400,
}
const demo = ( demo2 ) => {
    return demo2+2;
}

const tiempo = setInterval(() => {

    if (window.pageYOffset >= 2800) {
        cantidad += 1
        numero1.textContent = cantidad
        if (cantidad === 300) {
            clearInterval(tiempo)
        }

    }
}, 4);

console.log(contadores.tiempo1)
console.log(demo(1500))
// esta parte mide el tiempo en milisegundos
// falta configurar la parte de screen.height para hacer la funcion responsive