interface Person {
    firstName: string;
    lastName: string;
}

new Vue({
    el: '#app',
    data: {
        num1: 0,
        num2: 0,
        selected: '+',
        operators: ['+', '-', '*', '/']
    },
    computed: {
      sum(): number {
        if(this.selected === '+') return this.num1 + this.num2
        if(this.selected === '-') return this.num1 - this.num2
        if(this.selected === '*') return this.num1 * this.num2
        if(this.selected === '/') return this.num1 / this.num2
      }
    }
  })