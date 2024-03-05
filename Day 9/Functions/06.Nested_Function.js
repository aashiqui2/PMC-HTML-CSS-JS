function outerFunction() {
  let outerVariable = "I'm in the outer function";

  function innerFunction() {
    console.log(outerVariable);

    let innerVariable = "I'm in the inner function";
    console.log(innerVariable);
  }

  innerFunction();

  // console.log(innerVariable); // This would result in an error
}

outerFunction();
