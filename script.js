const container = document.querySelector('.music-symbols');

function createMusicSymbol() {
  const symbol = document.createElement('div');
  symbol.classList.add('music-symbol');
  symbol.style.left = Math.floor(Math.random() * 100) + '%';
  symbol.style.top = Math.floor(Math.random() * 100) + '%';
  container.appendChild(symbol);
}

for (let i = 0; i < 20; i++) {
  createMusicSymbol();
}
