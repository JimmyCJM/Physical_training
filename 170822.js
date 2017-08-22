/*题目：
计算两个数组的交数组
注意：理解题意（不是找出在两数组中都存在的元素）
例如：nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2, 2].
*/
function main(arr1,arr2){
    let result = [];
    var [a,b] = [[],[]];
    if (nums1.length > nums2.length);
    else {
        nums1 ^= nums2;
        nums2 ^= nums1;
        nums1 ^= nums2;
    }
    for (let i=0;i<arr2.length;i++){
        for (let j=i;j<arr1.length;j++){
            if (arr2[i] === arr1[j]){
                a.push(j);
                b.push(i);
            }
        }
    }
    var [i,j] = [a[0],b[0]];
    while (arr1[i] === arr2[j]){
        result.push(arr1[i]);
        i++;
        j++;
    }
    return result;
}
let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
console.log(main(nums1,nums2));
let arr1 = [1,2,3,4,5,6,7];
let arr2 = [3,4,5,6,7,8,9];
console.log(main(arr1,arr2));
