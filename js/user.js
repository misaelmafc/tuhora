$(document).ready(function () {
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
});