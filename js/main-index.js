$(document).ready(function () {

    showContent('btn-login', 'div-login');

    showContent('btn-main', 'div-main');

    function showContent(btnName, idName) {
        $(`#${btnName}`).click(function () {
            $(".main-container-div").hide();
            $(`#${idName}`).fadeIn("slow");
        });
    }
    
    $("#btn_sessionStart").css("color", "#673AB7");

    $("#btn_sessionStart").click(function () {
        $(this).css("color", "#673AB7");
        $("#btn_register").css("color", " #333232");
        $("#form-save-user").hide();
        $("#formLogin").fadeIn("slow");
    });

    $("#btn_register").click(function () {
        $(this).css("color", "#673AB7");
        $("#btn_sessionStart").css("color", " #333232");
        $("#formLogin").hide();
        $("#form-save-user").fadeIn("slow");
    });

});