const btnOpen = document.querySelector("#btnOpen")
const btnAgain = document.querySelector("#btnAgain")

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const messagens = [
  'A vida trará coisas boas se tiver paciência.',
  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
  'Não compense na ira o que lhe falta na razão.',
  'A maior de todas as torres começa no solo.',
  'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
  'A juventude não é uma época da vida, é um estado de espírito.',
  'Siga os bons e aprenda com eles.',
  'O bom-senso vale mais do que muito conhecimento.',
  'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
  'São os nossos amigos que nos ensinam as mais valiosas lições.',
  'Aquele que se importa com o sentimento dos outros, não é um tolo.',
  'A adversidade é um espelho que reflete o verdadeiro eu.',
  'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
  'Uma bela flor é incompleta sem as suas folhas.',
  'Sem o fogo do entusiasmo, não há o calor da vitória.',
]

let randomNumberGenerator = Math.round(Math.random() * 15)

btnOpen.addEventListener("click", handleOpenFortuneCookie)
btnAgain.addEventListener("click", handleResetClick)

function handleOpenFortuneCookie() {
  const luckyMessage = messagens[randomNumberGenerator]

  toggleScreen()

  document.querySelector(".card p").innerHTML = `${luckyMessage}`
}

function handleResetClick(event) {
  event.preventDefault()

  toggleScreen()

  randomNumberGenerator = Math.round(Math.random() * 5)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}