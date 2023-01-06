function validate2() {
    controlo2 = true
    
    if ($('#nome').val().trim().length < 3 || $('#nome').val().trim().length > 30) {
        $('#nomeError').removeClass('d-none')
        controlo2 = false
    } else {
        $('#nomeError').addClass('d-none')
    }


    if ($('#telefone').val().trim().length != 9) {
        $('#telefoneError').removeClass('d-none')
        controlo2 = false
    } else {
        $('#telefoneError').addClass('d-none')
        
    }

    if ($('#endereço').val().trim().length == 0) {
        $('#endereçoError').removeClass('d-none')
        controlo2 = false
    } else {
        $('#endereçoError').addClass('d-none')
    }


    if ($('#email').val().trim().length == 0) {
        $('#emailError').removeClass('d-none')
        controlo2 = false
    } else {
        $('#emailError').addClass('d-none')
    }


    if ($('#password').val().trim().length == 0) {
        $('#password').removeClass('d-none')
        controlo2 = false
    } else {
        $('#passwordError').addClass('d-none')
    }


    if (controlo2 == true) {
        $("#myModal").modal("show");
    } else {
        return controlo
    }
    
}
function setInfo(){
    document.getElementById("nome").value=localStorage.getItem("nome");
    document.getElementById("email").value=localStorage.getItem("email");
    document.getElementById("password").value=localStorage.getItem("pw");
    document.getElementById("telefone").value=localStorage.getItem("telefone");
    document.getElementById("endereço").value=localStorage.getItem("endereço");
}

function saveChanges(){
    var newName = document.getElementById("nome");
    var newEmail = document.getElementById("email");
    var newPassword = document.getElementById("password");
    var newTelefone = document.getElementById("telefone");
    var newEndereço = document.getElementById("endereço");

    localStorage.setItem("nome", newName.value);
    localStorage.setItem("email", newEmail.value);
    localStorage.setItem("pw", newPassword.value);
    localStorage.setItem("telefone", newTelefone.value);
    localStorage.setItem("endereço", newEndereço.value);

    alert("Os dados da sua conta foram alterados com sucesso!");
    $("#myModal").modal('hide');
}
console.log(localStorage)

function clearForm(){
    document.getElementById("nome").value="";
    document.getElementById("email").value="";
    document.getElementById("password").value="";
    document.getElementById("telefone").value="";
    document.getElementById("endereço").value="";
}