const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

firstItem=function(arr, cb) {
// firstItem passes the first item of the given array to the callback function.
  return cb(arr);
}
result1=function(items) {
console.log(items[0]);
}
firstItem(items, result1);

getLength=function(arr, cb) {
// getLength passes the length of the array into the callback.  
  return cb(arr);
}
result2=function(items) {
  console.log(items.length);
}
getLength(items, result2);

last=function(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr);
}
result3=function(items) {
  console.log(items[items.length-1]);
}
last(items, result3);

sumNums=function(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x,y);
}
result4=function(x,y) {
  console.log(x+y);
}
sumNums(3,4,result4);

multiplyNums=function(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x,y);
}
result5=function(x,y) {
  console.log(x*y);
}
multiplyNums(3,3,result5);

contains=function(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.

  if(list.indexOf(item) === -1){
    return cb(false);
  } else {
    return cb(true);
  }
}

result6=(item,list)=>{
  console.log(item);
}
contains('Gum',items,result6);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
