/*var colors = ['#ff0000', '#00ff00', '#0000ff'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('head').style.color = random_color;*/
let sketchCells = document.getElementById('head');
document.addEventListener('click', function() {
    sketchCells.style.cssText = 'background: black;';
});
