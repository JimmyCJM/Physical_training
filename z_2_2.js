//题目：将下划线式字符串转为驼峰式
function main(str) {
    let result = str.split("_");
    return result.map(value => {
        let valueReturn = value[0].toUpperCase();
        for (let i = 1; i < value.length; i++) {
            valueReturn += value[i];
        }
        return valueReturn;
    }).join("");
}
let str = "student_average_score";
console.log(main(str));

//10分钟