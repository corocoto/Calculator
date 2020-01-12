/**
 * @module
 * @class
 * @example
 */
export default class Mathematics {
	/**
	 * @method
	 * @description
	 * @param a
	 * @param b
	 * @return {*}
	 */
	add (a, b) {
		return a+b;
	}

	/**
	 * @method
	 * @description
	 * @param a
	 * @param b
	 * @return {number}
	 */
	subtract (a, b) {
		return a-b;
	}

	/**
	 * @method
	 * @description
	 * @param a
	 * @param b
	 * @return {number}
	 */
	multiply (a, b) {
		return a*b;
	}

	/**
	 * @method
	 * @description
	 * @param a
	 * @param b
	 * @return {number}
	 */
	divide (a, b) {
		return a/b;
	}

	/**
	 * @method
	 * @description
	 * @param num
	 * @return {number}
	 */
	sqr (num) {
		return Math.pow(number, 2);
	}

	/**
	 * @method
	 * @description
	 * @param num
	 * @return {string}
	 */
	sqrt (num) {
		return num>=0 ? Math.sqrt(num).toFixed(2) : 'Введены неверные данные';
	}
}


