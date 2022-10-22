import Vue from 'vue'
import TodoIndex from '../../components/todos/TodoIndex'

document.addEventListener('DOMContentLoaded', () => {
  const el = document.body.appendChild(document.createElement('hello'))
  const app = new Vue({
    el,
    render: h => h(TodoIndex)
  })

  console.log(app)
})