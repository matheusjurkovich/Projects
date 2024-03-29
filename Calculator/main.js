var input = document.getElementById("input"),
  number = document.querySelectorAll(".numbers div"),
  operator = document.querySelectorAll(".operators div"),
  result = document.getElementById("result"),
  clear = document.getElementById("clear"),
  resultDisplayed = false;

for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function (e) {
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (
      (resultDisplayed === true && lastChar === "+") ||
      lastChar === "-" ||
      lastChar === "×" ||
      lastChar === "÷"
    ) {
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }
  });
}

for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function (e) {
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];
    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "×" ||
      lastChar === "÷"
    ) {
      var newString =
        currentString.substring(0, currentString.length - 1) +
        e.target.innerHTML;
      input.innerHTML = newString;
    } else if (currentString.length == 0) {
      console.log("enter a number first");
    } else {
      input.innerHTML += e.target.innerHTML;
    }
  });
}


result.addEventListener("click", function () {

  var inputString = input.innerHTML;

  var numbers = inputString.split(/\+|\-|\×|\÷/g);


  var operators = inputString.replace(/[0-9]|\./g, "").split("");

  console.log(inputString);
  console.log(operators);
  console.log(numbers);
  console.log("----------------------------");
  var divide = operators.indexOf("÷");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  var multiply = operators.indexOf("×");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  }

  var subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  var add = operators.indexOf("+");
  while (add != -1) {
    numbers.splice(
      add,
      2,
      parseFloat(numbers[add]) + parseFloat(numbers[add + 1])
    );
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  input.innerHTML = numbers[0];

  resultDisplayed = true;
});

clear.addEventListener("click", function () {
  input.innerHTML = "";
});

const inputContainer = document.querySelector('#theme')
const rootElement = document.documentElement
const moon = document.querySelector('.dark_mode')
const sun = document.querySelector('.light_mode')

window.onload = function () {
  getThemeFromLocalStorage()
}

const lighTheme = {
  '--main': '#fff',
  '--input': '#fff',
  '--calculator-body': '#fff',
  '--operators': '#ddd',
  '--numbers': '#f9f9f9',
  '--letters': '#000000',
}

const darkTheme = {
  '--main': '#1c1c1c',
  '--input': '#4b4a4a',
  '--calculator-body': '#4b4a4a',
  '--operators': '#4b4a4a',
  '--numbers': '#4b4a4a',
  '--letters': '#ffffff',
}

inputContainer.addEventListener('change', function () {
  const isChecked = inputContainer.checked
  if (isChecked) {
    changeTheme(darkTheme)
    sun.classList.remove('hidden')
    moon.classList.add('hidden')
  } else {
    changeTheme(lighTheme)
    sun.classList.add('hidden')
    moon.classList.remove('hidden')
  }
})

function changeTheme(theme) {
  for (let prop in theme) {
    changeProperty(prop, theme[prop])
  }
  saveThemToLocalStorage(theme)
}

function changeProperty(property, value) {
  rootElement.style.setProperty(property, value)
}

function saveThemToLocalStorage(theme) {
  localStorage.setItem('theme', JSON.stringify(theme))
}

function getThemeFromLocalStorage() {
  const theme = JSON.parse(localStorage.getItem('theme'))
  if (isThemeEqual(theme, darkTheme)) {
    inputContainer.checked = true
    sun.classList.remove('hidden')
    moon.classList.add('hidden')
  }
  changeTheme(theme)
}

function isThemeEqual(theme1, theme2) {
  for (let prop in theme1) {
    if (theme1[prop] !== theme2[prop]) {
      return false
    }
  }
  return true
}