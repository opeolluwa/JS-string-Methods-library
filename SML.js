/*
A Library to provide (and agument) missing methods in JS
SML 0.00 ==>
author :opeolluwa
date :Dec 27 2020
*/


let Sml = {
  //split the stiring, capitalize the word then return it
  capitalize(string) {
    string = string.trim().split('');
    if (string[0]) {
      string[0] = string[0].toUpperCase();
    }
    return string[0] + string.slice(1).join('');
  },
  //check if a string has a sub string, return bool
  hasSubStr(subStr, str) {
    return new RegExp(subStr).test(str);
  }

}

 String.prototype.hasSubStr = function(subStr) {
  return new RegExp(subStr).test(this);
}

//Object.assign(String.prototype, hasSubStr);

console.log('adeoye'.hasSubStr('o'))
