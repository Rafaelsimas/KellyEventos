const user = document.querySelector("#nameUser")
const screenLogin = document.querySelector(".screen1")
const boxMainScreen = document.querySelector(".screen2")
const boxEndMessageScreen = document.querySelector(".box-endMessage-screen")

const login = () => {
  if (user.value.trim() !== "") {
    screenLogin.classList.add("screen-hidden")
    boxMainScreen.classList.remove("screen-hidden")
  } else {
    alert("Entre com o seu nome")
  }
}

const formulario = document.querySelector("#feedbackForm")

formulario.addEventListener("submit", function (event) {
  event.preventDefault()
  const nomeUsuario = user.value.trim()
  const selects = document.querySelectorAll(".feedback-select")
  const feedback = {}
  selects.forEach(function (select) {
    const categoria = select.dataset.categoria
    const resposta = select.value
    feedback[categoria] = resposta
    boxMainScreen.classList.add("screen-hidden")
  })
  const comentario = document.querySelector("#comentario").value
  feedback.comentario = comentario
  const mensagem = `
📋 *NOVO FEEDBACK*

━━━━━━━━━━━━━━━━━━━━

👤 *CLIENTE:*
${nomeUsuario}

━━━━━━━━━━━━━━━━━━━━

${Object.entries(feedback)
  .filter(([categoria]) => categoria !== "comentario")
  .map(([categoria, resposta]) => `*${categoria}:* ${resposta}`)
  .join("\n")}

━━━━━━━━━━━━━━━━━━━━

📝 *COMENTÁRIO DO CLIENTE:*

${feedback.comentario || "Nenhum comentário informado."}

━━━━━━━━━━━━━━━━━━━━

📱 Feedback enviado pelo sistema de avaliação.
`
  const telefone = "5522990000000"
  const mensagemCodificada = encodeURIComponent(mensagem)
  const url = `https://wa.me/${telefone}?text=${mensagemCodificada}`
  window.open(url, "_blank")
})
