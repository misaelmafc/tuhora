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

    //showContent('btn-us-my-reservations', 'div-us-my-reservations');

    function showContent(btnName, idName) {
        $(`#${btnName}`).click(function () {
            $(".main-container-div").hide();
            validation ? $(`#${idName}`).fadeIn('slow') : checkValidation(idName);
        });
    }

    $('#btn-us-my-reservations').click(function () {
        let divMyReservations = $('#div-us-my-reservations');
        $(".main-container-div").hide();
        $(divMyReservations).fadeIn('slow');

        if (validation) {
            $.ajax({
                type: 'POST',
                dataType: 'json',
                url: 'php/download-file.php',
            }).done(function (response) {
                console.log(response)
                $('#div-reservation').empty();
                response.forEach(e => {
                    let i = response.indexOf(e) + 1;
                    $('#div-reservation').append(
                        `<div class="row">
                        <div class="col-4">
                            <p>${e.fecha_disponible} ${e.horario_disponible}</p>
                        </div>
                        <div class="col-4">
                            <p>${e.centro_salud}</p>
                        </div>
                        <div class="col-4" style="text-align: center;">                     
                            <a href="#" id="btn-download-${i}"><img style="width: 2em;" src="assets/file.png" alt=""></a>
                        </div>
                    </div>`
                    );
                    $(`#btn-download-${i}`).click(function () {
                        openFile('php/file.php', e, true);
                    });

                    function openFile(purl, pparameters, in_new_tab) {
                        pparameters = (typeof pparameters == 'undefined') ? {} : pparameters;
                        in_new_tab = (typeof in_new_tab == 'undefined') ? true : in_new_tab;

                        var form = document.createElement("form");
                        $(form).attr("id", "reg-form").attr("name", "reg-form").attr("action", purl).attr("method", "post").attr("enctype", "multipart/form-data");
                        if (in_new_tab) {
                            $(form).attr("target", "_blank");
                        }
                        $.each(pparameters, function (key, value) {
                            $(form).append(`<input type="text" name="${key}" value="${value}"/>`);
                        });
                        document.body.appendChild(form);
                        form.submit();
                        document.body.removeChild(form);

                        return false;
                    }
                });
            }).fail(function () {
                $(divMyReservations).empty();
                $(divMyReservations).append(
                    `<div class="row">
                        <div class="col-11 col-md-7">
                            <img style="width: 100%; margin: 1em;" src="assets/not-found.png" alt="">
                        </div>
                        <div class="col-11 col-md-4 align-self-center main-container-div__title">
                            <h3>Oops, aún no hay reservas que mostrar</h3>
                        </div>
                    </div>`
                );
            });
        } else {
            checkValidation('div-us-user');
        }

    });

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
            }).fail(function () {
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