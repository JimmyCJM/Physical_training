//题目：输入两个正整数m和n，求其最大公约数和最小公倍数。
　function test(m,n){
    let [a,b] = [0,m * n];
    if (!(m - n)) {
        m ^= n;
        n ^= m;
        m ^= n;
    };
    while (n){
        a = m % n;
        m = n;
        n = a;
    }
    return `最大公约数：${m}\n最小公倍数：${b/m}`;
}
console.log(test(15,9));
console.log(test(3489,3609));