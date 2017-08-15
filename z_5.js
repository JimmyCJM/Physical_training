//题目：一个台阶总共有n级，如果一次可以跳1级，也可以跳2级，求总共有多少总跳法。
function main(n) {
    let arr = [0,1];
    if(n>1){
        for (let i=2;i<n+2;i++){
            arr.push(arr[i-2]+arr[i-1]);
        }
    }
    return arr[n+1];
}
console.log(main(2));
console.log(main(4));
console.log(main(8));