class InputRG {

    constructor(id) {
        this.id = id;
    }

    // Crea un "listener" por cada input y select, guardando en localStorage el respectivo valor bajo el nombre del id
    createInputListener() {
        const input = document.getElementById(this.id);
        input.addEventListener('blur', function () {

            input.value.length === 0 ? localStorage.removeItem(this.id) : localStorage.setItem(this.id, input.value);

        });
    }

    createInput() {
        const input = document.getElementById(this.id);
        return input;
    }

    // En caso de existir la data permite leer desde localStorage el valor del input o select
    readInput() {
        const input = this.createInput();
        if (localStorage.getItem(this.id) !== null) {
            input.value = localStorage.getItem(this.id);
        }
    }

}

window.addEventListener('load', function () {

    let inputs = [];

    // Permite rellenar el arreglo con el id de cada elemento del formulario
    for (let i = 1; i <= 9; i++) {
        inputs.push(`rg_input${i}`);
    }

    // Se crea una instancia de la clase InputRG por cada input y select a controlar del formulario
    inputs.forEach(element => {
        element = new InputRG(this.id = element);
        element.createInputListener();
        element.readInput()
    });

});