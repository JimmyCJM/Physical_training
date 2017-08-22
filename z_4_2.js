//题目：不借助第三个变量，实现两个整数的替换
function swap(a,b) {
    a ^= b;
    b ^= a;
    a ^= b;
    return [a,b];
}

console.log(swap(2,6));

//2分钟