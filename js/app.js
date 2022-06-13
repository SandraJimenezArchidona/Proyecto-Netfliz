
$ (window).scroll(function(){

    let pixel = $(window).scrollTop()
    
    if( pixel >= 1 ){

        $('.header').addClass('activo')
    }else{
        $('.header').removeClass('activo')
    }
})

function creaSlider( nombreClase ){
    
    let indice = 0 
    
    $(nombreClase+'__flecha.izq').click(function(){
        indice = indice - 1
        if( indice <= -1 ){
            indice = 2
        }
        let operacion = -(100/3) * indice 
        $(nombreClase+'__container').css('transform','translateX('+ operacion +'%)')
    
        $(nombreClase+'__punto').removeClass('activo')
        $(nombreClase+'__item').addClass('activo')
        $(nombreClase+'__punto').eq( indice ).addClass('activo')
        $(nombreClase+'__item').eq( indice ).addClass('activo')
    })
    
    $(nombreClase+'__flecha.der').click(function(){
        indice = indice + 1
        if( indice >= 3 ){
            indice = 0
        }
        let operacion = -(100/3) * indice 
        $(nombreClase+'__container').css('transform','translateX('+ operacion +'%)')
    
        $(nombreClase+'__punto').removeClass('activo')
        $(nombreClase+'__item').addClass('activo')
        $(nombreClase+'__punto').eq( indice ).addClass('activo')
        $(nombreClase+'__item').eq( indice ).addClass('activo') 
    })
    
    $(nombreClase).mouseover(function(){
        $(nombreClase+'__puntos').addClass('activo')
        $(nombreClase+'__flecha').addClass('activo')
    })
    
    $(nombreClase+'').mouseout(function(){
        $(nombreClase+'__puntos').removeClass('activo')
        $(nombreClase+'__flecha').removeClass('activo')
    })

}

creaSlider( '.tiburones' );
creaSlider( '.engendros' );


// $('.izquierda').click(function(){
//     indice = indice - 1
//     if( indice <= -1 ){
//         indice = 2
//     }
//     let operacion = -(100/3) * indice 
//     $('.engendros__container').css('transform','translateX('+ operacion +'%)')

//     $('.engendros__punto').removeClass('activo')
//     $('.engendros__item').addClass('activo')
//     $('.engendros__punto').eq( indice ).addClass('activo')
//     $('.engendros__item').eq( indice ).addClass('activo')
// })

// $('.derecha').click(function(){
//     indice = indice + 1
//     if( indice >= 3 ){
//         indice = 0
//     }
//     let operacion = -(100/3) * indice 
//     $('.engendros__container').css('transform','translateX('+ operacion +'%)')

//     $('.engendros__punto').removeClass('activo')
//     $('.engendros__item').addClass('activo')
//     $('.engendros__punto').eq( indice ).addClass('activo')
//     $('.engendros__item').eq( indice ).addClass('activo') 
// })

// $('.engendros').mouseover(function(){
//     $('.engendros__puntos').addClass('activo')
//     $('.engendros__flecha').addClass('activo')
// })

// $('.engendros').mouseout(function(){
//     $('.engendros__puntos').removeClass('activo')
//     $('.engendros__flecha').removeClass('activo')
// })


$('.le').click(function(){
    indice = indice - 1
    if( indice <= -1 ){
        indice = 2
    }
    let operacion = -(100/3) * indice 
    $('.monstruos__container').css('transform','translateX('+ operacion +'%)')

    $('.monstruos__punto').removeClass('activo')
    $('.monstruos__item').addClass('activo')
    $('.monstruos__punto').eq( indice ).addClass('activo')
    $('.monstruos__item').eq( indice ).addClass('activo')
})

$('.ri').click(function(){
    indice = indice + 1
    if( indice >= 3 ){
        indice = 0
    }
    let operacion = -(100/3) * indice 
    $('monstruos__container').css('transform','translateX('+ operacion +'%)')

    $('.monstruos__punto').removeClass('activo')
    $('.monstruos__item').addClass('activo')
    $('.monstruos__punto').eq( indice ).addClass('activo')
    $('.monstruos__item').eq( indice ).addClass('activo') 
})

$('.monstruos').mouseover(function(){
    $('.monstruos__puntos').addClass('activo')
    $('.monstruos__flecha').addClass('activo')
})

$('.monstruos').mouseout(function(){
    $('.monstruos__puntos').removeClass('activo')
    $('.monstruos__flecha').removeClass('activo')
})

$('.left').click(function(){
    indice = indice - 1
    if( indice <= -1 ){
        indice = 2
    }
    let operacion = -(100/3) * indice 
    $('.humor__container').css('transform','translateX('+ operacion +'%)')

    $('.humor__punto').removeClass('activo')
    $('.humor__item').addClass('activo')
    $('.humor__punto').eq( indice ).addClass('activo')
    $('.humor__item').eq( indice ).addClass('activo')
})

$('.rigth').click(function(){
    indice = indice + 1
    if( indice >= 3 ){
        indice = 0
    }
    let operacion = -(100/3) * indice 
    $('humor__container').css('transform','translateX('+ operacion +'%)')

    $('.humor__punto').removeClass('activo')
    $('.humor__item').addClass('activo')
    $('.humor__punto').eq( indice ).addClass('activo')
    $('.humor__item').eq( indice ).addClass('activo') 
})

$('.humor').mouseover(function(){
    $('.humor__puntos').addClass('activo')
    $('.humor__flecha').addClass('activo')
})

$('.humor').mouseout(function(){
    $('.humor__puntos').removeClass('activo')
    $('.humor__flecha').removeClass('activo')
})

