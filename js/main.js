$(document).ready(() => {

    const $header = $('#header_id');
    const $primaryButton = $('.btn-primary');

    $primaryButton.on('click', function() {
        $header.slideToggle('slow');
        window.alert($header.val());
    });

    
    const $one = $('#one');
    const $two = $('two');
    const $add = $('#add');

    $one.on('click', () => {
        $(event.currentTarget).addClass('button-border');
    }).on('mouseleave', () => {
        $(event.currentTarget).removeClass('button-border');
    })

    

});