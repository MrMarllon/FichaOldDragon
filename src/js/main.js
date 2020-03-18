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