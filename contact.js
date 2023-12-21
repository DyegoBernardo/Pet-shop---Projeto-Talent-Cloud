// let options = document.querySelector(".options");

// function menuMobile(){
//    options.classList.toggle("active");
//}

const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passworInput = document.querySelector("#password")

form.addEventListener("submit", (event) => {
    event.preventDefault();


// Verifica se o nome esta vazio
    if(nameInput.value == "") {
        alert("Por Favor, digite seu nome");
        return;
    }

// Verificacao do email
    if(emailInput.value == "" || !isEmailValdid(emailInput.value)) {
        alert("Por favor digite seu email");
        return;
    }

// Verificacao se a senha esta preenchida
if(!validatePassword(passworInput.value, 6)) {
    alert("A senha precisa ter no minimo 6 Digitos");
    return;
}

// Se todos os campos estiver preenchidos envia o formulario
form.submit();
})

// Funcao que valida o email
function isEmailValdid(email){
    const emailRegex = new RegExp(
        //usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true;
    }
        return false;
}

// Funcao de Validacao de senha
function validatePassword(passwor, minDigitos) {
    if(passwor.length >= minDigitos) {
        //senha valida
        return true
    }

    // Senha Invalidade
    return false

}

