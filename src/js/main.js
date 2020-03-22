import {returnFicha} from '../server.js';

//Expanding and retracting image effect

    // #ONE
    $('#one').mouseover(function(){

        $(this).css({
            'grid-column':'1/4'
        })
        $('#two').css({
            'grid-column':'4/5'
        })
    }).mouseleave(function(){

        $(this).css({
            'grid-column':'1/3'
        })
        $('#two').css({
            'grid-column':'3/5'
        })
    })
    // #ONE
    $('#two').mouseover(function(){

        $(this).css({
            'grid-column':'2/5'
        })
        $('#one').css({
            'grid-column':'1/2'
        })
    }).mouseleave(function(){

        $(this).css({
            'grid-column':'3/5'
        })
        $('#one').css({
            'grid-column':'1/3'
        })
    })

    //setando nome da ficha carregada

    const ficha = returnFicha()

    const p = $('#server-answer')

    p.innerHTML(ficha.char_name)