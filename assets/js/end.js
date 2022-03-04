
// shows final score on end game html
const finalScore = document.getElementById('finalScore');
let score = sessionStorage.getItem('score');

finalScore.innerHTML = score;