// Copyright Titanium I.T. LLC.
"use strict";

const assert = require("./assert.js");
const RandomGenerator = require("./random_generator");

describe("random generator", function() {

	it("random number should be less than input", function() {
		const rand = RandomGenerator.create();
		assert.isTrue(rand.get(20) <= 20);

		assert.isTrue(rand.get(5) <= 5);
	});

	it("random number should be a whole number greater than one", function() {
		const rand = RandomGenerator.create();
		const randomNumber = Math.floor(rand.get(20));
		assert.isTrue(randomNumber >= 1);
	});

	it("should generate random numbers", function () {
		let res;
		for(let i = 1; i < 1000; i++) {
			const rand = RandomGenerator.create();
			res = rand.get(i);
			assert.isTrue(res <= i);
		}
	});
});