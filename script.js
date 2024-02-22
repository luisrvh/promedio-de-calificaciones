function capturarCalificaciones() {
    // Obtener la cantidad de alumnos
    var cantidadAlumnos = document.getElementById('cantidadAlumnos').value;

    // Inicializar variables para el promedio y mensaje general
    var totalCalificaciones = 0;
    var mensajeGeneral = "Resultados de los alumnos:\n";

    // Capturar calificaciones y realizar cálculos
    for (var i = 1; i <= cantidadAlumnos; i++) {
        var nombreAlumno = document.getElementById('nombre_' + i).value;
        var calificacion = parseFloat(document.getElementById('calificacion_' + i).value);

        // Mostrar la calificación de cada alumno en el mensaje general
        mensajeGeneral += nombreAlumno + " tiene " + calificacion + " y es ";

        // Realizar el cálculo correspondiente para determinar si Aprobó
        if (calificacion >= 7) {
            mensajeGeneral += "Aprobado\n";
        } else {
            mensajeGeneral += "Reprobado\n";
        }

        // Sumar las calificaciones para el promedio general
        totalCalificaciones += calificacion;
    }

    // Calcular el promedio general
    var promedioGeneral = totalCalificaciones / cantidadAlumnos;

    // Mostrar resultados en la página
    var resultadosHTML = "<h2>Resultados de los alumnos:</h2>";
    resultadosHTML += "<p>" + mensajeGeneral + "</p>";
    resultadosHTML += "<p>Promedio General: " + promedioGeneral.toFixed(2) + "</p>";

    // Insertar resultados en el div correspondiente
    document.getElementById('resultados').innerHTML = resultadosHTML;
}


function borrarCampos() {
    document.getElementById('cantidadAlumnos').value = '';
    document.getElementById('alumnosContainer').innerHTML = '';
    document.getElementById('resultados').innerHTML = '';
}

function borrarResultados() {
    document.getElementById('resultados').innerHTML = '';
}

// Crear campos de calificación para cada alumno
document.getElementById('cantidadAlumnos').addEventListener('change', function () {
    var cantidadAlumnos = document.getElementById('cantidadAlumnos').value;
    var alumnosContainer = document.getElementById('alumnosContainer');
    alumnosContainer.innerHTML = '';

    for (var i = 1; i <= cantidadAlumnos; i++) {
        var labelNombre = document.createElement('label');
        labelNombre.textContent = 'Nombre del alumno ' + i + ':';
        labelNombre.classList.add('etiqueta-nombre'); // Nueva línea
    
        var inputNombre = document.createElement('input');
        inputNombre.type = 'text';
        inputNombre.id = 'nombre_' + i;
        inputNombre.classList.add('campo-nombre'); 
    
        var labelCalificacion = document.createElement('label');
        labelCalificacion.textContent = 'Calificación del alumno ' + i + ':';
        labelCalificacion.classList.add('etiqueta-calificacion');
    
        var inputCalificacion = document.createElement('input');
        inputCalificacion.type = 'number';
        inputCalificacion.id = 'calificacion_' + i;
        inputCalificacion.classList.add('campo-calificacion'); 

        alumnosContainer.appendChild(labelNombre);
        alumnosContainer.appendChild(inputNombre);
        alumnosContainer.appendChild(labelCalificacion);
        alumnosContainer.appendChild(inputCalificacion);
        alumnosContainer.appendChild(document.createElement('br'));
    }
});
