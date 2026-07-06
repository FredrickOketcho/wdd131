const PI = 3.14159;
const radiusOutput = document.getElementById('radius');
const areaOutput = document.getElementById('area');

function circleArea(radius) {
  const area = radius * radius * PI;
  return area;
}

let radius = 10;
radiusOutput.textContent = radius;
areaOutput.textContent = circleArea(radius);