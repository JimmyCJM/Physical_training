/*判断一个字符串中出现次数最多的字符，并统计次数
例如：str = ‘abcsbaddbizdbas’,输出：{b：4}
例如：str = ‘aaaaabbdbdbb’，输出：{a：5，b：5}*/
function main(str){
    str = str.split("");
    str = str.reduce((p,k) => (p[k]++ || (p[k] = 1),p),{});
    let [num,a,result,count] = [0,[],`{`,0];
    for (let i in str){
        if (str[i] > num) {
            num = str[i];
        }
    }
    for (let i in str){
        if (str[i] === num) {
            count++;
            a.push(`${i}:${num}`);
        }
    }
    result += a;
    result += `}`;
    return result;
}
console.log(main(`abcsbaddbizdbas`));
console.log(main(`aaaaabbdbdbb`));