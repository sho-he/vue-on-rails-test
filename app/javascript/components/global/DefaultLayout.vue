<template>
  <div>
    <slot>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'DefaultLayout',
    props: {
      args: {
        type: Object,
        default: () => null
      }
    }
    
  }
</script>

<style lang="scss" scoped>

</style>