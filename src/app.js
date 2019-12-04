// Copyright Titanium I.T. LLC.
"use strict";

const CommandLine = require("./command_line.js");
const DiceRoller = require("./dice_roller.js");
const RandomGenerator = require("./random_generator.js");
const parser = require("./parser");

module.exports = class App {

	constructor(cli = CommandLine.create(), randGen = RandomGenerator.create()) {
		this._cli = cli;
		this._randGen = randGen;
	}

	run() {
		const input = this._cli.arg();
		const dice = parser.parse(input);
		const diceRoller = DiceRoller.create(this._randGen);
		const output = diceRoller.roll(dice);
		this._cli.output(output);
	}
};


