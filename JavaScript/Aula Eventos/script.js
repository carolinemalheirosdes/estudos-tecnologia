const botao = document.querySelector("#botao");

botao.addEventListener("click", function() {
    alert("Olá, estou aprendendo Javascript!");
});

const botaoMouse = document.querySelector("#botaoMouse");

botaoMouse.addEventListener("mouseover", function() {
    alert("O mouse passou por cima!");
});

botaoMouse.addEventListener("mouseout", function() {
    alert("O mouse saiu do botão!");
});

const campo = document.querySelector("#campo");


campo.addEventListener("keydown", function(event) {
    console.log("Tecla pressionada:", event.key);
});