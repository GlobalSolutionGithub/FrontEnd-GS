//botao dark mode

// Obtém o botão de alternância pelo ID
const darkModeToggle = document.getElementById('darkModeToggle');

// Verifica se o modo escuro está ativado ou desativado
const isDarkModeEnabled = () => {
  return document.body.classList.contains('dark-mode');
};

// Alterna o modo escuro
const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');
};

// Adiciona um ouvinte de eventos para o botão de alternância
darkModeToggle.addEventListener('click', () => {
  // Alterna o modo escuro
  toggleDarkMode();

  // Atualiza o texto do botão de acordo com o estado atual
  darkModeToggle.innerText = isDarkModeEnabled() ? 'Modo Claro' : 'Modo Escuro';
});


// Dados de usuários cadastrados (simulando um banco de dados)
var usuariosCadastrados = [];

// Função para cadastrar um novo usuário
function cadastrarUsuario(event) {
  event.preventDefault();

  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  // Verifica se o email já está cadastrado
  var usuarioExistente = usuariosCadastrados.find(function(usuario) {
    return usuario.email === email;
  });

  if (usuarioExistente) {
    alert("Este email já está cadastrado.");
  } else {
    var novoUsuario = {
      nome: nome,
      email: email,
      senha: senha
    };
    usuariosCadastrados.push(novoUsuario);
    alert("Cadastro realizado com sucesso!");
    document.getElementById("cadastroForm").reset();
  }
}

// Função para fazer o login do usuário
function fazerLogin(event) {
  event.preventDefault();

  var loginEmail = document.getElementById("loginEmail").value;
  var loginSenha = document.getElementById("loginSenha").value;

  if (loginEmail === "admin" && loginSenha === "123456") {
    alert("Login realizado com sucesso!");
    document.getElementById("loginForm").reset();
    window.location.href = "https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021"; // Redireciona para a página de destino após o login
  } else {
    var usuario = usuariosCadastrados.find(function(usuario) {
      return usuario.email === loginEmail && usuario.senha === loginSenha;
    });

    if (usuario) {
      alert("Login realizado com sucesso!");
      document.getElementById("loginForm").reset();
      window.location.href = "https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021"; // Redireciona para a página de destino após o login
    } else {
      alert("Email ou senha inválidos.");
    }
  }
}

// Adiciona ouvintes de evento para os formulários de cadastro e login
document.getElementById("cadastroForm").addEventListener("submit", cadastrarUsuario);
document.getElementById("loginForm").addEventListener("submit", fazerLogin);