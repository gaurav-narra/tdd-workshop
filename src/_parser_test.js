"use strict";

const assert = require("./assert");
const parser = require('./parser');

describe("dice roll parse", function() {

	it("parses the cli arguments", function() {
		let dice = parser.parse('3d6+4');
		assert.deepEqual(dice, {
			count: 3,
			die: 6,
			addend: 4
		});

		dice = parser.parse('d6+7');
		assert.deepEqual(dice, {
			count: 1,
			die: 6,
			addend: 7
		});
	});

});
