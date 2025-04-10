const calculateSquare = require('./index.js');

// test('menjumlahkan 1 + 2 = 3', () => {
//     expect(add(1,2)).toBe(3);
// });

describe('calculateSquare', () => {
    it('should return the square of x and y', () => {
       //given
       const x = 2;
       const y = 3;

       //when
       const result = calculateSquare(x, y);
       
       //then
       const expected = 6;

       expect(result).toBe(expected);
    });
});
