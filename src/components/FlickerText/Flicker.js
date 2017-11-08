export const defaultCharacters = "ᚠᚡᚢᚣᚤᚥᚦᚧᚨᚩᚪᚫᚬᚭᚮᚯᚰᚱᚲᚳᚴᚵᚶᚷᚸᚹᚺᚻᚼᚽᚾᚿᛀᛁᛂᛃᛄᛅᛆᛇᛈᛉᛊᛋᛌᛍᛎᛏᛐᛑᛒᛓᛔᛕᛖᛗᛘᛙᛚᛛᛜᛝᛞᛟᛠᛡᛢᛣᛤᛥᛦᛧᛨᛩᛪ᛫᛬᛭ᛮᛯᛰ";
export default class Flicker {
  constructor(min, max, delay, characters) {
    this.min = min;
    this.max = max;
    this.delay = delay;
    this.characters = characters;
  }

  getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  randomCharacter = () =>
    this.characters[Math.floor(Math.random() * this.characters.length)];

  replaceAt = (text, character, index) =>
    text.substr(0, index) + character + text.substr(index + character.length);

  init = (str, cb) => {
      if (str.props) {
        if (typeof str.props.children !== 'string') {
          return str;
        }
        str = str.props.children;
      }
      str = str.trim();
      const bank = [];
      let done = 1;
      const newStr = str;

      for (let i = 0; i < str.length; i++) {
        bank[i] = this.getRandomInt(this.min, this.max);
      }
      this.mix(str, str, newStr, done, bank, this.delay, cb);
  }

  mix = (origStr, str, newStr, done, bank, delay, cb) => {
    for (let i = 0; i < str.length; i++) {
      if (bank[i] !== 0) {
        done = 0;
        if (str[i] !== " ") {
          newStr = this.replaceAt(newStr, this.randomCharacter(), i);
        } else {
          newStr = this.replaceAt(newStr, " ", i);
        }
        bank[i]--;
      } else {
        newStr = this.replaceAt(newStr, str[i], i);
      }
    }

    origStr = newStr;
    if (done === 0 && (str !== newStr)) {
      setTimeout(() => {
        return this.mix(origStr, str, newStr, done, bank, delay, cb);
      }, delay);
    }
    cb(origStr);
  }
}
