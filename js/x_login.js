$(document).ready(function () {

    $("#btn-login-console").click(function(){

        let username = $('#input-username').val();
        let password = $('#input-password').val();

        let user = new User(username, password);

        user.validateSesion();
        
    });

});