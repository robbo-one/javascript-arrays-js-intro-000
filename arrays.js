var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array,element){
return ["element", ...array];
}
function destructivelyAddElementToBeginningOfArray(array,element){
  var alteredArray = array.unshift(element);
  return alteredArray;
}

function addElementToEndOfArray(array, element) {
  var newArray = [...array,element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element);
}
