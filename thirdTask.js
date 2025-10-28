"use strict";
//Meitav && Ben 
const arr = [10, 2, 30, 4, 0, 600, 0, 80, 9];//arr
let zeroCount = 0;
for (let i = 0; i < arr.length; i++) { // פונקציה שעוברת על איברי המערך וסופרת 0
  let Number = arr[i];
  zeroCount += Number === 0 ? 1 : 0;
}
console.log(`Number of zeros in the array: ${zeroCount}`);
