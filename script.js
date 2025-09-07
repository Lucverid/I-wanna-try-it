const title = document.querySelector('.title')
const btnContainer = document.querySelector('.btn-container')
const openBtn = document.getElementById('openBtn')

const text1 = "Cie ada yang ulang tahun nih".split(' ')
const text2 = "Nih ada mini game buat kamu, nanti ada hadiahnya".split(' ')

function animateText(textArray, callback) {
  title.innerHTML = ''
  textArray.forEach((word, index) => {
    const span = document.createElement('span')
    span.textContent = word + ' '
    span.style.animation = 'fadeIn 0.5s ease forwards'
    span.style.opacity = '0'
    span.style.animationDelay = `${index * 0.3}s`
    title.appendChild(span)
  })

  setTimeout(() => {
    if (callback) callback()
  }, textArray.length * 300 + 500)
}

const style = document.createElement('style')
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`
document.head.appendChild(style)

function showOptions() {
  btnContainer.innerHTML = `
    <button id="yes">Mau Main</button>
    <button id="no">Nggak Mau</button>
  `
  document.getElementById('yes').onclick = () => window.location.href = 'game.html'
  document.getElementById('no').onclick = () => alert("Wah parah, nggak dilanjut 😭")
}

openBtn.addEventListener('click', (e) => {
  e.preventDefault()
  openBtn.remove()
  animateText(text2, showOptions)
})

animateText(text1)
