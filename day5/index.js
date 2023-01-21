/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {
    if ((s[0] === ')') || (s[0] === '}') || (s[0] === ']') || (s[s.length - 1] === '(') || (s[s.length - 1] === '{') || (s[s.length - 1] === '[')) return false
    if (s.length % 2 === 1) return false

    let length = s.length / 2;

    for (let i = 0; i < length; i++) {
        s = s.replace("()", "");
        s = s.replace("{}", "");
        s = s.replace("[]", "");
    }

    return s.length === 0;
};

console.log(isValid("(]"));
