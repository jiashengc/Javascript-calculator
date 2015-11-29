$(document).ready(function() {
// Global variables
var arr = [];
var result = 0;
var temp = "";
var start = false;

// Button handlers
$(".zero").on("click", function() {
    if (start == false) {
      $(".calculator-input").empty();
      $(".calculator-input").append(document.createTextNode("0"));
      temp += 0;
      start = true;
    }
    else if (start == true && temp.length < 12) {
      $(".calculator-input").append(document.createTextNode("0"));
      temp += 0;
    }
  });

$(".one").on("click", function() {
    if (start == false) {
      $(".calculator-input").empty();
      $(".calculator-input").append(document.createTextNode("1"));
      temp += 1;
      start = true;
    }
    else if (start == true && temp.length < 12) {
      $(".calculator-input").append(document.createTextNode("1"));
      temp += 1;
    }
  });

$(".two").on("click", function() {
    if (start == false) {
      $(".calculator-input").empty();
      $(".calculator-input").append(document.createTextNode("2"));
      temp += 2;
      start = true;
    }
    else if (start == true && temp.length < 12) {
      $(".calculator-input").append(document.createTextNode("2"));
      temp += 2;
    }
  });

$(".three").on("click", function() {
    if (start == false) {
      $(".calculator-input").empty();
      $(".calculator-input").append(document.createTextNode("3"));
      temp += 3;
      start = true;
    }
    else if (start == true && temp.length < 12) {
      $(".calculator-input").append(document.createTextNode("3"));
      temp += 3;
    }
  });

$(".four").on("click", function() {
    if (start == false) {
      $(".calculator-input").empty();
      $(".calculator-input").append(document.createTextNode("4"));
      temp += 4;
      start = true;
    }
    else if (start == true && temp.length < 12) {
      $(".calculator-input").append(document.createTextNode("4"));
      temp += 4;
    }
  });

$(".five").on("click", function() {
    if (start == false) {
      $(".calculator-input").empty();
      $(".calculator-input").append(document.createTextNode("5"));
      temp += 5;
      start = true;
    }
    else if (start == true && temp.length < 12) {
      $(".calculator-input").append(document.createTextNode("5"));
      temp += 5;
    }
  });

$(".six").on("click", function() {
    if (start == false) {
      $(".calculator-input").empty();
      $(".calculator-input").append(document.createTextNode("6"));
      temp += 6;
      start = true;
    }
    else if (start == true && temp.length < 12) {
      $(".calculator-input").append(document.createTextNode("6"));
      temp += 6;
    }
  });

$(".seven").on("click", function() {
    if (start == false) {
      $(".calculator-input").empty();
      $(".calculator-input").append(document.createTextNode("7"));
      temp += 7;
      start = true;
    }
    else if (start == true && temp.length < 12) {
      $(".calculator-input").append(document.createTextNode("7"));
      temp += 7;
    }
  });

$(".eight").on("click", function() {
    if (start == false) {
      $(".calculator-input").empty();
      $(".calculator-input").append(document.createTextNode("8"));
      temp += 8;
      start = true;
    }
    else if (start == true && temp.length < 12) {
      $(".calculator-input").append(document.createTextNode("8"));
      temp += 8;
    }
  });

$(".nine").on("click", function() {
    if (start == false) {
      $(".calculator-input").empty();
      $(".calculator-input").append(document.createTextNode("9"));
      temp += 9;
      start = true;
    }
    else if (start == true && temp.length < 12) {
      $(".calculator-input").append(document.createTextNode("9"));
      temp += 9;
    }
  });

$(".dot").on("click", function() {
    if (start == false) {
      $(".calculator-input").empty();
      $(".calculator-input").append(document.createTextNode("."));
      temp += '.';
      start = true;
    }
    else {
      $(".calculator-input").append(document.createTextNode("."));
      temp += '.';
    }
  });

$(".clear-entry").on("click", function() {
    if (start == true) {
      $(".calculator-input").empty();
      temp = "";
      start = false;
    }
    else {
      $(".calculator-input").empty();
      temp = ""
    }
  });

$(".all-cancel").on("click", function() {
    if (start == true) {
      $(".calculator-input").empty();
      arr = [];
      temp = "";
      start = false;
    }
    else {
      $(".calculator-input").empty();
      arr = [];
      temp = ""
    }
  });

$(".multiply").on("click", function() {
    if (start == true) {
      $(".calculator-input").empty();
      $(".calculator-input").append(document.createTextNode("×"));
      arr.push(temp);
      arr.push("*");
      temp = "";
      start = false;
    }
  });

$(".divide").on("click", function() {
    if (start == true) {
      $(".calculator-input").empty();
      $(".calculator-input").append(document.createTextNode("÷"));
      arr.push(temp);
      arr.push("/");
      temp = "";
      start = false;
    }
  });

$(".divide").on("click", function() {
    if (start == true) {
      $(".calculator-input").empty();
      $(".calculator-input").append(document.createTextNode("÷"));
      arr.push(temp);
      arr.push("/");
      temp = "";
      start = false;
    }
  });

$(".plus").on("click", function() {
    if (start == true) {
      $(".calculator-input").empty();
      $(".calculator-input").append(document.createTextNode("+"));
      arr.push(temp);
      arr.push("+");
      temp = "";
      start = false;
    }
  });

$(".minus").on("click", function() {
    if (start == true) {
      $(".calculator-input").empty();
      $(".calculator-input").append(document.createTextNode("-"));
      arr.push(temp);
      arr.push("-");
      temp = "";
      start = false;
    }
  });

$(".modolus").on("click", function() {
    if (start == true) {
      $(".calculator-input").empty();
      $(".calculator-input").append(document.createTextNode("%"));
      arr.push(temp);
      arr.push("%");
      temp = "";
      start = false;
    }
  });

$(".math-random").on("click", function() {
    if (start == false) {
      $(".calculator-input").empty();
      $(".calculator-input").append(document.createTextNode("#R"));
      temp += Math.random();
      start = true;
    }
    else if (start == true && temp.length <= 6) {
      $(".calculator-input").append(document.createTextNode("#R"));
      temp += Math.random();
    }
  });

$(".equal").on("click", function() {
  if (start = true) {
    $(".calculator-input").empty();
    arr.push(temp);
    temp = "";
    temp = arr.join("");
    result = eval(temp).toPrecision(8);
    
    $(".calculator-input").append(document.createTextNode(result));
    temp = "";
    arr = [];
    start = false;
  }
  });
});
