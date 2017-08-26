/*给你一个整数n. 从 1 到 n 按照下面的规则打印每个数：
如果这个数被3整除，打印fizz.
如果这个数被5整除，打印buzz.
如果这个数能同时被3和5整除，打印fizz buzz.8*/
function main(n) {
    let arr = [];
    for (let i=1;i<n+1;i++){
        arr.push(i);
    }
    arr = arr.map(value =>{
        if (value % 3 === 0 && value % 5 === 0){
            return `fizz buzz`;
        }
        else if (value % 3 === 0){
            return `fizz`;
        }
        else if (value % 5 === 0){
            return `buzz`;
        }
        else return value;
    })
    return arr;
}

console.log(main(15));
console.log(main(5));
console.log(main(20));