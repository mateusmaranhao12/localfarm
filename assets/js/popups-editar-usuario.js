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

    window.location.href = 'manutencao-usuario.html'
}

// Verifica se algum campo está preenchido ao tentar sair
function verificarCamposPreenchidos() {
    const inputs = document.querySelectorAll("input, select");
    for (let input of inputs) {
        if (input.value.trim() !== "") {
            abrirPopUpCamposPreenchidos();
            return false; // Impede a navegação imediata
        }
    }
    goBack(); // Navega normalmente caso nenhum campo esteja preenchido
}

// Abre o pop-up de confirmação
function abrirPopUpCamposPreenchidos() {
    const popUp = document.getElementById("popUpCamposPreenchidos");
    if (popUp) {
        popUp.classList.remove("hidden");
    }
}

// Fecha o pop-up de confirmação
function fecharPopUpCamposPreenchidos() {
    const popUp = document.getElementById("popUpCamposPreenchidos");
    if (popUp) {
        popUp.classList.add("hidden");
    }
}

// Confirma a saída e navega para a página anterior
function confirmarSaida() {
    window.history.back();
}