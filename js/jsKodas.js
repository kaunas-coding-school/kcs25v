$(function(){

    $("input").hide();
    $(".element").hide();

    let paragrafai = document.getElementsByTagName('input');
    for (let i  = 0; i < paragrafai.length; ++i){
        let paragrafas = paragrafai[i];
        paragrafas.style.display = 'none';
    }

    let uuid1 = $("#uuid");
    uuid1.hide();

    let uuid2 = document.getElementById('uuid2');
    uuid2.style.display = 'none';

    $(".element").click(function () {
        $(this).hide();
    })

    $('.wrapper div:last-child').click(function () {
        $('.element').show();
    })

    let lempute = $('#lempute');
    let lemputesBusena = false;
    lempute.click(function () {
        if (lemputesBusena) {
            lempute.attr('src', '../img/off.png');
        } else {
            lempute.attr('src', '../img/on.png');
        }
        lemputesBusena = !lemputesBusena;
    });

    let lempute2 = $('.lempute2');
    lempute2.click(function () {
        $(this).toggleClass('lemputeOn');
    })
});