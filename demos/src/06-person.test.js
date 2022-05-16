const Person = require('./06-person');

describe('Test for person', ()=>{
  let person;
  // Arrange
  beforeEach(()=>{
    person = new Person('Mateo', 45, 1.74)
  })

  test('should return down', ()=>{
    // Arrange
    person.weight = 45;
    // Act
    const imc = person.calcIMC();
    // Assert
    expect(imc).toBe('down');
  })

  test('should return normal', ()=>{
    person.weight = 72;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  })
})
