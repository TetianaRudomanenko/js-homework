// 1
const weekDAY = new Array(7);
weekDAY[1] = "Понеділок";
weekDAY[2] = "Вівторок";
weekDAY[3] = "Середа";
weekDAY[4] = "Четвер";
weekDAY[5] = "П'ятниця";
weekDAY[6] = "Субота";
weekDAY[7] = "Неділя";

function returnDay(x) {
  if (x < 1 || x > 7) {
    return null;
  } else {
    return weekDAY[x];
  }
}

console.log(returnDay(3));

// 3

function fillArrayWithX() {
  var newArray = [];

  for (var i = 0; i < 10; i++) {
    newArray.push("x");
  }

  return newArray;
}

console.log(fillArrayWithX());

// 4

var a = 5; // You can change the value of 'a'

var ggg;

if (a > 0) {
  ggg = function () {
    alert("one!");
  };
} else {
  ggg = function () {
    alert("two!");
  };
}

ggg();

// 5

var ggg = function (func1, func2) {
  return func1() + func2();
};

var result = ggg(
  function () {
    return 3;
  },
  function () {
    return 4;
  }
);

console.log(result);

// 6

function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

var array1 = [1, 2, 3];
var array2 = [1, 2, 3];

var result = arraysAreEqual(array1, array2);
console.log(result);

// 7

function splitArrayIntoChunks(array, size) {
  var result = [];

  for (var i = 0; i < array.length; i += size) {
    var chunk = array.slice(i, i + size);
    result.push(chunk);
  }

  return result;
}

var originalArray = [1, 2, 3, 4, 5];
var chunkSize = 2;

var resultArray = splitArrayIntoChunks(originalArray, chunkSize);
console.log(resultArray);

// 2

function convertToCamelCase(inputString) {
  var words = inputString.split("_");

  for (var i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  var resultString = words.join("");

  return resultString;
}

var inputString = "var_text_hello";
var camelCaseString = convertToCamelCase(inputString);
console.log(camelCaseString);
