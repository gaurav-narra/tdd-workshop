// Copyright Titanium I.T. LLC.
"use strict";

const assert = require("./assert.js");
const App = require("./app.js");
const CommandLine = require("./command_line.js");
const RandomGenerator = require("./random_generator.js");

describe("Application", function() {

	it("dice roller input", function() {
		const cli = CommandLine.createNull("4d6+4");
		const randGen = RandomGenerator.createNull(3);
		const app = new App(cli, randGen);
		app.run();
		assert.equal(cli.getLastOutput(), 16);
	});

});