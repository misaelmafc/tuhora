class User {

    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    validateSesion() {

        let dataTest = {
            'username': 'juan',
            'password': '1234',
            'status': false
        }

        this.username === dataTest.username && this.password === dataTest.password ? dataTest.status = true : dataTest.status;

        return this.resolutionSesion(dataTest.status);
    }

    resolutionSesion(status){

        if(status){
            alert("Acceso correcto");
            window.location.replace("user.html");
        }else{
            alert("Acceso denegado");
        }

    }

}