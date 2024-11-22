function goBack() {
    verificarCamposPreenchidos()
}

// Função para exibir o pop-up de sucesso
function mostrarPopUpSucesso() {
    const popUp = document.getElementById('popUpSucesso')
    if (popUp) {
        popUp.classList.remove('hidden')
    }
}

// Função para fechar o pop-up de sucesso
function fecharPopUp() {
    const popUp = document.getElementById('popUpSucesso')
    if (popUp) {
        popUp.classList.add('hidden')
    }

    window.location.href = 'manutencao-unidade-medida.html'
}



// Verifica se algum input foi preenchido
function verificarCamposPreenchidos() {
    const inputs = document.querySelectorAll('input, select')
    return Array.from(inputs).some(input => input.value.trim() !== '')
}

// Exibe o pop-up de confirmação
function exibirPopUpConfirmacao() {
    const popUp = document.getElementById('popUpConfirmacao')
    if (popUp) {
        popUp.classList.remove('hidden')
    }
}

// Fecha o pop-up de confirmação
function fecharPopUpConfirmacao() {
    const popUp = document.getElementById('popUpConfirmacao')
    if (popUp) {
        popUp.classList.add('hidden')
    }
}

// Confirma a navegação
function confirmarVoltar() {
    fecharPopUpConfirmacao()
    // Volta para a página anterior
    window.history.back()
}

// Função goBack modificada
function goBack() {
    if (verificarCamposPreenchidos()) {
        exibirPopUpConfirmacao()
    } else {
        // Se não houver campos preenchidos, volta diretamente
        window.history.back()
    }
}
