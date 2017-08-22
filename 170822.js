/*题目：
计算两个数组的交数组
注意：理解题意（不是找出在两数组中都存在的元素）
例如：nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2, 2].
*/
function main(arr1,arr2){
    let result = [];
    var i_1 = [];
    for (let i=0;i<arr2.length;i++){
        for (let j=i;j<arr1.length;j++){
            if (arr2[i] === arr1[j]){
                i_1.push(j);
            }
        }
    }
    i_1 = i_1.filter((value,index) =>{
        if (i_1.indexOf(value) === index) return true;
        else return false;
    });
    for (let i=0;i<i_1.length;i++){
        result.push(arr1[i_1[i]]);
    }
    return result;
}
let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
console.log(main(nums1,nums2));
let arr1 = [1,2,3,4,5,6,7];
let arr2 = [3,4,5,6,7,8,9];
console.log(main(arr1,arr2));
