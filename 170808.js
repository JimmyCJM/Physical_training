//题目：将一个正整数分解质因数。例如：输入90,打印出90=2335。

function factor(number){
    var result = [];
    for(let i=2;i<=number;i++){
        if(number%i === 0)  {
            number = parseInt(number/i);
            result.push(i);
        }
    }
    return result;
}
