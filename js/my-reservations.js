$(document).ready(function () {
    let divMyReservations = $('#div-us-my-reservations');
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'php/download-file.php',
    }).done(function (response) {

        $('#div-reservation').empty();
        if (response != null) {
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
        } else {
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
        }

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
});