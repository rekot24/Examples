// This declaration makes the module an object
let MessageMixer = {};

// Functions can be called using 3 different variaties
// 1
function palindrome(string) {
  return string + " " + MessageMixer.reverseWord(string);
};
// 2
const pigLatin = (sentence, character) => {
  return sentence.split(" ").join(character + " ");
};
// 3
const replaceAllOccurrences = function(string, toBeReplaced, replaceWith) = {
  return string.split(toBeReplaced).join(replaceWith);
};

// To make an o function the property of the object, add the object name
MessageMixer.replaceFirstOccurence(string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};

// Can also export by default using export in the Function
export function encode(string) {
  let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
    for (let key in replacementObject) {
      string = replaceAllOccurrences(string, key, replacementObject[key]);
    }
    return string;
};

// Using this method will export all properties with this statement
module.exports = MessageMixer;
// You can also export it by default
export default MessageMixer;
// You have to individually export non-property Functions
// Also using an alias for replaceAllOccurrences
export { palindrome, pigLatin, replaceAllOccurrences as replaceAll};
