//设计一个算法，找出只含素因子3，5，7 的第 k 大的数。符合条件的数如：3，5，7，9，15......

function main(k){
    let arr1 = [3,5,7];
    let [p3,p5,p7] = [0,0,0];
    let c = [1];
    for (let i=0;i<k+1;i++){
        c.push(Math.min(3*c[p3],5*c[p5],7*c[p7]));
        if (c[i+1] === c[p3]*3)    p3++;
        if (c[i+1] === c[p5]*5)    p5++;
        if (c[i+1] === c[p7]*7)    p7++;
    }
    console.log(`p3 = ${p3}`);
    console.log(`p5 = ${p5}`);
    console.log(`p7 = ${p7}`);
    return c[k];
}
console.log(main(4));
console.log(main(7));
console.log(main(10));
console.log(main(16));
