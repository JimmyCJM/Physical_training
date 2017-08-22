//题目：给出一个字符串数组，按照anagram进行分组(例如bat，abt，tab算作一组)（anagram ： 由顛倒字母而成的单词 ）
function main(arr) {
    let result = [];
    let arrSort = [];
    for (let i=0;i<arr.length;i++){
        arrSort[i] = arr[i].split("").sort((a,b)=>a.charCodeAt()-b.charCodeAt()).toString().split(",").join("");
    };
    let arr2 = [];
    arr2 = arrSort.filter((value,index) =>{
        if (arrSort.lastIndexOf(value) === index) return true;
    });
    for (let i=0;i<arr2.length;i++){
        let arrIndex = [];
        for (let j=0;j<arrSort.length;j++){
            if (arrSort[j] === arr2[i]) arrIndex.push(arr[j]);
        }
        result.push(arrIndex);
    }
    return result;
}
console.log(main(["eat", "tea", "tan", "ate", "nat", "bat"]));

//20分钟
