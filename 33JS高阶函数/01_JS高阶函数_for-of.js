/*编程规范
  1.命令式编程 JavaScript JQuery
  2.声明式编程 Vue
  3.面向对象编程 Java
  4.函数式编程 TypeScript

  这种普通得 for 循环是往常的写法
   computed: {
    totalprice() {
      let totalPrice = 0;
      for (let i = 0; i < this.books.length; i++) {
        totalPrice += this.books[i].price * this.books[i].count;
      }
      return totalPrice;
    }
  }
  这样些的母的是方便理解后面的高阶函数的好处
  三个高阶函数：  filter/map/reduce
 */

const nums = [10, 20, 111, 222, 333, 40, 50]

//1.需求: 取出所有小于100的数字
//普通的 for-of 方法；
let newNums = []; //用于存放去除的数据
for (let items of nums) {
  if (items < 100) {
    newNums.push(items); //添加到 newNums
  }
}

// 2.将所有小于100的数字进行转化： 全部 * 2
let new2Nums = [];
for (let item of newNums) { //这里已经获取到上面方法
  new2Nums.push(n * 2);
}

// 3.需求： 将所有new2Nums数字相加，得到最终的结果
let total = 0;
for (let item of new2Nums) {
  total += item;//将获取到的 new2Nums相加
}

console.log(total);//在浏览器控制台输出
