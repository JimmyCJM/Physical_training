//数组去重，例如：arr = [‘s’, ‘a’, ‘s’, ‘b’, ‘a’,1,‘1’,1], 输出：[‘s’, ‘a’, ‘b’,1,‘1’]

function main(arr){
    let result = [];
    arr.forEach(value =>{
        if(result.includes(value)) ;
        else result.push(value);
    })
    return result;
}
let arr1 = ['s', 'a', 's', 'b', 'a',1,'1',1];
let arr2 = [1,2,4,7,6,3,7,4,8,2,5,1,1,9,6,4,3,4,6,]

console.log(main(arr1));
console.log(main(arr2));