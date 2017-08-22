//题目：给定一个字符串，字符串是由1-20中的数字组成，但是字符串漏掉了一个数，找到那个数并打印出来。
function main(str) {
    if (str.indexOf('12') === str.lastIndexOf("12")) return "12";
    else {
        for (let i=0;i<21;i++){
            if (str.includes(i.toString())) str = str.replace(i.toString());
            else return i;
        }
    }
}
let str1 = "19201234567891011121314151618";
console.log(main(str1));
let str2 = "19201234567891011171314151618";
console.log(main(str2));

//35分钟