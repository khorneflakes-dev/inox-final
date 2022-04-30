let ubicacionPrincipal = window.pageYOffset;
let factor = 0.5
window.onscroll = function () {
    let Desplazamiento_Actual = window.pageYOffset;
    if (window.pageYOffset >= 0 && window.pageYOffset <screen.height*factor) {
        document.getElementById('navbar').style.backgroundColor = 'transparent'
        document.getElementById('options1').style.color = 'white'
        document.getElementById('options2').style.color = 'white'
        document.getElementById('options3').style.color = 'white'
        document.getElementById('options4').style.color = 'white'
        document.getElementById('logo').style.opacity = '100%'

    }

    else if (ubicacionPrincipal >= Desplazamiento_Actual){
        document.getElementById('navbar').style.top = '0'
    }
    else if (window.pageYOffset >= screen.height*factor) {
        document.getElementById('navbar').style.backgroundColor = 'white'
        document.getElementById('navbar').style.top = '-11vh'
        document.getElementById('options1').style.color = '#081E36'
        document.getElementById('options2').style.color = '#081E36'
        document.getElementById('options3').style.color = '#081E36'
        document.getElementById('options4').style.color = '#081E36'
        document.getElementById('logo').style.opacity = '50%'
    }
    // if(ubicacionPrincipal >= Desplazamiento_Actual) {
    //     document.getElementById('navbar').style.top = '0';

    // }

    // else if (window.pageYOffset > screen.height){
    //     document.getElementById('navbar').style.backgroundColor = 'blue'
    // }
    // else if (window.pageYOffset >=  0 && window.pageYOffset <= screen.height){
    //     document.getElementById('navbar').style.backgroundColor = 'transparent'
    // }
    // else {
    //     document.getElementById('navbar').style.top = '-11vh';
    // }
    ubicacionPrincipal = Desplazamiento_Actual;
}