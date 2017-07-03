const assert = require("chai").assert;
const myprimes = require(test.js);

describe("getprimes", function(){

	describe("handle valid input", function{
		it ("should return [2,3,5] as primes for 5",function){
			assert.equal(myprimes.getprimes(6), [2,3,5]);
		});//end of it block


	describe("handle valid input", function{
		it ("should return [2,3,5,7] as primes for 5",function){
			assert.equal(myprimes.getprimes(8), [2,3,5,7]);
		});//end of it block

	describe("handle valid input", function{
		it ("should return [2,3,5,7,11] as primes for 5",function){
			assert.equal(myprimes.getprimes(12), [2,3,5,7,11]);
		});//end of it block

	describe("handle valid input", function{
		it ("should return [2,3,5,7,11,13] as primes for 5",function){
			assert.equal(myprimes.getprimes(14), [2,3,5,7,11,13]);
		});//end of it block

	describe("handle valid input", function{
		it ("should return [2,3,5,7,11,13,17] as primes for 5",function){
			assert.equal(myprimes.getprimes(18), [2,3,5,7,11,13,17]);
		});//end of it block

	describe("handle valid input", function{
		it ("should return [2,3,5,7,11,13,17,19] as primes for 5",function){
			assert.equal(myprimes.getprimes(20), [2,3,5,7,11,13,17,19]);
		});//end of it block

		describe("handle invalid input", function{
		it ("should return undefined as primes for -5",function){
			assert.equal(myprimes.getprimes(-5), "negative numbers are not primes");
		});//end of it block

			describe("handle ivalid input", function{
		it ("should return not a prime number primes for 0",function){
			assert.equal(myprimes.getprimes(0), "not a prime number");
		});//end of it block

			describe("handle valid input", function{
		it ("should return not a prime number ",function){
			assert.equal(myprimes.getprimes(1), "not a prime number");
		});//end of it block	

			describe("handle valid input", function{
		it ("should return [2,3,5,7,11,13,17,19] as primes for 25",function){
			assert.equal(myprimes.getprimes(25), [2,3,5,7,11,13,17,19,23]);
		});//end of it block




		});//end of inner describe block



	}); //end of describe