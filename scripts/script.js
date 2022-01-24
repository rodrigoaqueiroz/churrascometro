//CONTA POR PESSOA:

// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml
// Crianças valem por 0,5
// latas de cerveja = 355ml
// garrafas de refrigerante = 2l

const calculateMeat = (adult, children, duration) => {
  let total;
  if (duration > 6) {
    total = (adult * 650) + (children * (650/2));
  } else {
    total = (adult * 400) + (children * (400/2)) * duration;
  };
  return total;
};

const calculateBeer = (adult, duration) => {
  let total;
  (duration > 6) ? total = adult*2000 : total = adult * 1200 * duration;
  return total;
};

const calculateSoda = (adult, children, duration) => {
  let total;
  (duration > 6) ? total = (adult * 1500) + (children * (1500/2)) : total = (adult * 1000) + (children * (1000/2));
  return total;
};

const handleClick = () => {
  document.querySelector('.calculate').addEventListener('click', () => {
    generateResult();
  });
};

const generateResult = () => {
  const getAdult = parseInt(document.querySelector('.adult').value)
  const getChildren = parseInt(document.querySelector('.children').value)
  const getDuration = parseInt(document.querySelector('.duration').value)
  const getContainer = document.querySelector('.result')
  getContainer.innerHTML = '<h2> Para o churrasco correr bem será necessário: </h2>'
  getContainer.innerHTML += `<p>${(calculateMeat(getAdult, getChildren, getDuration)/1000).toFixed(2)}kg de carne </p>`
  getContainer.innerHTML += `<p>${Math.ceil(calculateBeer(getAdult, getDuration)/355)} latas de cerveja </p>`
  getContainer.innerHTML += `
    <p>${Math.ceil(calculateSoda(getAdult, getChildren, getDuration)/2000)} 
    garrafas de 2l de refrigerante </p>`
};

onload = function () {
  handleClick()
};
