$(document).ready(function () {

    let inputs = [];

    // Permite rellenar el arreglo con el id de cada elemento del formulario
    for (let i = 1; i <= 8; i++) {
        inputs.push(`rg_input${i}`);
    }

    // Se crea una instancia de la clase InputRG por cada input y select a controlar del formulario
    inputs.forEach(element => {
        element = new InputRG(this.id = element);
        element.createInputListener();
        element.readInput()
    });

    $("#btn-modal-cancel").click(function () {
        window.location.replace('php/logout.php');
    });
});
