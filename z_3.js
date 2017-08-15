//题目：编写一个函数，判断输入的字符串是否是回文（一个字符串忽略大小写，正着读和反着读一模一样）。
function isPalindrome(inputStr) {
    let result = inputStr.split("");
    let boolean = (result.toString().toLowerCase() === result.reverse().toString().toLowerCase( ));
    return boolean;
}
console.log(isPalindrome(`asfjasgfk`));
console.log(isPalindrome(`reactcaer`));
console.log(isPalindrome(`ReACtcaer`));