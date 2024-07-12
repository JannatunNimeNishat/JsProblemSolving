/*
3.Task: Function Composition

Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.
*/

const square = (x) => {
    return x * x;
  };
  

  const double = (x) => {
    return x * 2;
  };
  

  const add5 = (x) => {
    return x + 5;
  };
  

  const squareDoubleAndAdd5 = (x) => {
    return add5(double(square(x)));
  };
  

  const number = 3;
  const result = squareDoubleAndAdd5(number);
  console.log(`Result for ${number}: ${result}`); 
  