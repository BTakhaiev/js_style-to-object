'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .trim()
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration)
    .reduce((accumulator, declaration) => {
      const parts = declaration.split(':');

      if (parts.length === 2) {
        const key = parts[0].trim();
        const value = parts[1].trim();

        accumulator[key] = value;
      }

      return accumulator;
    }, {});
}

module.exports = convertToObject;
