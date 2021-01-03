/*
A Library to provide (and agument) missing methods in JS
SML 0.00 ==>
author :opeolluwa
date :Dec 27 2020
*/
  'use strict';
let Sml = {
  //split the stiring, capitalize the word then return it
  _capitalize() {
    let string = this.trim().split('');
    if (string[0]) {
      string[0] = string[0].toUpperCase();
    }
    return string[0] + string.slice(1).join('');
  },
  //check if a string has a sub string, return bool
  _hasSubStr(subStr) {
    return new RegExp(subStr).test(this);
  },
  //compare two string, accept one parameter
  _compareTo(string) {
    return this === string;
  },
  _compareToIgnoreCase(string){
    return this.toLowerCase()=== string.toLowerCase();
  },
  _endsWith(string){
  let thisStr = this.trim().split('');
  return thisStr.slice(thisStr.length - string.length).join('') ===string;
  }
}


Object.assign(String.prototype, Sml);

console.log('adeoye'._endsWith('oye'))