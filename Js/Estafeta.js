function validate() {
    var retVal = true;

    var nome = document.getElementById("Nome");
    var nomeError = document.getElementById("NomeError");
    if (nome.value == "") {
        retVal = false;
        nomeError.classList.add("d-block");
        nomeError.classList.remove("d-none");
    } else {
        nomeError.classList.remove("d-block");
        nomeError.classList.add("d-none");
        localStorage.setItem('Nome', nome.value);
    }

    var apelido = document.getElementById("Apelido");
    var apelidoError = document.getElementById("ApelidoError");
    if (apelido.value == "") {
        retVal = false;
        apelidoError.classList.add("d-block");
        apelidoError.classList.remove("d-none");
    } else {
        apelidoError.classList.remove("d-block");
        apelidoError.classList.add("d-none");
        localStorage.setItem('Apelido', apelido.value);
    }

    var phone = document.getElementById("Phone");
    var phoneError = document.getElementById("PhoneError");
    if (phone.value == "") {
        retVal = false;
        phoneError.classList.add("d-block");
        phoneError.classList.remove("d-none");
    } else {
        phoneError.classList.remove("d-block");
        phoneError.classList.add("d-none");
        localStorage.setItem('Phone', phone.value);
    }

    var email = document.getElementById("Email");
    var emailError = document.getElementById("EmailError");
    if (email.value == "") {
        retVal = false;
        emailError.classList.add("d-block");
        emailError.classList.remove("d-none");
    } else {
        emailError.classList.remove("d-block");
        emailError.classList.add("d-none");
        localStorage.setItem('Email', email.value);
    }

    var curriculo = document.getElementById("file");
    var curriculoError = document.getElementById("fileError");
    if (curriculo.size == 0) {
        retVal = false;
        curriculoError.classList.add("d-block");
        curriculoError.classList.remove("d-none");
    } else {
        curriculoError.classList.remove("d-block");
        curriculoError.classList.add("d-none");
        localStorage.setItem('Currículo', curriculo.value);
    }

if (retVal == true) {
    modal();
}

nome.value = "";
apelido.value = "";
email.value = "";
phone.value = "";
curriculo.value = "";

return retVal;
}

function modal() {
$('#modalEstafeta').modal('show')
}

$('#modalEstafeta').click(function(){
window.location.href = "./HomePage.html"
})
console.log(localStorage)