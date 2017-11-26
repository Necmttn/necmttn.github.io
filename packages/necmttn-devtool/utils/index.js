
/**
 * Input validator - ensure input is not empty.
 *
 * @param {string} name
 * @return {boolean|string}
 */

const inputRequired = name => {
  return value => (/.+/.test(value) ? true : `${name} is required`);
};


const generateSlug = (name) => {
	return name.toLowerCase().split(' ').join('-')
}

module.exports = {
  inputRequired,
  generateSlug
};
