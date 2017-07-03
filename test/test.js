const assert = require("chai").assert;
const myprimes = require('../src/getprimes');

describe("getprimes", function(){

	describe("handle valid input", function(){
		it ("should return [2,3,5] as primes for 5",function(){
			assert.deepEqual(myprimes(5), [2,3,5]);
		});//end of it block

		it ("should return [2,3,5,7] as primes for 8",function(){
			assert.deepEqual(myprimes(8), [2,3,5,7]);
		});//end of it block

		it ("should return [2,3,5,7,11] as primes for 12",function(){
			assert.deepEqual(myprimes(12), [2,3,5,7,11]);
		});//end of it block

		it ("should return [2,3,5,7,11,13] as primes for 5",function(){
			assert.deepEqual(myprimes(14), [2,3,5,7,11,13]);
		});//end of it block

		it ("should return [2,3,5,7,11,13,17] as primes for 5",function(){
			assert.deepEqual(myprimes(18), [2,3,5,7,11,13,17]);
		});//end of it block

		it ("should return [2,3,5,7,11,13,17,19] as primes for 5",function(){
			assert.deepEqual(myprimes(20), [2,3,5,7,11,13,17,19]);
		});//end of it block

		it ("should return undefined as primes for -5",function(){
			assert.deepEqual(myprimes(-5), "Input must be a number");
		});//end of it block

		it ("should return not a prime number primes for 0",function(){
			assert.deepEqual(myprimes(0), "Input must be a number");
		});//end of it block

		it ("should return not a prime number ",function(){
			assert.deepEqual(myprimes(1), "Input must be a number");
		});//end of it block	

		it ("should return [2,3,5,7,11,13,17,19] as primes for 25",function(){
			assert.deepEqual(myprimes(25), [2,3,5,7,11,13,17,19,23]);
		});//end of it bloc

		});//end of inner describe block

	}); //end of describe 