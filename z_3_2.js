//题目：求第n个丑数，所谓丑数，就是那些因子只含2，3，5的数。1，2，3，4，5，6，8，9，10，12是最前面的10个丑数。(1是特殊的丑数）
function main(N) {
    let arr = [2, 3, 5];
    let result = [1];
    let [i2, i3, i5] = [0, 0, 0]
    for (let i = 0; i < N; i++) {
        result.push(Math.min(2 * result[i2], 3 * result[i3], 5 * result[i5]));
        if (result[i + 1] === 2 * result[i2]) i2++;
        if (result[i + 1] === 3 * result[i3]) i3++;
        if (result[i + 1] === 5 * result[i5]) i5++;
    }
    return result[N-1];
}

console.log(main(5));
console.log(main(10));
console.log(main(1));

//10分钟