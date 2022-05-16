const {sum, multiply, divide} = require('./02-maths');

describe('Test for math', ()=>{

  describe('Test for sum', ()=>{
    test('sum two values', () =>{
      expect(sum(1, 2)).toBe(3);
    });
  })

  describe('Test for multiply', ()=>{
    test('multiply two values', () =>{
      expect(multiply(1, 2)).toBe(2);
    });
  })

  describe('Test for divide', ()=>{
    test('divide two values', () =>{
      const rta = divide(10, 2);
      expect(rta).toBe(5);
    });

    test('divide two values and return null', () =>{
      const rta2 = divide(10, 0);
      expect(rta2).toBeNull();
    });
  })
})


