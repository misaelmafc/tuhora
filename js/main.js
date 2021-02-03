$(document).ready(function () {

    // Inicializa la ayuda "tooltip"
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    createAlert('alert-danger', 'Lorem Ipsum Strong', 'Lorem Ipsum Normal');
});

function createAlert(typeAlert, textStrong, textNormal) {

    let body = document.getElementsByTagName("body");

    let element;

    element.innerHTML =
        `<div id="alert" class="alert ${typeAlert} alert-dismissible fade show  main-container-div__alert" role="alert">
            <span><strong>${textStrong}</strong></span><br>
            <span>${textNormal}</span>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>`;

    body = element.innerHTML;

    $('#alert"').fadeIn();

}