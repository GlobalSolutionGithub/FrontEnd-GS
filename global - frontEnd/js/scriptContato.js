// Função para limpar o formulário
function limparFormulario() {
    document.getElementById("nome").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("email").value = "";
    document.querySelector('input[name="apresentacao"]:checked').checked = false;
    document.getElementById("assunto").value = "";
}

// Função para validar o formulário
function validarFormulario() {
    // Obtém os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var numero = document.getElementById("numero").value;
    var email = document.getElementById("email").value;
    var apresentacao = document.querySelector('input[name="apresentacao"]:checked');
    var assunto = document.getElementById("assunto").value;

    // Validação do campo "Nome Completo"
    if (nome === "") {
        alert("Por favor, preencha o campo 'Nome Completo'.");
        return false;
    }

    // Validação do campo "Telefone"
    if (numero === "") {
        alert("Por favor, preencha o campo 'Telefone'.");
        return false;
    }

    // Validação do campo "Email"
    if (email === "") {
        alert("Por favor, preencha o campo 'Email'.");
        return false;
    }

    // Validação do campo "Você se apresenta como"
    if (!apresentacao) {
        alert("Por favor, selecione uma opção em 'Você se apresenta como'.");
        return false;
    }

    // Validação do campo "Assunto"
    if (assunto === "") {
        alert("Por favor, preencha o campo 'Assunto'.");
        return false;
    }

    // Se todas as validações passarem, o formulário é válido
    return true;
}

// Evento de envio do formulário
var formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Chama a função de validação
    if (validarFormulario()) {
        // Se o formulário for válido, pode prosseguir com o envio ou processamento dos dados
        alert("Formulário válido. Enviando...");
        limparFormulario(); // Limpa o formulário após o envio bem-sucedido
    }
});