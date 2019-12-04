'use strict';

module.exports = class RandomGenerator {
	static create() {
		const randFunc = (number) => {
			return Math.floor(Math.random()*number) + 1;
		};
		return new RandomGenerator(randFunc);
	}

	static createNull(stubNumber) {
		const randFunc = () => {
			return stubNumber;
		};
		return new RandomGenerator(randFunc);
	}

	constructor(randFunc) {
		this._func = randFunc;
	}

	get(number) {
		return this._func(number);
	}
};
