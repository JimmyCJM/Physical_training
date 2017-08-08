//题目：将一个正整数分解质因数。例如：输入90,打印出90=2335。
function factor(number){
    var num = number;
    var result = [];
    for(let i=2;i<=number;i++){
        for (let j=i;j<=number;j++){
            if(number%i === 0)  {
                result.push(i);
                number = parseInt(number/i);
            }
        }
    }
    var sum = result[0];
    for(let i=1;i<result.length;i++){
        sum += `${result[i]}`;
    }
    result = `${num}=${sum}`;
    return result;
}
console.log(factor(77));
console.log(factor(90));
console.log(factor(11111));
