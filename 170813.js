//给定一个未排序的整数数组，找到其中位数。
function median(arr) {
    console.log(`原数组:${arr}`);
    let result = 0;
    arr = arr.sort(asc);
    console.log(`排序后数组为:${arr}`);
    if (arr.length%2 === 0){
        result = (arr[parseInt(arr.length/2)-1] + arr[parseInt(arr.length/2)])/2;
    }
    else result = arr[Math.floor(arr.length/2)];
    return `数组中位数为:${result}`;
}
function asc(first,second){
    if (first === second) return 0;
    if (first > second) return 1;
    else return -1;
}
let arr1 = [1,7,8,3,2,3,4,5,5,6];
let arr2 = [1,3,5,9,6,3,7];
console.log(median(arr1));
console.log(median(arr2));
