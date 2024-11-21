const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    jump();
  }
});

function jump() {
  if (!dino.classList.contains('jump')) {
    dino.classList.add('jump');
    
    setTimeout(function() {
      dino.classList.remove('jump');
    }, 300);
  }
}

let isAlive = setInterval(function() {
  // Dinosaur's current position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  
  // Cactus's current position
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

  // Collision detection
  if (cactusLeft < 90 && cactusLeft > 50 && dinoTop >= 140) {
    alert('Game Over!');
  }
}, 10);

// Add jump animation to the dino
const style = document.createElement('style');
style.textContent = `
  #dino.jump {
    animation: jumpAnimation 0.3s;
  }

  @keyframes jumpAnimation {
    0% { bottom: 0; }
    50% { bottom: 100px; }
    100% { bottom: 0; }
  }
`;
document.head.append(style);
