const title = document.querySelector('.title')
const mainButtons = document.getElementById('mainButtons')
const choiceButtons = document.getElementById('choiceButtons')
const notif = document.getElementById('notif')

const firstText = "Cie ada yang ulang tahun nih"
const secondText = "Nih ada mini game buat kamu, nanti ada hadiahnya!"

// Fungsi animasi teks
function showTextAnimated(text) {
  title.innerHTML = ''
  const letters = text.split('')
  letters.forEach((char, i) => {
    const span = document.createElement('span')
    span.textContent = char
    span.style.opacity = 0
    span.style.animation = 'fadeIn 0.5s ease forwards'
    span.style.animationDelay = `${i * 0.05}s`
    title.appendChild(span)
  })
}

// Tambahkan animasi ke <head>
const style = document.createElement('style')
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`
document.head.appendChild(style)

// Teks pertama muncul saat load
showTextAnimated(firstText)

// Event tombol lanjut
document.getElementById('nextBtn').addEventListener('click', () => {
  showTextAnimated(secondText)
  mainButtons.style.display = 'none'
  choiceButtons.style.display = 'flex'
})

// Tombol "Mau Main"
document.getElementById('yesBtn').addEventListener('click', () => {
  window.location.href = "flower.html"
})

// Tombol "Nggak Dulu"
document.getElementById('noBtn').addEventListener('click', () => {
  choiceButtons.style.display = 'none'
  notif.style.display = 'block'
})
