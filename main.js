/* ============ Acesso ao DOM e teclas de atalho ============ */
const Teclas = document.querySelectorAll('.tecla');
const Audios = document.querySelectorAll('audio');
const Keys = [
  '1', '2', '3', '4', 
  'q', 'w', 'e', 'r', 
  'a', 's', 'd', 'f', 
  'z', 'x', 'c', 'v'
];

// Reiniciar som
function voltaZero() {
  Audios.forEach(element => {
    if(element.currentTime !== 0) {
      element.currentTime = 0;
    }
  })
};

/* ============ Reproduzindo pelo click + Acessibilidade ============ */
Teclas.forEach((element, index) => {
  element.addEventListener('click', () => {
    voltaZero();
    Audios[index].play();
  });
  element.addEventListener('keydown', evento => {
    if(evento.key === " " || evento.key === "Enter") {
      element.classList.add('ativa');
    }
  });
  element.addEventListener('keyup', () => {
    element.classList.remove('ativa');
  })
});

/* ============ Reproduzindo os sons pelo teclado ============ */
document.addEventListener('keydown', evento => {
  Keys.forEach((element, index) => {
    if(element === evento.key) {
      voltaZero();
      Audios[index].play();
      Teclas[index].classList.add('ativa');
    }
  })
});
document.addEventListener('keyup', evento => {
  Keys.forEach((element, index) => {
    if(element === evento.key) {
      Teclas[index].classList.remove('ativa');
    }
  })
});
