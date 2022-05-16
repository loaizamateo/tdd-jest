describe('Group 1', ()=>{

  beforeAll(()=>{
    console.log('beforeAll 1');
    //up db
  })

  afterAll(()=>{
    console.log('afterAll 1');
    //down db
  })

  beforeEach(()=>{
    console.log('beforeEach');
    //up db
  })

  afterEach(()=>{
    console.log('afterEach');
    //up db
  })

  test('case 1', ()=>{
    console.log('case 1');
    expect(1 + 1).toBe(2);
  })

  test('case 2', ()=>{
    console.log('case 2');
    expect(3 - 1).toBe(2);
  })

  describe('Group 2', ()=>{
    beforeAll(()=>{
      console.log('beforeAll 2');
      //up db
    })

    afterAll(()=>{
      console.log('afterAll 2');
      //down db
    })

    console.log('case 3');
    test('case 3', ()=>{
      expect(1 + 1).toBe(2);
    })

    test('case 4', ()=>{
    console.log('case 4');
      expect(3 - 1).toBe(2);
    })
  })
})
