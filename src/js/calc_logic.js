import Mathematics from './mathematics.js';

/**
 * @module
 * @class
 * @example
 */
export default class Calculator {
	/**
	 * @constructor
	 */
	constructor () {
		this.btns = [ ...document.getElementsByTagName('button') ];
		this.res = document.getElementById('result');
		this.mathField = document.getElementById('math');
		this.calc = this.lazify(new Mathematics());
		this.executeOperations = (operations, args) => operations.reduce((args, method) => [ method(...args) ], args);
		this.$ = Symbol('RESULT_ARGUMENT');
	}

	/**
	 * @method
	 * @description
	 */
	settings () {
		this.btns.forEach(btn => btn.addEventListener('click', this.btnClick.bind(this)));
	}

	/**
	 * @method
	 * @description
	 * @param {Object} target
	 */
	btnClick ({target}) {
		if (!isNaN(Number(target.textContent)) || target.textContent === '.') {
			this.numFormation(target.textContent);
		} else {
			this.funcButton(target.id);
		}
	}

	/**
	 * @method
	 * @description
	 * @param {String} symbol
	 */
	numFormation (symbol) {
		if (this.res.textContent === '0' && symbol !== '.') {
			this.res.innerHTML = symbol;
		} else {
			if (symbol === '.' && /\./g.test(this.res.textContent)) {
				return;
			}
			this.res.innerHTML += symbol;
		}
	}

	/**
	 * @method
	 * @description
	 * @param {String} id
	 */
	funcButton (id) {
		debugger;
	}

	/**
	 * @method
	 * @description
	 * @param {Object} instance
	 * @return {(function(...[*]): *)|(function(...[*]=): *)|*}
	 */
	lazify (instance) {
		const operations = [];
		const proxy = new Proxy(instance, {
			get (target, propKey) {
				const propOrMethod = target[propKey];


				if (propKey === 'run') {
					return (...args) => this.executeOperations(operations, args)[0];
				}

				if (!propOrMethod) {
					throw new Error('No property found.');
				}

				if (typeof propOrMethod !== 'function') {
					return target[propKey];
				}

				return (...args) => {
					operations.push(internalResult => propOrMethod.apply(
						target,
						[ ...args ].map(arg => arg === this.$ ? internalResult : arg),
					) );

					return proxy;
				};
			},
		});
		return proxy;
	}
}



/*
 *Const a = lazyCalc
 *.add(5, 9)
 *.divide($, 2)
 *.multiply($, 10);
 *
 *console.log(a.run());
 */
