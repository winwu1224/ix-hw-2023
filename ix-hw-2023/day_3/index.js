// fibonacci sequence

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181
function fibonacci() {
  let firstNum = 0;
  let secondNum = 1;
  let numCount = 0;
  console.log(firstNum);
  console.log(secondNum);
  while (numCount <= 7) {
    let total = firstNum + secondNum;
    console.log(total);
    firstNum = secondNum;
    secondNum = total;
    numCount++;
  }
}

fibonacci();

//Joey's sequence
function fib() {
  let counter = 0;
  let prev = 1;
  let next = 1;

  console.log(0);
  console.log(prev);
  console.log(next);

  while (counter < 7) {
    let num = prev + next;
    prev = next;
    next = num;
    console.log(num);
    counter++;
  }
}

fib();
