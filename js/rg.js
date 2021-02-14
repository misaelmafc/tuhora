class InputRG {

    constructor(id) {
        this.id = id;
    }

    // Crea un "listener" por cada input y select, guardando en sessionStorage el respectivo valor bajo el nombre del id
    createInputListener() {
        const input = document.getElementById(this.id);
        input.addEventListener('blur', function () {

            input.value.length === 0 ? sessionStorage.removeItem(this.id) : sessionStorage.setItem(this.id, input.value);

        });
    }

    createInput() {
        const input = document.getElementById(this.id);
        return input;
    }

    // En caso de existir la data permite leer desde sessionStorage el valor del input o select
    readInput() {
        const input = this.createInput();
        if (sessionStorage.getItem(this.id) !== null) {
            input.value = sessionStorage.getItem(this.id);
        }
    }

}