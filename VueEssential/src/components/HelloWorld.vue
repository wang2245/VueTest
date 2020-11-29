<template>
  <div id="app">
	  {{message}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    message: 'Hello Vue!'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
