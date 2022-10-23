<template>
  <div>
    <h1>TODOリスト</h1>
    <ul v-for="(todo, index) in todos" :key="index">
      <li><input type="text" :value="todo.content"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoIndex',
  data() {
    return{
      // todos: ['todos']
    }
  },
  props:{
    todos: Array
  },
}
</script>

<style lang="scss" scoped>

</style>