function fibonacci(b) {
    if (b < 1) return 0;
    if (b <= 2) return 1;
    return fibonacci(b - 1) + fibonacci(b - 2);
  }
  
  function isFibonacci(b) {
      let i = 1;
      while (fibonacci(i) <= b) {
          if (fibonacci(i) === b) return 'pertence';
          i++;
      }
      return 'Não pertence';
  }
  
  console.log(isFibonacci(1));