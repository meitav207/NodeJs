"use strict";
// Meitav && Ben
//לולאה להדפסת כל המספרים הראשוניים בין 2 ל-237
for (let i = 2; i <= 237; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
//פונקציה למציאת מספר ראשוני
function isPrime(num) {
  for (let j = 2; j <= Math.sqrt(num); j++) {
    if (num % j === 0) return false;
  }
  return true;
}
