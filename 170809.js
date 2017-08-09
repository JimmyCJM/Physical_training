//题目：查找斐波纳契数列中第 N 个数。

function find(N) {
    var result = 0;
    var arr = [0,1];
    if(N>2){
        for(let i=2;i<N;i++){
            arr.push(arr[i-1]+arr[i-2]);
        }
        result = arr.pop();
    }
    else result = arr[N-1];
    return result;
}
console.log(find(3));
console.log(find(8))
console.log(find(10));
console.log(find(20));