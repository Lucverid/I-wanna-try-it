const title = document.querySelector('.title');
const text = "I Have Something".split('');

title.innerHTML = ''; // kosongkan dulu

text.forEach((char, index) => {
  const span = document.createElement('span');
  span.textContent = char;
  span.style.opacity = 0;
  span.style.animation = `fadeIn 0.5s ease forwards`;
  span.style.animationDelay = `${index * 0.1}s`;
  title.appendChild(span);
});

// Tambahkan keyframe
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);
