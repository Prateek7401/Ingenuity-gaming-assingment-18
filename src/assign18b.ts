function add1(...num:number[]) {
    let sum:number =0;
    num.forEach(element => {
        sum = sum+element;
    });
    return sum;
}
console.log(add1(2,4,5,6))