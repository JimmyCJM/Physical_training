//题目：输入一个出生日期，判断是否大于18岁.
function  isAdult(inputStr){
    let date = new Date();
    let birthday = new Date(inputStr);
    let result = (date - birthday)/(365*24*60*60*1000);
    let boolean = (Math.floor(result) > 18);
    return boolean;
}
console.log(isAdult(`1999-09-10`));
console.log(isAdult(`1990-12-20`));