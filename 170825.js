//将数组中所包含的某个元素找出，并放在数组后面,给出 nums = [0, 1, 0, 3, 12], target = 0; 调用函数之后, 得到nums = [1, 3, 12, 0, 0].
function main(arr,target) {
    let count = 0;
    arr = arr.filter(value =>{
            if (value === target) {
                count++;
                return false;
            }
            else return true;
    })
    while (count){
        arr.push(target);
        count--;
    }
    return arr;
}

console.log(main([0, 1, 0, 3, 12],0));
console.log(main([1,2,4,6,8,90,4,2,7,9,3,35,78,1,84,2,4],4));
console.log(main([3,11,4,5,9,7,9,65,],6));
