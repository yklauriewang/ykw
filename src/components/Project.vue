<template>
    <div class="project-container">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'project'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project-container{
  margin-top: 150px;
  color: white;
}
</style>
