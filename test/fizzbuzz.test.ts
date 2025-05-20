import { describe, expect, it } from "vitest";

const fizzbuzz = (number) : number | "fizz" => {
    if ( typeof number !== 'number') throw new Error('parameter provided must be a number ')
    if ( Number.isNaN(number)) throw new Error('parameter provided must be a number')
    if ( number % 3 === 0) return 'fizz'
    return number
}

describe('fizzbuzz', () : void => {
    it('should be a function', () : void => {
        expect(typeof fizzbuzz).toBe('function')
    })

    it('should throw if not number is provided as parameter', () : void => {
        expect(() : number | "fizz" => fizzbuzz()).toThrow()
    })
    
    it('should throw specific error message not a number is provided',() : void => {
        expect(() : number | "fizz" => fizzbuzz(NaN)).toThrow('parameter provided must be a number')
    })

    it('should return 1 is number provided is 1',() : void => {
        expect(fizzbuzz(1)).toBe(1)
    })

    it('should return 2 is number provided is 2',() : void => {
        expect(fizzbuzz(2)).toBe(2)
    })

    it('should return 3 is number provided is 3',() : void => {
        expect(fizzbuzz(3)).toBe("fizz")
    })   
    
    it('should return 3 is number provided is multiple of 3',() : void => {
        expect(fizzbuzz(6)).toBe("fizz")
        expect(fizzbuzz(9)).toBe("fizz")
        expect(fizzbuzz(12)).toBe("fizz")
    })     

})