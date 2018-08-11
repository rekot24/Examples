// Import entire module using:
const MessageMixer = require('./export.js');
// You can also use this syntax
import MessageMixer from './export';
// Import individually and using alias for replaceAllOccurrences
import { palindrome, pigLatin, replaceAll } from './messageMixer';
// Import by default using this:
import { encode } from './export';
import MessageMixer from './export';

function displayMessage() {
  // imported as a property, so appdend MessageMixer
  console.log(MessageMixer.replaceAllOccurrences("What is the color of the sky?", "sky", "water"));
  // imported individually so you don't append the module name
  console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
  console.log(palindrome("What is the color of the sky?"));
  console.log(pigLatin("What is the color of the sky", 'ay'));
}

displayMessage();
