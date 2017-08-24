/*实现一个left-pad函数
leftpad功能，就是字符串前面拼指定字符到固定长度，比如
leftpad(‘hello’,20,‘1’)，就要返回’111111111111111hello’
三个参数，
第一个：当前字符串；
第二个：需要返回字符串的长度
第三个：用来拼接的字符串*/
function leftpad(str1,number,str2) {
    let result = str2;
    number = number - str1.length;
    for(let i=0;i<number/str2.length;i++){
        result+=str2;
    }
    result = result.split("");
    result.splice(number-1,result.length-number);
    result = result.join("")+str1;
    return result;
}
console.log(leftpad('hello',20,'1'));