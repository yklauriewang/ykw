<template>
    <div class="project1-container">
        <div class="about-me-text">
         <!-- project1 -->
        </div>
        <div class="project-img">
          <img src="../../assets/projects/1/1.jpg">
          <img src="../../assets/projects/1/2.jpg">
          <img src="../../assets/projects/1/3.jpg">
          <img src="../../assets/projects/1/4.jpg">
          <img src="../../assets/projects/1/5.jpg">
          <img src="../../assets/projects/1/6.jpg">
          <img src="../../assets/projects/1/7.jpg">
          <img src="../../assets/projects/1/8.jpg">
          <img src="../../assets/projects/1/9.jpg">
          <img src="../../assets/projects/1/10.jpg">
          <img src="../../assets/projects/1/11.jpg">
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
  padding: 150px 0px 0 0px;
  display: flex;
  justify-content: space-between;
  /*background-image: url('../../assets/projects/1/title.jpg');*/
  background-size: 100% 100%;
  background-repeat: no-repeat;
  /*height: 100%;*/
  background-attachment: fixed;
}
.about-me-text{
  width: 400px;
}
.project-img img{
  width: 100%;
  vertical-align: bottom;
}
</style>
