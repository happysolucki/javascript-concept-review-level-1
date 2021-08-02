// Ex 1. Integer Numbers Range
const exercise1 = ( x1, x2 ) => {
  const arr = [];
  if ( x2 < x1 ) {
    return -1;
  } else {
    for ( let i = x1; i <= x2; i++) {
      arr.push(i);
    }
  }
  console.log('Ex 1');
  console.log(...arr);
}

// Ex 2. Multiplications table
const exercise2 = () => {
  console.log('Ex 2');
  for (let i = 1; i <= 10; i++) {
    let arr = [];
    for ( let j = 1; j <= 10; j++ ) {
      // console.log(i*j);
      arr.push(i*j);
    }
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
  const multiples = [];
  let elements = 'Elements :';
  for (let i = 0; i < 500; i++) {
    if (i % 23 === 0) {
      multiples.push(i);
      elements += ` ${i}`;
    }
  }
  console.log('Exercise 4');
  console.log(elements);
  console.log(`Sum : ${multiples.reduce((acc, curr) => acc + curr)}`);
}

// Ex 5. Max function
const exercise5 = (num1, num2) => {
  console.log('Exercise 5');
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
