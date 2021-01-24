$(document).ready(function () {

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $("#btn-login").click(function () {
        $(".main-container-div").hide();
        $("#div-login").fadeIn("slow");
    });

    $("#btn-register").click(function () {
        $(".main-container-div").hide();
        $("#div-register").fadeIn("slow");
    });
    
    $("#btn-reservation-availability").click(function () {
        $(".main-container-div").hide();
        $("#div-reservation-availability").fadeIn("slow");
    });

    $("#btn-reservation-doctor").click(function () {
        $(".main-container-div").hide();
        $("#div-reservation-doctor").fadeIn("slow");
    });

    $("#btn-user").click(function () {
        $(".main-container-div").hide();
        $("#div-user").fadeIn("slow");
    });

    $("#btn-my-reservations").click(function () {
        $(".main-container-div").hide();
        $("#div-my-reservations").fadeIn("slow");
    });

});