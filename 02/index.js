// document.addEventListener('DOMContentLoaded', (event) => {
//   const container = document.querySelector('.container');

//   for (let i = 0; i < 6; i++) {
//     const element = document.createElement('div');
//     element.textContent = i + 1;
//     element.classList.add('box');

//     container.appendChild(element);
//   }
// });

let count = 0;

document.addEventListener('DOMContentLoaded', (e1) => {
  const btn = document.querySelector('.btn');
  const container = document.querySelector('.container');
    
  if (!btn || !container) return;

  btn.addEventListener('click', (e2) => {
    count++;

    
    const element = document.createElement('div');
    element.textContent = count;
    element.classList.add('box');
    
    container.appendChild(element);
  });
});
