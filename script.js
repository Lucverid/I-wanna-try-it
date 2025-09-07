const title = document.querySelector('.title')
const btnContainer = document.querySelector('.btn-container')
const openBtn = document.getElementById('openBtn')

const text1 = "Cie ada yang ulang tahun nih".split('')
const text2 = "Nih ada mini game buat kamu, nanti ada hadiahnya".split('')

// Tambahkan animasi fadeIn
const style = document.createElement('style')
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`
document.head.appendChild(style)

// Fungsi ketik per huruf
function animateText(textArray, callback) {
  title.innerHTML = ''
  for (let i = 0; i < textArray.length; i++) {
    const span = document.createElement('span')

    if (textArray[i] !== ' ') {
      span.textContent = textArray[i]
    } else {
      span.style.width = '1rem'
    }

    span.style.fontSize = 'clamp(1rem, 5vw, 2rem)'
    const delay = i * 0.05
    span.style.animation = 'fadeIn 0.5s ease forwards'
    span.style.opacity = '0'
    span.style.animationDelay = `${delay}s`
    title.appendChild(span)
  }

  setTimeout(() => {
    if (callback) callback()
  }, textArray.length * 50 + 500)
}

// Tombol pilihan
function showOptions() {
  btnContainer.innerHTML = `
    <button id="yes">Mau Main</button>
    <button id="no">Nggak Mau</button>
  `
  document.getElementById('yes').onclick = () => {
    window.location.href = 'game.html'
  }

  document.getElementById('no').onclick = () => {
    alert("Wah parah, nggak dilanjut 😭")
  }
}

// Klik tombol OPEN
openBtn.addEventListener('click', (e) => {
  e.preventDefault()
  openBtn.remove()
  animateText(text2, showOptions)
})

// Mulai teks awal
animateText(text1)
