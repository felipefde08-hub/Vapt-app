function mostrarTela(id) {
    document.querySelectorAll('.tela').forEach(tela => {
        tela.classList.remove('ativa');
    });
    document.getElementById(id).classList.add('ativa');
}
function irParaEntregador() {
    alert("Tela do entregador em breve");
}
