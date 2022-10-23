// NOTE: 完全ビルドのために下記に変更（変更しないとruntimeビルドになる
import Vue from "vue/dist/vue.esm.js"
import DefaultLayout from '../../components/global/DefaultLayout'
import TodoIndex from '../../components/todos/TodoIndex'
    

new Vue({
  el: '#app',
  components: {
    DefaultLayout,
    TodoIndex
  },
  data: {
    message: 'Vue on rails',
    args: JSON.parse(document.getElementById('app').getAttribute('args')),
  },
  created: function(){
    console.log(this.args)
  }
})