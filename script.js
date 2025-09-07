const title = document.querySelector('.title')
const text = `I Have Something`.split('')

// Styling layout
title.style.display = 'flex'
title.style.flexWrap = 'wrap'
title.style.justifyContent = 'center'
title.style.gap = '0.5rem'
title.style.position = 'absolute'
title.style.top = '10vh'
title.style.left = '50%'
title.style.transform = 'translateX(-50%)'

for (let index = 0; index < text.length; index++) {
  const span = document.createElement('span')

  if (text[index] !== ' ') {
    span.textContent = text[index]
  } else {
    span.style.width = '1rem'
  }

  span.style.fontSize = '6vw'
  span.style.opacity = '0'
  span.style.animation = 'fadeIn 1s ease forwards'

  const randomDelay = Math.random() * 2
  span.style.animationDelay = `${randomDelay}s`

  title.appendChild(span)
}

// Inject animasi CSS fadeIn
const style = document.createElement('style')
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`
document.head.appendChild(style)
