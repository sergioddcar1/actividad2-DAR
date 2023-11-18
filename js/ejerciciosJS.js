var palindrome = document.getElementById("palindrome");
var palindromeButton = document.getElementById("palindrome-button");
var answer1 = document.getElementById("answer1");

palindromeButton.addEventListener("click", function () {
  var word = palindrome.value;

  var count = 0;

  if (word.length % 2 == 0) {
    for (var i = 0; i < word.length / 2; i++) {
      if (word[i + word.length / 2] == word[word.length / 2 - 1 - i]) {
        count++;
      }
    }
    if (count == word.length / 2) {
      answer1.innerHTML = "¡" + word + " es un palíndromo!";
    } else {
      answer1.innerHTML = "¡" + word + " no es un palíndromo!";
    }
  } else {
    for (var i = 0; i < Math.floor(word.length / 2); i++) {
      if (
        word[i + Math.floor(word.length / 2) + 1] ==
        word[Math.floor(word.length / 2) - 1 - i]
      ) {
        count++;
      }
    }
    if (count == Math.floor(word.length / 2)) {
      answer1.innerHTML = "¡" + word + " es un palíndromo!";
    } else {
      answer1.innerHTML = "¡" + word + " no es un palíndromo!";
    }
  }
});

var maxButton = document.getElementById("max-button");
var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var answer2 = document.getElementById("answer2");

maxButton.addEventListener("click", function () {
  var n1 = parseInt(number1.value);
  var n2 = parseInt(number2.value);

  if (n1 > n2) {
    answer2.innerHTML = "El número mayor es: " + n1;
  } else if (n1 < n2) {
    answer2.innerHTML = "El número mayor es: " + n2;
  } else if (n1 === n2) {
    answer2.innerHTML = "Los números son iguales";
  } else {
    answer2.innerHTML = "Los caracteres no son numéricos";
  }
});

var vocals = document.getElementById("vocals");
var vocalButton = document.getElementById("vocal-button");
var answer3 = document.getElementById("answer3");

vocalButton.addEventListener("click", function () {
  var text = vocals.value;
  text = text.toLowerCase();
  var n = text.length;
  var vocalArray = [];
  var vocalText = "";

  if (n > 160) {
    for (var i = 0; i < n; i++) {
      if (text.charAt(i) == "a") {
        vocalArray.push(text.charAt(i));
      } else if (text.charAt(i) == "e") {
        vocalArray.push(text.charAt(i));
      } else if (text.charAt(i) == "i") {
        vocalArray.push(text.charAt(i));
      } else if (text.charAt(i) == "o") {
        vocalArray.push(text.charAt(i));
      } else if (text.charAt(i) == "u") {
        vocalArray.push(text.charAt(i));
      }
    }
    vocalText = vocalArray.join("");
    answer3.innerHTML = "Las vocales del texto son: " + vocalText;
  } else {
    answer3.innerHTML = "La longitud del texto es muy corta";
  }
});


