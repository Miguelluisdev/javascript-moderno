const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const mensagem = document.getElementById("mensagem")

form.addEventListener("submit" , (e) => {
  e.preventDefault()

  const nameRegex = /^[a-zA-Z]{3,}$/;
  const name = nameInput.value

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = emailInput.value

  const passwordRegex = /^.{6,}$/;
  const password = passwordInput.value

  const validateName = new Promise((resolve, reject) => {
    if (nameRegex.test(name)) {
      resolve(name);
    } else {
      reject("Nome inválido (deve ter pelo menos 3 letras).");
    }
  });

  const validateEmail = new Promise((resolve, reject) => {
    if (emailRegex.test(email)) {
      resolve(email);
    } else {
      reject("E-mail inválido.");
    }
  });

  const validatePassword = new Promise((resolve, reject) => {
    if (passwordRegex.test(password)) {
      resolve(password);
    } else {
      reject("Senha inválida (deve ter pelo menos 6 caracteres).");
    }
  });

  Promise.all([validateName, validateEmail, validatePassword])
    .then((values) => {
      mensagem.innerHTML = "Formulário válido. Dados enviados: " + values.join(", ");
    })
    .catch((error) => {
      setTimeout(()=>{
        mensagem.innerHTML = "Erro de validação: " + error;
      },2000)
    
    });
});