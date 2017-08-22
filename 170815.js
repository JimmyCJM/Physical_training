/*题目：统计数组 arr 中值等于 item 的元素出现的次数
例如：arr = [1, 3, 7, 1 ,4,] , item = 1,item出现的次数为2
要求：不要使用for循环*/
function main(arr,item) {
    let count = 0;
    arr.reduce((p,value) =>{
        if (item === value) count ++;
    },0);
    return count;
}
let arr1 = [1,2,3,4,6,7,4,3,7,3,4,8,9,6,7,9,7];
let arr2 = [2,6,6,3,4,8,1,2,3,0,2,1];
console.log(main(arr1,7));
console.log(main(arr1,4));
console.log(main(arr2,2));



