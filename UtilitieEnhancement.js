/**
 * 
 * String functions
 * 
 */

/**
 * Converts string to integer
 * @param {Number} radix 
 */
String.prototype.toInt = function (radix = 10) {
    return parseInt(this, radix);
}
  
/**
 * Converts string to float
 */
String.prototype.toFloat = function () {
    return parseFloat(this);
}

/**
 * Logs the string to console
 */
String.prototype.log = function () {
    console.log(this.toString());
}

/**
 * 
 * Object functions
 * 
 */

/**
 * Stringifies the object
 */
Object.prototype.stringify = function () {
    return JSON.stringify(this);
}
