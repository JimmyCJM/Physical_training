/*给定编码如下，给出一个整数,返回解码方法的种数；
例如：
给你的数12，有两种方式解码 AB(12) 或者 L(12). 所以返回 2
1-> 'A’
2-> ‘B’
…
26-> ‘Z’*/
function main(number) {
    number = number.toString();
    let len = number.length;
    number = number.split("");
    let deletIndex = [];
    number.forEach((value,index) =>{
        if (parseInt(value) > 2) deletIndex.push(index);
    });
    for (let i=0;i<deletIndex.length;i++){
        if (parseInt(number[deletIndex[i]-1]+number[deletIndex[i]])>26)len --;
        if (parseInt(number[deletIndex[i]]+number[deletIndex[i]+1])>26)len --;
    }
    let arr = [1,2];
    if (len < 3) ;
    else {
        for (let i=2;i<len;i++){
            arr.push(arr[i-2]+arr[i-1]);
        }
    }
    if (len !== number.length && len !== 1)  return arr[len-1] + 1;
    else return arr[len-1];
}

console.log(main(16));
console.log(main(27));
console.log(main(112));
console.log(main(2727));
console.log(main(1616));
console.log(main(16161));
console.log(main(11111));
console.log(main(111111));
