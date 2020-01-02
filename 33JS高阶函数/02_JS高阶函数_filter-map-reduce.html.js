/*
  三个高阶函数: filter/map/reduce
  filter 过滤掉一些不满足的元素
    要求传递一个回调函数
    回调函数有一个求法： 必须返回一个 Boolean 值
    true: 当返回 true 时，函数内部会自动将次回调的 n 加入到新的数组中
    false: 当返回 false 时，函数内部会过滤这次的 n；
    入参为函数和列表/元组/字符串，返回值为item列表/元组/字符串。

  map 对元素可以进行表达式
    要求传递一个回调函数
    所有的东西进行某一次的变化时就可以使用这个
    filter要求必须返回的是boolean值
    map 里面可以写表达式
    map() 方法定义在JavaScript的Array中
    入参是为函数和列表/元组/字符串，返回值为function(item)列表。

  reduce 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
    要求传递两个回调函数
    reduce(function (preValue, n)},0)
    preValue, n预设值，初始化值
    function (preValue, n)  第一个参数
    0 第二个参数 这里设置初始值为了更安全，如果去除报错
    入参是为函数和列表/元组/字符串和初始值，返回值为数值。
 */

const nums = [10, 20, 111, 222, 444, 40 ,50];

// 1.需求：取出所有小于100的数字
// let newNums 接收 filter 内部数组返回值
let newNums = nums.filter(function(n) {
  //如果是for这里已经在些 if 语句了，这里可以直接这样写
  return n < 100; 
});
// console.log(newNums);// 10, 20, 40 ,50
/*内部运行状态
const nums = [10, 20, 111, 222, 444, 40 ,50];

第1次：                             10
let newNums = nums.filter(function (n) {
  return 10 < 100;  true 存入newNums
});
第2次：                             20
let newNums = nums.filter(function (n) {
  return 20 < 100;  true 存入newNums
});
第3次：                             111
let newNums = nums.filter(function (n) {
  return 100 < 100;  false 函数内部会过滤这次的 n
});
*/



// 2.将所有小于100的数字进行转化： 全部 * 2
let new2Nums = newNums.map(function(n) {
  return n * 2;
});
// console.log(new2Nums);// 20, 40, 80, 100
/*内部运行状态
newNums[10, 20, 40 ,50];
第1次：                             10
let new2Nums = newNums.map(function (n) {
  return 10 * 2;  20 存入new2Nums
});
第2次：                             20
let new2Nums = newNums.map(function (n) {
  return 20 * 2;  40 存入new2Nums
});
*/



// 3.需求： 将所有new2Nums数字相加，得到最终的结果
let total = new2Nums.reduce(function (preValue, n) {
  return preValue + n
},0)
console.log('1' + total);
/*内部运行状态
new2Nums[20, 40, 80, 100];
第1次：                                 0       20
let total = new2Nums.reduce(function (preValue, n) {
  return 0 + 20;  20 存入total
});
第2次：                                 20      40
let total = new2Nums.reduce(function (preValue, n) {
  return 20 + 40;  60 存入total
});
第3次：                                 60      80
let total = new2Nums.reduce(function (preValue, n) {
  return 60 + 80;  140 存入total
});
第4次：                                 140      100
let total = new2Nums.reduce(function (preValue, n) {
  return 140 + 100;  240 存入total
});
*/
