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

    $("#btn_sessionStart").css("color","#673AB7");

    $("#btn_sessionStart").click(function () {
        $(this).css("color","#673AB7");
        $("#btn_register").css("color"," #333232");
        $("#formRegister").hide();
        $("#formLogin").fadeIn("slow");
    });

    $("#btn_register").click(function () {
        $(this).css("color","#673AB7");
        $("#btn_sessionStart").css("color"," #333232");
        $("#formLogin").hide();
        $("#formRegister").fadeIn("slow");
    });


});