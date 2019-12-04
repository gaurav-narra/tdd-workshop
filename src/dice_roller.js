'use strict';

module.exports = class DiceRoller {
	static create(randomGen) {
		return new DiceRoller(randomGen);
	}

	constructor(randomGen) {
		this._rand = randomGen;
	}

	roll(dice) {
		// return this._rand.get(10);
		// return (dice.count)*(dice.die) + 
		let count = 0;
		for (let i = 0; i < dice.count; i++) {
			count += this._rand.get(dice.die);	
		}

		count+= dice.addend;
		return count;
	}
};
