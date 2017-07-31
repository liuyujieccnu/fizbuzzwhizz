'use strict';

describe('fizbuzzwhizz', () => {

    const spNum1 = 3;
    const spNum2 = 5;
    const spNum3 = 7;
    const result = fizbuzzwhizz(spNum1, spNum2, spNum3);

    // write your tests here...
    it('第3个学生报数结果正确', () => {
        expect(result[3 - 1]).toEqual('Fizz');
    });

    it('第5个学生报数结果正确', () => {
        expect(result[5 - 1]).toEqual('Buzz');
    });

    it('第7个学生报数结果正确', () => {
        expect(result[7 - 1]).toEqual('Whizz');
    });

    it('第9个学生报数结果正确', () => {
        expect(result[9 - 1]).toEqual('Fizz');
    });

    it('第15个学生报数结果正确', () => {
        expect(result[15 - 1]).toEqual('FizzBuzz');
    });

    it('第21个学生报数结果正确', () => {
        expect(result[21 - 1]).toEqual('FizzWhizz');
    });

    it('第35个学生报数结果正确', () => {
        expect(result[35 - 1]).toEqual('Fizz');
    });

    it('第63个学生报数结果正确', () => {
        expect(result[63 - 1]).toEqual('Fizz');
    });
});
