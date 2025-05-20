import { describe, expect, it } from "vitest";
import { fizzbuzz } from '../src/fizzbuzz'


describe('fizzbuzz', (): void => {

    /* Los test cuando estamos convencidos que son correctos no hace falta que los mantengamos
       En este caso el primer test que haciamos que fizzbuzz fuera una funciona ya podemos anularlo

    it('should be a function', () : void => {
        expect(typeof fizzbuzz).toBe('function')
    })
    */

    it('should throw if not number is provided as parameter', (): void => {
        expect((): number | "fizz" => fizzbuzz()).toThrow()
    })

    it('should throw specific error message not a number is provided', (): void => {
        expect((): number | "fizz" => fizzbuzz(NaN)).toThrow('parameter provided must be a number')
    })

    it('should return 1 is number provided is 1', (): void => {
        expect(fizzbuzz(1)).toBe(1)
    })

    it('should return 2 is number provided is 2', (): void => {
        expect(fizzbuzz(2)).toBe(2)
    })

    it('should return "fizz" is number provided is 3', (): void => {
        expect(fizzbuzz(3)).toBe("fizz")
    })

    it('should return "fizz" is number provided is multiple of 3', (): void => {
        expect(fizzbuzz(6)).toBe("fizz")
        expect(fizzbuzz(9)).toBe("fizz")
        expect(fizzbuzz(12)).toBe("fizz")
    })
    /* Este test por ejemplo esta cubierto con otro test anterior
    it('should return 4 is number provided is 4',() : void => {
        expect(fizzbuzz(4)).toBe(4)
    })    
    */
    it('should return "buzz" is number provided is 5', (): void => {
        expect(fizzbuzz(5)).toBe("buzz")
    })

    it('should return "buzz" is number provided is multiple of 5', (): void => {
        expect(fizzbuzz(10)).toBe("buzz")
        expect(fizzbuzz(20)).toBe("buzz")
    })

    it('should return "fizzbuzz" is number provided is 15', (): void => {
        expect(fizzbuzz(15)).toBe("fizzbuzz")
    })
})