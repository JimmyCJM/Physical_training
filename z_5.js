//题目：一个台阶总共有n级，如果一次可以跳1级，也可以跳2级，求总共有多少总跳法。
function main(n) {
    let result = 1;
    for (let i=n;i>1;i--){
        result *= i;
    }
    return result;
}
console.log(main(4));
console.log(main(8));