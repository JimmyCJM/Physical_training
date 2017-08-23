//题目：给定一个字符串，字符串是由1-20中的数字组成，但是字符串漏掉了一个数，找到那个数并打印出来。
function main(str) {
    let arr = [];
    let result = 0;
    for (let i=20;i>0;i--) {
        if (str.includes(i.toString())) str = str.replace(i.toString());
        else arr.push(i);
    }
    if (arr.toString().length === 2) return arr.toString();
    else {
        result = `${arr[0]}${arr[1]}`;
        if (parseInt(result)>20) return `${arr[1]}${arr[0]}`;
        else return result;
    }
}
let str1 = "19201234567891011121314151618";
console.log(main(str1));
let str2 = "19201234567891011171314151618";
console.log(main(str2));

//35分钟