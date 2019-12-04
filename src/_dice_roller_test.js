"use strict";

const assert = require("./assert");
const DiceRoller = require('./dice_roller');
const RandomGenerator = require("./random_generator");

describe("dice roller generation", function() {

	it("should roll a random value", function() {
		const randGen = RandomGenerator.createNull(3);
		const diceRoller = DiceRoller.create(randGen);
		const res = diceRoller.roll({
			count: 3,
			die: 4,
			addend: 5
		});

		assert.equal(res, 14);
	});

});
