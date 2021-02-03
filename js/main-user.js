$(window).on('load', function () {
    checkValidation('div-us-reservation-availability');
});

let validation = false;

function checkValidation(idName) {
    $.ajax({
        type: 'POST',
        url: 'php/init-session.php',
    }).done(function (response) {
        if (response == 0) {
            $("#div-us-register").fadeIn('slow');
            $("#accept-terms").modal('show');
        } else if (response == 1) {
            $(`#${idName}`).fadeIn('slow');
            validation = true;
        } else {
            window.location.replace('php/logout.php');
        }
    }).fail(function () {
        window.location.replace('php/logout.php');
    });
}

$(document).ready(function () {

    showContent('btn-us-reservation-availability', 'div-us-reservation-availability');

    showContent('btn-us-reservation-doctor', 'div-us-reservation-doctor');

    showContent('btn-us-my-reservations', 'div-us-my-reservations');

    function showContent(btnName, idName) {
        $(`#${btnName}`).click(function () {
            $(".main-container-div").hide();
            validation ? $(`#${idName}`).fadeIn('slow') : checkValidation(idName);
        });
    }

    $('#btn-us-user').click(function () {
        if (validation) {
            $.ajax({
                type: 'POST',
                url: 'php/read-perfil.php',
            }).done(function (response) {
                $(".main-container-div").hide();
                let json = JSON.parse(response);
                for (let i = 0; i <= 8; i++) {
                    $(`#user-input${i}`).val(json[i]);
                }
                $("#div-us-user").fadeIn("slow");
            }).fail(function (response) {
                alert("No es posible acceder a los datos, intente nuevamente");
            });
        } else {
            checkValidation('div-us-user');
        }
    });












    $("#btn-modal-cancel").click(function () {
        window.location.replace('php/logout.php');
    });

});