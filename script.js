
// script.js funcional para interacciones de producto

document.addEventListener('DOMContentLoaded', () => {
  const productos = document.querySelectorAll('.product');
  productos.forEach(p => {
    p.addEventListener('click', () => {
      alert(`Seleccionaste: ${p.querySelector('h3').textContent}`);
    });
  });
});
