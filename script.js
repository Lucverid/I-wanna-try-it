const title = document.querySelector('.title')
const text = `Cie ada yang ulang tahun nih`.split('')

title.style.display = 'flex'
title.style.flexWrap = 'wrap'
title.style.justifyContent = 'center'
title.style.gap = '0.5rem'
title.style.top = '20vh'
title.style.left = '50%'
title.style.transform = 'translateX(-50%)'

for (let i = 0; i < text.length; i++) {
  const span = document.createElement('span')
  span.textContent = text[i] !== ' ' ? text[i] : '\u00A0' // spasi
  span.style.fontSize = '6vw'
  span.style.opacity = '0'
  span.style.animation = 'fadeIn 0.6s ease forwards'
  span.style.animationDelay = `${i * 0.1}s`
  title.appendChild(span)
}

const style = document.createElement('style')
style.textContent = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}`
document.head.appendChild(style)

// Tampilkan tombol setelah teks selesai
setTimeout(() => {
  document.getElementById('choices').style.display = 'flex'
}, text.length * 100) // tampil setelah teks selesai

// Fungsi tombol
function goToGame() {
  window.location.href = 'game.html' // ganti nama file jika beda
}

function nope() {
  alert('Wah parah, nggak dilanjut 😢')
}
