let actividades = []; // arreglo

document.addEventListener("DOMContentLoaded", () =>{
    const btnAgregar = document.querySelector("button");
    btnAgregar.addEventListener("click", agregarActividad);
});

function agregarActividad(){
    const inputNuevaActividad = document.getElementById("nuevaActividad");
    const nuevaActividad = inputNuevaActividad.value;

    if(nuevaActividad){
        actividades.push(nuevaActividad);
        inputNuevaActividad.value = "";
        mostrarActividades();
    }
}

function mostrarActividades(){
    const listaActividades = document.getElementById("listaActividades");
    listaActividades.innerHTML = "";

    actividades.forEach((tarea, index) =>{
        const li = document.createElement("li");
        li.textContent = `${index +1}       .       ${tarea}  `;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("eliminar-btn"); // Agrega la clase "eliminar-btn"

        btnEliminar.addEventListener("click", () => eliminarActividad(index));

        li.appendChild(btnEliminar);
        listaActividades.appendChild(li);
    });
}

function eliminarActividad(index){
    if(index >= 0 && index < actividades.length){
        actividades.splice(index, 1);
        mostrarActividades();
    }
}

/* SCRIPT CALCULADORA */
        const input1 = document.querySelectorAll('.inputc')[0];
        const input2 = document.querySelectorAll('.inputc')[1];
        const btnSumar = document.querySelector('.btnSumar');
        const btnRestar = document.querySelector('.btnRestar');
        const btnMultiplicar = document.querySelector('.btnMultiplicar');
        const btnDividir = document.querySelector('.btnDividir');
        const btnCalcular = document.querySelector('.btnCalcular');
        const btnLimpiar = document.querySelector('.btnLimpiar');
        const resultado = document.querySelector('#resultado');

        let operacion = '';

        // Funciones para cada operación
        btnSumar.addEventListener('click', () => {
            operacion = 'sumar';
            resultado.textContent = 'Operación seleccionada: Suma';
        });

        btnRestar.addEventListener('click', () => {
            operacion = 'restar';
            resultado.textContent = 'Operación seleccionada: Resta';
        });

        btnMultiplicar.addEventListener('click', () => {
            operacion = 'multiplicar';
            resultado.textContent = 'Operación seleccionada: Multiplicación';
        });

        btnDividir.addEventListener('click', () => {
            operacion = 'dividir';
            resultado.textContent = 'Operación seleccionada: División';
        });

        // Función para calcular el resultado
        btnCalcular.addEventListener('click', () => {
            const num1 = parseFloat(input1.value);
            const num2 = parseFloat(input2.value);

            // Validar entradas
            if (isNaN(num1) || isNaN(num2)) {
                resultado.textContent = 'Por favor, ingrese números válidos';
                return;
            }

            let res;
            switch (operacion) {
                case 'sumar':
                    res = num1 + num2;
                    resultado.textContent = `Resultado: ${res}`;
                    break;
                case 'restar':
                    res = num1 - num2;
                    resultado.textContent = `Resultado: ${res}`;
                    break;
                case 'multiplicar':
                    res = num1 * num2;
                    resultado.textContent = `Resultado: ${res}`;
                    break;
                case 'dividir':
                    if (num2 === 0) {
                        resultado.textContent = 'No se puede dividir por cero';
                    } else {
                        res = num1 / num2;
                        resultado.textContent = `Resultado: ${res}`;
                    }
                    break;
                default:
                    resultado.textContent = 'Seleccione una operación';
            }
        });

        // Función para limpiar
        btnLimpiar.addEventListener('click', () => {
            input1.value = '';
            input2.value = '';
            operacion = '';
            resultado.textContent = 'Resultado: ';
        });