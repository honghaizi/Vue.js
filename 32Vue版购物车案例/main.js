const axx = new Vue({
  el: '#axx',
  data: {
    books: [
      {id: 1, name: '《算法导论》', date: '2006-9', price: 85.00, count: 1},
      {id: 2, name: '《UNIX编程艺术》', date: '2006-2', price: 59, count: 1},
      {id: 3, name: '《编程编程》', date: '2008-10', price: 39.00, count: 1},
      {id: 4, name: '《代码大全》', date: '2006-9', price: 128.00, count: 1}
    ]
  },

  //过滤器 增加人名币符号和保留两位小数
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2);
    }
  },

  methods: {
    //增加和减少
    increment(index) {
      this.books[index].count++
    },
    decrement(index) {
      this.books[index].count--
    },
    //移除
    removeHandle(index) {
      this.books.splice(index, 1);
    }
  },

  //计算总价格
  computed: {
    totalprice() {
      let totalPrice = 0;
      for (let i = 0; i < this.books.length; i++) {
        totalPrice += this.books[i].price * this.books[i].count;
      }
      return totalPrice;
    }
  }

})
