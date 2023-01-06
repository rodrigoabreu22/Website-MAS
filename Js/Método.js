$('#café').click(function(){
    $('#container2').css('visibility', 'visible');
    $('#container3').css('visibility', 'hidden');
})
$('#domicilio').click(function(){
    $('#container2').css('visibility', 'hidden');
    $('#container3').css('visibility', 'visible');

});
$('#mb').click(function(){
    $('#container4').css('visibility', 'visible');
    $('#container5').css('visibility', 'hidden');

});
$('#mbway').click(function(){
    $('#container4').css('visibility', 'hidden');
    $('#container5').css('visibility', 'visible');

});
$('#cancelar').click(function(){
    window.location.href = "Menu.html";
});


function modal() {
$('#modalPedidoInfo').modal('show')
}
console.log(localStorage)

$("#pedidoInfo").click(function(){
    window.location.href = "./HomePage.html"
})