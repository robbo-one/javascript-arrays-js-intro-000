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
function accessElementInArray(array,index){
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift()
}
function removeElementFromBeginningOfArray(array){
 return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop()
}
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
function  destructivelyAddElementToEndOfArray(array, element) {
  return [...array, element]
}
