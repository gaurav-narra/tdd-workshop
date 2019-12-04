'use strict';

	
const parse = (expression) => {
	const regex = /^(\d*)d(\d+)([+-]\d+)?$/;

	const groups = regex.exec(expression);
	if (groups === null) fail();

	let [ ignored, count, die, addend ] = groups;
	if (count === "") count = 1;
	if (addend === undefined) addend = 0;

	[ count, die, addend ] = [ +count, +die, +addend ];   // convert strings to numbers
	if (count < 1) fail();
	if (die < 1) fail();

	return { count, die, addend };


	function fail() {
		throw new Error(`Invalid dice expression: ${expression}`);
	}
};

module.exports = {
	parse
};