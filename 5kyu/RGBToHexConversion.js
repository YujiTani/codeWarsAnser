// 5kyu RGB To Hex Conversion
// Clever
function rgb(r, g, b) {
  return [r, g, b].map(function(x) {
    return ('0' + Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
  }).join('').toUpperCase();
}

function rgb(r, g, b) {
  return [r, g, b].map(val => {
    return Math.max(0, Math.min(255, Number(val))).toString(16).padStart(2, '0').toUpperCase()
  }).join('');
}
