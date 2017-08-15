//题目：在一个由2*n-1个正整数构成的数组中，有且仅有一个数出现了奇数次，其余的数均出现了偶数次。找出出现奇数次的那个数。
function test(inputArray){
    let result = 0;
    for (let i=0;i<inputArray.length;i++){
        result ^= inputArray[i];
    }
    return result;
}

console.log(test([1,4,5,7,4,7,3,8,9,0,8,3,0,5,1]));
