//题目：给出2*n + 1 个的数字(数组)，除其中一个数字之外其他每个数字均出现两次，找到这个数字。


var arr1 = [1,1,2,2,3,3,4,4,5,6,6,7,7,8,8];
var arr2 = [11,13,14,15,16,17,18,11,12,13,14,15,16,17,18];

function findNum (arr){
    var result = 0;
    arr.forEach(value =>{
        result ^= value;
    })
    return result;
}

console.log(findNum(arr1));
console.log(findNum(arr2));