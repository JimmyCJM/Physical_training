//题目：给出一组非负整数，重新排列他们的顺序把他们组成一个最大的整数。
function main(arr) {
    arr = arr.sort((a,b)=>{
        let compare = parseInt(a/Math.pow(10,a.toString().length-1))-parseInt(b/Math.pow(10,b.toString().length-1));
        if (compare>0) return 1;
        if (compare === 0) return parseInt(a%10-b%10);
        else return -1;
    });
    let result = arr[arr.length-1].toString();
    for (let i=arr.length-2;i>=0;i--){
        result += arr[i].toString();
    }
    return result;
}
console.log(main([1, 20, 23, 4, 8]));
console.log(main([2, 34, 32, 3, 12]));

//20分钟