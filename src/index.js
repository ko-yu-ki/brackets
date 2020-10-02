const { SEMVER_SPEC_VERSION } = require("semver");

module.exports = function check(str, bracketsConfig) {
    let stack = new Array;
    let quantOfDiffBrackets = bracketsConfig.length;
    let openBrackets = new Array;
    let closeBrackets = new Array;
    for (let i = 0; i < quantOfDiffBrackets; i++) {
        openBrackets.push(bracketsConfig[i][0]);
        closeBrackets.push(bracketsConfig[i][1]);
    }
    for (let i = 0; i < str.length; i++) {
          if (openBrackets.indexOf(str[i]) !==-1 && closeBrackets.indexOf(str[i]) === -1){
            stack.push(str[i]);
           }
          else if (openBrackets.indexOf(str[i]) !==-1 && closeBrackets.indexOf(str[i]) !== -1 && stack[stack.length-1] !== str[i]) {
            stack.push(str[i]);
          }
          else if (closeBrackets.indexOf(str[i]) !== -1 && stack[stack.length-1] === openBrackets[closeBrackets.indexOf(str[i])]) { 
            stack.pop();  
          }  
        else {
          stack.push(str[i]);
        }
    }
    if (stack.length === 0) { console.log('true');return true; }
    else { console.log('false');return false; }
}
