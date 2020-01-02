/*
  三个高阶函数： filter/map/reduce
  简化高效版
*/

const nums = [10, 20, 111, 222, 444, 40 ,50];


/*
    1.需求：取出所有小于100的数字
    2.将所有小于100的数字进行转化： 全部 * 2
    3.需求： 将所有new2Nums数字相加，得到最终的结果
*/

//函数式编程
let total = nums.filter( function (n) {
  return n < 100
}).map ( function (n){ 
  return n * 2
}).reduce (function (preValue, n){
  return preValue + n
},0);
console.log('2-' + total);


//超级简写
let total1 = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
console.log('super-' + total1)
