

// Nome da const
const form = document.getElementById("form");
          // pega do documento o id form
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

  // Ele "ouve" o (e) que é o event
form.addEventListener("submit", (e) => {
  // Não carregar a pagina quando a gente enviar o formulario
  e.preventDefault();

  checkInputs();
});

// Função = fazer alguma coisa;
function checkInputs() {
  // Estou falando que o usernameValue é igual o que a pessoa for colocar no input username
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  // Se - condição
        // Quando usamos = atribuição , 
        //quando usarmos == é comparação entre duas variáveis não verificando o tipo ,
        // quando usamos ===  é usado para a comparação entre duas variáveis, mas isso irá verificar o tipo estrito,
  if (usernameValue === "") {
    // Se o valor do input username for igual a nada
    setErrorFor(username, "O nome de usuário é obrigatório.");
    // Traga a mensagem de erro
  } else {
    // Se não
    setSuccessFor(username);
    // Traga a mensagem de sucesso
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
        // Se o email passar aqui é pq ele é invalido
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
                          // Lista, então, se ele não tiver minimo de 7 não passa
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
                         // !== diferente = se for true
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
  } else {
    setSuccessFor(passwordConfirmation);
  }

                // Quando todos estão certos
  const formControls = form.querySelectorAll(".form-control");
  // Pegar todas as class control e ve se todas estão com sucess

    // Fazer um loop nesse form / para usar o evento every tem q transformar o form em lista,
    // Mas ele não é uma lista, então temos que colocar ele dentro do [] para falar pro js, 
    // olha é uma lista ;) 
  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

                    // Input q quero definir o erro e a mensagem de erro
function setErrorFor(input, message) {
                          // Retorna o pai do elemento que seria o input
  const formControl = input.parentElement;
  // mensagem de erro       Selecionando todos os "small" que esta dentro do formcontrol
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
              // Mudando o nome de class dele
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

    //essa função retorna true se o email for valido
function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
