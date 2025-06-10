document.addEventListener('DOMContentLoaded', () => {
    // heart spawner (unchanged)
    const card = document.querySelector('.card');
    function spawnHeart() {
      const heart = document.createElement('div');
      heart.textContent = '❤️';
      heart.className = 'mini-heart';
      heart.style.left = `${Math.random() * 100}%`;
      card.appendChild(heart);
      setTimeout(() => card.removeChild(heart), 3000);
    }
    setInterval(spawnHeart, 400);
  
    // password form
    const pwForm  = document.getElementById('pwForm');
    const pwInput = document.getElementById('pwInput');
    const SECRET  = 'abby';  // lowercase
  
    pwForm.addEventListener('submit', e => {
      e.preventDefault();
      const guess = pwInput.value.trim().toLowerCase();
  
      if (guess === SECRET) {
        window.location.href = 'abby.html';
      } else {
        pwInput.classList.add('wrong');
        setTimeout(() => pwInput.classList.remove('wrong'), 500);
      }
    });
  });


