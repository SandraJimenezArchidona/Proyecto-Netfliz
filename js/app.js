
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
creaSlider( '.monstruos' );
creaSlider( '.humor' );

