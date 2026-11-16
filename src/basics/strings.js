/**
 * Find and replace in the provided string, but preserving case
 * If the new word is longer than the replaced one, ignore tail characters
 * @param {string} needle
 * @param {string} haystack
 * @param {string} newWord
 * @return {string} the resulting string, with all needle words transformed to newWord
 */
export function findAndReplacePreservingCase(needle, haystack, newWord) {
  if (typeof needle !== "string" || typeof newWord !== "string") {
    throw new Error();
  } else {
    return haystack.replace(new RegExp(needle, "gi"), (match) => {
      let result = "";
      for (let i = 0; i < Math.min(match.length, newWord.length); i++) {
        if (match[i] === match[i].toUpperCase()) {
          result = result + newWord[i].toUpperCase();
        } else {
          result = result + newWord[i].toLowerCase();
        }
      }
      return result;
    });
  }
}
