//题目：确保字符串的每个单词首字母都大写，其余部分小写。
function test(inputStr){
    let result = [];
    let arr = inputStr.split(" ");
    for(let i=0;i<arr.length;i++) {
        result[i] = [];
        result[i] = arr[i][0].toUpperCase();
        for (let j=1;j<arr[i].length;j++){
            result[i]+=arr[i][j].toLowerCase();
        }
    }
    result = result.toString().split(",").join(" ");
    return result;
}
console.log(test(`i am a student.`));
console.log(test(`THIS IS A NUMBER`));