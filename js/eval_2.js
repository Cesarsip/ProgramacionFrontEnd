function validarFormulario() {
    let campoNombre = document.getElementById('nombre_completo');
    let campoRut = document.getElementById('rut');
    let campoFecha = document.getElementById('fecha_nac');
    let campoCv = document.getElementById('cv');
    let campoEmail = document.getElementById('email');
    let campoPassword = document.getElementById('password');
    let campoRepetirPassword = document.getElementById('repetir_password');

    let formularioCorrecto = true;

    // El name  
    if (campoNombre.value == '') {
        campoNombre.classList.add('is-invalid');
        formularioCorrecto = false;
    }

    // El rut 
    if (campoRut.value == '' || !campoRut.value.includes('-')) {
        campoRut.classList.add('is-invalid');
        formularioCorrecto = false;
    }

    // Fecha de nacimiento 
    if (campoFecha.value != '') {
        if (!campoFecha.value.includes('/')) {
            campoFecha.classList.add('is-invalid');
            formularioCorrecto = false;
        }
    }

    // Curriculum 
    if (campoCv.files.length > 0) {
        let nombreArchivo = campoCv.files[0].name.toLowerCase();
        if (!nombreArchivo.endsWith('.pdf') && !nombreArchivo.endsWith('.docx')) {
            campoCv.classList.add('is-invalid');
            formularioCorrecto = false;
        }
    }

    // el Gmail 
    if (campoEmail.value == '' || !validarEmail(campoEmail.value)) {
        campoEmail.classList.add('is-invalid');
        formularioCorrecto = false;
    }

    // contraseña 
    if (campoPassword.value.length < 8 || campoPassword.value.length > 12) {
        campoPassword.classList.add('is-invalid');
        formularioCorrecto = false;
    }

    // repetir la contraseña 
    if (campoRepetirPassword.value == '' || campoRepetirPassword.value != campoPassword.value) {
        campoRepetirPassword.classList.add('is-invalid');
        formularioCorrecto = false;
    }

    if (formularioCorrecto == true) {
        alert("¡Envío de datos correcto! El formulario pasó todas las validaciones.");
    } else {
        alert("Por favor, revisa los campos marcados en rojo.");
    }
}

function elementoValido() {
    let campoNombre = document.getElementById('nombre_completo');
    let campoRut = document.getElementById('rut');
    let campoFecha = document.getElementById('fecha_nac');
    let campoEmail = document.getElementById('email');
    let campoPassword = document.getElementById('password');
    let campoRepetirPassword = document.getElementById('repetir_password');

    if (campoNombre.value != '') {
        campoNombre.classList.remove('is-invalid');
        campoNombre.classList.add('is-valid');
    }
    if (campoRut.value != '' && campoRut.value.includes('-')) {
        campoRut.classList.remove('is-invalid');
        campoRut.classList.add('is-valid');
    }
    if (campoFecha.value == '' || campoFecha.value.includes('/')) {
        campoFecha.classList.remove('is-invalid');
        campoFecha.classList.add('is-valid');
    }
    if (campoEmail.value != '' && validarEmail(campoEmail.value)) {
        campoEmail.classList.remove('is-invalid');
        campoEmail.classList.add('is-valid');
    }
    if (campoPassword.value.length >= 8 && campoPassword.value.length <= 12) {
        campoPassword.classList.remove('is-invalid');
        campoPassword.classList.add('is-valid');
    }
    if (campoRepetirPassword.value != '' && campoRepetirPassword.value == campoPassword.value) {
        campoRepetirPassword.classList.remove('is-invalid');
        campoRepetirPassword.classList.add('is-valid');
    }
}

function validarEmail(valor) {
    const regex = /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/;
    return regex.test(valor);
}

function limpiarFormulario() {
    document.getElementById('miFormulario').reset();
    let listaIds = ['nombre_completo', 'rut', 'fecha_nac', 'cv', 'email', 'password', 'repetir_password'];
    for (let i = 0; i < listaIds.length; i++) {
        let elemento = document.getElementById(listaIds[i]);
        if (elemento) {
            elemento.classList.remove('is-invalid', 'is-valid');
        }
    }
}

function cambiar_fondo() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'rgb(240, 240, 240)' ? '#ffffff' : '#f0f0f0';
}