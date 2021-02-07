class Alert {

    createAlert(typeAlert, textStrong, textNormal) {

        // alert-danger
        // alert-success
        $('body').append(`<div id="alert" class="alert ${typeAlert} alert-dismissible fade show  alert" role="alert">
                            <span><strong>${textStrong}</strong></span><br>
                            <span>${textNormal}</span>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`);

        $('#alert').fadeIn();
        setTimeout(function () { $('#alert').fadeOut(); }, 7500);
    }

}