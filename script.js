const road = document.querySelector('.road');
const timeDisplay = document.querySelector('#time');
const carCountDisplay = document.querySelector('#car-count');

const colors = ['#ef4444', '#3b82f6', '#f59e0b', '#8b5cf6'];
let nextCarId = 0;
let elapsedSeconds = 0;
let carCount = 0;

function updateCarCount(change) {
  carCount += change;
  carCountDisplay.textContent = carCount;
}

function createCar() {
  const car = document.createElement('div');
  car.className = 'car';
  car.style.backgroundColor = colors[nextCarId % colors.length];
  car.innerHTML = '<span class="window"></span>';

  nextCarId += 1;
  updateCarCount(1);
  road.appendChild(car);

  car.addEventListener('animationend', () => {
    car.remove();
    updateCarCount(-1);
  });
}

function updateTime() {
  elapsedSeconds += 1;
  const minutes = String(Math.floor(elapsedSeconds / 60)).padStart(2, '0');
  const seconds = String(elapsedSeconds % 60).padStart(2, '0');
  timeDisplay.textContent = `${minutes}:${seconds}`;
}

createCar();
setInterval(createCar, 1000);
setInterval(updateTime, 1000);
