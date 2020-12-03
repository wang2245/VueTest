<template>
  <div>
    <h1>{{Post.title}}</h1>    
	<div v-html="Post.content"></div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    Post: object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
