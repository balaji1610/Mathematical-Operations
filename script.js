// document.querySelector('.again').addEventListener('click', function () {
//     secretnumber = Math.trunc(Math.random() * 20) + 1;

//     score = 20;

//     document.querySelector('.message').textContent = 'Start Gussing..';

//     document.querySelector('.score').textContent = score;

//     document.querySelector('.number').textContent = '?';

//     document.querySelector('.guess').value = '';

//     document.querySelector('body').style.backgroundColor = '#222';

//     document.querySelector('.number').style.width = '15rem';
//   });

// -----------------------BUTTONS FUNCTION-------------START 👍

const addNumber = function () {
  const number1 = Number(document.querySelector('.one').value);

  const number2 = Number(document.querySelector('.two').value);

  let twonumber = number1 + number2;
  console.log(twonumber);
  document.querySelector(
    '.add_answer'
  ).textContent = `The additon of ${twonumber}`;
};

const subNumber = function () {
  const number1 = Number(document.querySelector('.one').value);

  const number2 = Number(document.querySelector('.two').value);

  let twonumber = number1 - number2;
  console.log(twonumber);
  document.querySelector(
    '.sub_answer'
  ).textContent = `The Subtraction of ${twonumber}`;
};

const multiNumber = function () {
  const number1 = Number(document.querySelector('.one').value);

  const number2 = Number(document.querySelector('.two').value);

  let twonumber = number1 * number2;
  console.log(twonumber);
  document.querySelector(
    '.multi_answer'
  ).textContent = `The Multiplication of ${twonumber}`;
};

const divNumber = function () {
  const number1 = Number(document.querySelector('.one').value);

  const number2 = Number(document.querySelector('.two').value);

  let twonumber = number1 / number2;
  console.log(twonumber);
  document.querySelector(
    '.div_answer'
  ).textContent = `The Divison of ${twonumber}`;
};
// ------------------------END BUTTONS FUNCTION-------------

// console.log('HELLO');

// const number = 12;

// console.log(number);

// document.querySelector('.hello').textContent = 'HELLO !!!!';

// const number1 = (document.querySelector('.one').value = '100');
// console.log(Number(number1));

// ------------------BUTTON-----------START

document.querySelector('.btn-success').addEventListener('click', function () {
  addNumber();
});

document.querySelector('.btn-warning').addEventListener('click', function () {
  subNumber();
});

document.querySelector('.btn-secondary').addEventListener('click', function () {
  multiNumber();
});

document.querySelector('.btn-danger').addEventListener('click', function () {
  divNumber();
});

document.querySelector('.btn-dark').addEventListener('click', function () {
  addNumber();
  subNumber();
  multiNumber();
  divNumber();
});

// -----------------END BUTTONS---------------

// --------------------START BUTTONS REFRESH -----------------

const addNumberRefresh = function () {
  const number1 = Number(document.querySelector('.one').value);

  const number2 = Number(document.querySelector('.two').value);

  let twonumber = number1 + number2;
  console.log(twonumber);
  document.querySelector('.add_answer').textContent = '';
};

const subNumberRefresh = function () {
  const number1 = Number(document.querySelector('.one').value);

  const number2 = Number(document.querySelector('.two').value);

  let twonumber = number1 - number2;
  console.log(twonumber);
  document.querySelector('.sub_answer').textContent = '';
};

const multiNumberRefresh = function () {
  const number1 = Number(document.querySelector('.one').value);

  const number2 = Number(document.querySelector('.two').value);

  let twonumber = number1 * number2;
  console.log(twonumber);
  document.querySelector('.multi_answer').textContent = '';
};

const divNumberRefresh = function () {
  const number1 = Number(document.querySelector('.one').value);

  const number2 = Number(document.querySelector('.two').value);

  let twonumber = number1 / number2;
  console.log(twonumber);
  document.querySelector('.div_answer').textContent = '';
};
//---------------------END BUTTONS REFRESH

document.querySelector('.btn-info').addEventListener('click', function () {
  const number1 = Number((document.querySelector('.one').value = ''));

  const number2 = Number((document.querySelector('.two').value = ''));
  addNumberRefresh();
  subNumberRefresh();
  multiNumberRefresh();
  divNumberRefresh();
});

// -----------------Key Project---------------

const keyEvents = (document.querySelector('.key').textContent = '');

console.log(keyEvents);

document.addEventListener('keydown', function (e) {
  const key = e.key;

  console.log(key);

  document.querySelector('.key').textContent = `Your Entered This Key ${key}`;
});

const check = function () {
  document.querySelector('.checkPara').textContent = 'Hello Balaji';
};

document.querySelector('.check').addEventListener('click', function () {
  check();
});
