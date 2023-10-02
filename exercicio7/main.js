function validateEmail(email){
  const emailRegex = /^[a-zA-Z0-9_]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)){
    throw new Error("email invalido deve seguir as formas corretas")
  }
}

function validatePassword(password){
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)){
    throw new Error("senha invalida deve siga as ordens para criar a senha")
  }
}

document.getElementById("registration-form").addEventListener("submit", function(event){
    try{
        const email = document.getElementById("email").value;
        const password = document.getElementById("password")
        validateEmail(email)
        validatePassword(password)
        alert("Registro bem-sucedido!");

    } catch (error){
      alert(error.message);
      event.preventDefault()
    }
})