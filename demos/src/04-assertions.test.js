// matchers
test('test obj', ()=>{
  const obj = { name: 'Mateo'};
  obj.lastname = 'Loaiza Rios';
  expect(obj).toEqual({ name: 'Mateo', lastname: 'Loaiza Rios'});
})

test('test null', ()=>{
  const obj = null;
  expect(obj).toBeNull();
  expect(obj).toBeDefined();
  expect(obj).not.toBeUndefined();
})

test('test booleans', ()=>{
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
})

test('test string', ()=>{
  expect('Christoph').toMatch(/stop/);
})

test('test list / arrays', ()=>{
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(2);
})
