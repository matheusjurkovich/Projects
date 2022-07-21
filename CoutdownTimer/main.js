// Atualiza a cada 1 seg
let x = setInterval(function () {
  let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countDown").innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countDown").innerHTML = "O foguete ja foi lançado!";
  }
}, 1000);

//Theme Switcher

const switchButton = document.querySelector('.switch input')

switchButton.addEventListener('change', () => {
  const isChecked = switchButton.checked
  if (isChecked) {
    document.body.classList.remove('light-theme')
    document.body.classList.add('dark-theme')
  } else {
    document.body.classList.add('light-theme')
    document.body.classList.remove('dark-theme')
  }
})

//Modal
const modal = document.querySelector('#modal')
const closeModal = document.querySelector('.close')
const subscribeButton = document.querySelector('#subscribe')


subscribeButton.onclick = () => modal.style.display = "block";// Abre Modal
closeModal.onclick = () => modal.style.display = "none";// Fecha Modal
