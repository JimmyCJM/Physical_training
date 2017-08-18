/*在数组 arr 中，查找值与 item 相等的元素出现的所有位置
例如：arr = [1, 3, 7, 1 ,4,] , item = 1，输出：0, 3
要求：不要使用for，while循环*/

function main(arr,item){
    let result = [];
    arr.forEach((value,index) =>{
        if (value === item) result.push(index);
    })
    return result;
}
console.log(main([1, 3, 7, 1 ,4,],1));
console.log(main([1,1,1,2,3,5,67,89,0,5,4,3,2],2));
console.log(main([1,6,8,94,9,3,0,56,0,],0));