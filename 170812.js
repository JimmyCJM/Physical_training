//题目: 打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位数字立方和等于该数本身。例如：153是一个"水仙花数"，因为153=1的三次方＋5的三次方＋3的三次方。

function main() {
    let result = [];
    for (let i=100;i<1000;i++){
        let sum = 0;
        let a = i;
        for (let j=1;j<4;j++){
            sum += Math.pow(a%10,3);
            a =parseInt(a/10);
        }
        if (i === sum) result.push(i);
    }
    return result;
}
console.log(main());