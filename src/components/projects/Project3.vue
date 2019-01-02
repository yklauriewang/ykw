<template>
    <div class="project1-container">
        <div class="about-me-text">
         <!-- project1 -->
        </div>
        <div class="project-img">
          <img src="../../assets/projects/3/3.jpg">
          <img src="../../assets/projects/3/4.jpg">
          <img src="../../assets/projects/3/5.jpg">
          <img src="../../assets/projects/3/6.jpg">
          <img src="../../assets/projects/3/7.jpg">
          <img src="../../assets/projects/3/8.jpg">
          <img src="../../assets/projects/3/9.jpg">
          <img src="../../assets/projects/3/10.jpg">
          <img src="../../assets/projects/3/11.jpg">
          <div class="video-container">
            <!-- <iframe src="https://www.youtube.com/embed/N_Otm0XO49k?html5=1" width="800" height="500"></iframe> -->
          </div>
          <!-- <video src="https://www.youtube.com/31ac07ca-d5fb-4cf5-b47a-c322fcf0bd06" controls width="400" height="300"></video> -->
          <!-- <video preload="" style="" src="blob:https://player.vimeo.com/05f4ea29-94c6-464c-b5da-77fe3769ecc5" controls width="400" height="300"></video> -->
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
  },
  created () {
    window.scrollTo(0,0);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project1-container{
  color: white;
  padding: 150px 130px 0 130px;
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
.video-container{
  width: 500px;
  height: 400px;
  margin: 0 auto;
  margin-top: 100px;
}
</style>
