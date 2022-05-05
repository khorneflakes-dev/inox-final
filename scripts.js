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
        document.getElementById('navbar').style.top = '0vh'
        document.getElementById('socials').style.transform = 'translateY(15vh)'


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
        document.getElementById('socials').style.transform = 'translateY(0vh)'

    }

    ubicacionPrincipal = Desplazamiento_Actual;

}
let cantidad_1 = 0
let cantidad_2 = 0
let cantidad_3 = 0

const contadores = {
    cantidad1: 8000,
    tiempo1: 37.5,
    cantidad2: 250,
    tiempo2: 120,
    cantidad3: 400,
    tiempo3: 75,
}

const tiempo1 = setInterval(() => {

    if (window.pageYOffset >= screen.height * 2) {
        cantidad_1 += 100
        numero1.textContent = cantidad_1
        if (cantidad_1 >= contadores.cantidad1) {
            clearInterval(tiempo1)
        }

    }
}, contadores.tiempo1);

const tiempo2 = setInterval(() => {

    if (window.pageYOffset >= screen.height * 2) {
        cantidad_2 += 10
        numero2.textContent = cantidad_2 
        if (cantidad_2 >= contadores.cantidad2) {
            clearInterval(tiempo2)
        }

    }
}, contadores.tiempo2);

const tiempo3 = setInterval(() => {

    if (window.pageYOffset >= screen.height * 2) {
        cantidad_3 += 10
        numero3.textContent = cantidad_3
        if (cantidad_3 >= contadores.cantidad3) {
            clearInterval(tiempo3)
        }

    }
}, contadores.tiempo3);

// esta parte mide el tiempo en milisegundos
// falta configurar la parte de screen.height para hacer la funcion responsive

// slider 
let posicionInicial = 0

// translateX(-cantidad vw)

function arrow1 () {
    if (posicionInicial == 0) {
        posicionInicial += 0
    }
    else {
        posicionInicial += 16.72
    }
    document.getElementById('sectores').style.transform = "translateX(" +posicionInicial + "vw)"
}

function arrow2 () {
    if (posicionInicial == -83.6) {
        posicionInicial += 0
    }
    else {
        posicionInicial -= 16.72
    }
    document.getElementById('sectores').style.transform = "translateX(" +posicionInicial + "vw)"
}

// let i = 0


// const demofunction = setInterval(() => {

//     i ++
    
// }, 100);

// const demofunction2 = setInterval(() => {
//     i += 0
// })