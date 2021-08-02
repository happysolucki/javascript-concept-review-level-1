// Ex 1. Integer Numbers Range
const exercise1 = ( x1, x2 ) => {
  // make empty array
  const arr = [];
  if ( x2 < x1 ) {
    // if x2 is less than x1, return -1
    return -1;
  } else {
    for ( let i = x1; i <= x2; i++) {
      // iterate through range of x1 and x2; push index th arr array
      arr.push(i);
    }
  }
  console.log('Exercise 1');
  console.log(...arr);
  return arr;
}

// Ex 2. Multiplications table
const exercise2 = () => {
  console.log('Exercise 2');
  for (let i = 1; i <= 10; i++) {
    // create empty array
    let arr = [];
    for ( let j = 1; j <= 10; j++ ) {
      // in nested loop, push result of i times j to arr array
      arr.push(i*j);
    }
    // log arr array that contains values for nested loop using spread operator
    console.log(...arr);
  }
}

// Ex 3. Multiplication table on demand
const exercise3 = (num) => {
  console.log('Exercise 3');
  for (let i = 1; i <= 10; i++) {
    console.log(num * i);
  }
}

// Ex 4. Calculations and Operations
const exercise4 = () => {
  // create empty array and log string
  const multiples = [];
  let elements = 'Elements :';
  for (let i = 0; i < 500; i++) {
    // if i divided by 23 has remainder of zero
    if (i % 23 === 0) {
      // push current index into multiples array and concatenate it to elements string
      multiples.push(i);
      elements += ` ${i}`;
    }
  }
  console.log('Exercise 4');
  console.log(elements);
  // sum multiples array using reduce method
  console.log(`Sum : ${multiples.reduce((acc, curr) => acc + curr)}`);
}

// Ex 5. Max function
const exercise5 = (num1, num2) => {
  console.log('Exercise 5');
  // guard clauses
  if (num1 === num2) return console.log('The numbers you entered are equal to each other');
  if (num1 > num2) return console.log(`The number ${num1} is greater than the number ${num2}`);
  if (num1 < num2) return console.log(`The number ${num1} is lesser than the number ${num2}`);
}

const main = () => {
  exercise1(5,13);
  exercise2();
  exercise3(7);
  exercise4();
  exercise5(5,9);
}

main();
