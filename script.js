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

  //music section:
  const bgMusic = document.getElementById('bgMusic');

// When the audio can play through, begin our fade-in
bgMusic.addEventListener('canplaythrough', () => {
  // Target volume (0.0–1.0)
  const targetVol = 0.4;
  // How long to fade in (ms)
  const fadeDuration = 4000;
  const steps = 40;
  const stepTime = fadeDuration / steps;
  let currentStep = 0;

  // Un-mute after starting fade so volume changes are heard
  bgMusic.muted = false;
  bgMusic.volume = 0;

  // Ramp volume up
  const fading = setInterval(() => {
    currentStep++;
    bgMusic.volume = (currentStep / steps) * targetVol;
    if (currentStep >= steps) {
      clearInterval(fading);
      bgMusic.volume = targetVol;
    }
  }, stepTime);
});



