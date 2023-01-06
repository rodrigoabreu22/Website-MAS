function validate() {
    var retVal = true;

    var estabelecimento = document.getElementById("Estabelecimento");
    var estabelecimentoError = document.getElementById("EstabelecimentoError");
    if (estabelecimento.value == "") {
        retVal = false;
        estabelecimentoError.classList.add("d-block");
        estabelecimentoError.classList.remove("d-none");
    } else {
        estabelecimentoError.classList.remove("d-block");
        estabelecimentoError.classList.add("d-none");
        localStorage.setItem('Estabelecimento', estabelecimento.value);
    }

    var morada = document.getElementById("Morada");
    var moradaError = document.getElementById("MoradaError");
    if (morada.value == "") {
        retVal = false;
        moradaError.classList.add("d-block");
        moradaError.classList.remove("d-none");
    } else {
        moradaError.classList.remove("d-block");
        moradaError.classList.add("d-none");
        localStorage.setItem('Morada', morada.value);
    }

    var telefone = document.getElementById("Telefone");
    var telefoneError = document.getElementById("TelefoneError");
    if (telefone.value == "") {
        retVal = false;
        telefoneError.classList.add("d-block");
        telefoneError.classList.remove("d-none");
    } else {
        telefoneError.classList.remove("d-block");
        telefoneError.classList.add("d-none");
        localStorage.setItem('Telefone', telefone.value);
    }

    var coffeEmail = document.getElementById("CoffeEmail");
    var coffeEmailError = document.getElementById("CoffeEmailError");
    if (coffeEmail.value == "") {
        retVal = false;
        coffeEmailError.classList.add("d-block");
        coffeEmailError.classList.remove("d-none");
    } else {
        coffeEmailError.classList.remove("d-block");
        coffeEmailError.classList.add("d-none");
        localStorage.setItem('Coffe', coffeEmail.value);
    }

if (retVal == true) {
    modal();
}

estabelecimento.value = "";
morada.value = "";
coffeEmail.value = "";
telefone.value = "";


return retVal;
}

function modal() {
$('#modalEstabelecimento').modal('show')
}

$('#modalEstabelecimento').click(function(){
window.location.href = "./HomePage.html"
})
console.log(localStorage)