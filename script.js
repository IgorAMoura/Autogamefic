function enviarFormulario()
{   let nomeForm = document.getElementById("nome").value
    let emailForm = document.getElementById("email").value
    let contatoForm = document.getElementById("numero").value
    let descricaoForm = document.getElementById("problema").value

let dados = { nomeForm: nome, emailForm: emailForm,
contatoForm: numero, descricaoForm: problema}}

fetch("http://localhost:3000/formulario",
{method: "POST",
headers: {"Content-type": "application/json"},
body: JSON.stringify(dados)})

.then(resposta => {console.log(resposta);
    document.querySelector("#portifolio form").reset()

alert("Enviado com sucesso");

event.preventDefault})