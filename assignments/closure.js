// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function sayHello() {
  const hi = () =>{ console.log(hello); }
    const hello = 'Hello, world!';
  return hi;
}
const myClosure = sayHello(); 
myClosure(); 

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;

  const addOne = () => {
    console.log(++count);
  }

  return addOne;
}

const newCounter = counter();
newCounter()
newCounter()
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2



/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
