/**
 * @param {string[]} words
 * @return {string[]}
 * 解题思路:匹配正则表达式
 * 正则表达式格式：/表达式/模式修饰符
 * i 模式修饰符:执行对大小写不敏感的匹配
 * [qwertyuiop] 执行以方括号之间的【任意】字符的匹配
 * ^[asdfghjkl] 执行以方括号之间的任意字符为开头的匹配
 * ^[asdfghjkl]+ 执行以方括号之间的任意字符为开头,并且必须出现一次或者多次的匹配
 * ^[qwertyuiop]+$  执行以方括号之间的任意字符为结尾的匹配
 *
 *  利用.filter方法遍历words数组中的每一个单词，遍历过程中用正则表达式进行匹配,匹配成功返回当前遍历的对象，最终返回整个符合条件的数组
 */
let findWords = function (words) {

    return words.filter(x => /(^[qwertyuiop]+$)|(^[asdfghjkl]+$)|(^[zxcvbnm]+$)/i.test(x))
};

console.log(findWords(["Hello", "Alaska", "Dad"]));