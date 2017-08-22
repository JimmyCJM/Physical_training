//题目：找出数组 arr 中重复出现过的元素,例如：arr = [‘a’, ‘ab’, ‘ed’, ‘da’, ‘a’, ‘ed’, ‘b’];输出：‘a’, ‘ed’
function main(arr){
    let b = [];
    let result = [];
    arr.filter(value =>{
        if (arr.indexOf(value) !== arr.lastIndexOf(value) ) b.push(value);
    })
    b.filter(value =>{
        if(result.includes(value));
        else result.push(value);
    })
    return  result;
}
console.log(main(['a', 'ab', 'ed', 'da', 'a', 'ed', 'b']));
console.log(main([1,5,4,3,6,5,4,7]));
console.log(main([8,2,9,6,3,4]));