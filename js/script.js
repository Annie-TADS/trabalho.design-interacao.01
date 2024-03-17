const cardForm = document.getElementById('cardForm');
const card = document.getElementById('card');
const cardText = document.getElementById('card-text');

cardForm.addEventListener('input', function () {
    const backgroundColor = document.getElementById('backgroundColor').value;
    const textColor = document.getElementById('textColor').value;
    const textoCartao = document.getElementById('textoCartao').value;
    const alturaCartao = document.getElementById('alturaCartao').value;
    const larguraCartao = document.getElementById('larguraCartao').value;
    const arrendondamentoBorda = document.getElementById('arrendondamentoBorda').value;
    const tamanhoFonte = document.getElementById('tamanhoFonte').value;

    card.style.backgroundColor = backgroundColor;
    card.style.color = textColor;
    card.style.height = `${forceValueRange(alturaCartao, 10, 450)}px`;
    card.style.width = `${forceValueRange(larguraCartao, 10, 450)}px`;
    card.style.borderRadius = `${forceValueRange(arrendondamentoBorda, 0, 100)}%`;
    card.style.fontSize = `${forceValueRange(tamanhoFonte, 1, 50)}px`;

    cardText.textContent = textoCartao;

    document.body.style.background = `linear-gradient(to bottom, #FFF 0%, ${backgroundColor} 100%)`;
});


function forceValueRange(value, minValue, maxValue) {
    return Math.max(minValue, Math.min(maxValue, value));
}

function openEditor(nomeEditor) {
    const editores = document.getElementsByClassName("editores");

    for (let i = 0; i<editores.length; i++) {
        editores[i].classList.add("hidden");

        if (editores[i].id == nomeEditor) {
            editores[i].classList.remove("hidden");
        }
    }
    
    const tituloEditor = document.getElementById('modalEdicaoLabel');
    switch (nomeEditor) {
        case "texto":
            tituloEditor.textContent = "Editar Texto";
            break;
        case "cor":
            tituloEditor.textContent = "Editar Cores";
            break;
        case "Formato":
            tituloEditar.textContent = "Editar Formato";
            break;
    }
}

function closeEditor() {
    document.getElementById('alturaCartao').value = forceValueRange(document.getElementById('alturaCartao').value, 10, 450);
    document.getElementById('larguraCartao').value = forceValueRange(document.getElementById('larguraCartao').value, 10, 450);
    document.getElementById('arrendondamentoBorda').value = forceValueRange(document.getElementById('arrendondamentoBorda').value, 0, 100);
    document.getElementById('tamanhoFonte').value = forceValueRange(document.getElementById('tamanhoFonte').value, 1, 50);
}
