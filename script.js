// Open song in new tab
document.getElementById('playSong').addEventListener('click', () => {
  window.open('https://www.youtube.com/watch?v=x0pJv1bQp6A', '_blank');
});

// Floating balloons animation
const canvas = document.getElementById('balloons');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let balloons = [];

class Balloon {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + 100;
    this.size = 20 + Math.random() * 40;
    this.speed = 1 + Math.random() * 2;
    this.color = hsl(${Math.random() * 360}, 70%, 60%);
  }
  update() {
    this.y -= this.speed;
    if (this.y + this.size < 0) {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + 100;
    }
  }
  draw() {
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, this.size * 0.6, this.size, 0, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
  }
}

function init() {
  for (let i = 0; i < 30; i++) {
    balloons.push(new Balloon());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  balloons.forEach(balloon => {
    balloon.update();
    balloon.draw();
  });
  requestAnimationFrame(animate);
}

init();
animate();
