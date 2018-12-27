<template>
    <div class="project1-container">
        <div class="about-me-text">
         project1
        </div>
    </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project1-container{
  color: white;
  padding: 150px 200px 0 200px;
  display: flex;
  justify-content: space-between;
  background-image: url('../../assets/projects/2.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100%;
}
.about-me-text{
  width: 400px;
}

</style>
