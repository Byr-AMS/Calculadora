document.addEventListener('DOMContentLoaded', () => {
  const sum = document.querySelector('#sum');
  const subtract = document.querySelector('.subtract');
  const multiply = document.querySelector('#multiply');
  const division = document.querySelector('.division');

  if (sum || subtract || multiply || division) {
    const value1 = document.querySelector('[name="number1"]');
    const value2 = document.querySelector('[name="number2"]');
    const result = document.querySelector('.result');

    if (!value1 || !value2 || !result) return;

    sum.addEventListener('click', () => {
      const number1 = value1.value;
      const number2 = value2.value;

      if (number1 && number2) {
        const summation = parseFloat(number1) + parseFloat(number2);
        result.innerText = summation;
      } else {
        result.innerText = 'Los dos valores son requeridos.';
      }
    });

    subtract.addEventListener('click', () => {
      const number1 = value1.value;
      const number2 = value2.value;

      if (number1 && number2) {
        const subtraction = parseFloat(number1) - parseFloat(number2);
        result.innerText = subtraction;
      } else {
        result.innerText = 'Los dos valores son requeridos.';
      }
    });

    multiply.addEventListener('click', () => {
      const number1 = value1.value;
      const number2 = value2.value;

      if (number1 && number2) {
        const multiplication = parseFloat(number1) * parseFloat(number2);
        result.innerText = multiplication;
      } else {
        result.innerText = 'Los dos valores son requeridos.';
      }
    });

    division.addEventListener('click', () => {
      const number1 = value1.value;
      const number2 = value2.value;

      if (number1 && number2) {
        const divisions = parseFloat(number1) / parseFloat(number2);
        result.innerText = divisions;
      } else {
        result.innerText = 'Los dos valores son requeridos.';
      }
    });

  }
});
