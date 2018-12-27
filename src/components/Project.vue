<template>
    <div class="project-container">
        <div class="project-item-left">
          <router-link to="/project1" tag="div">
              <img src="../assets/projects/1.jpg" class="project-img">
          </router-link>
          <span class="project-">project 1</span>
        </div>
        <div class="project-item-right">
          <router-link to="/project2" tag="div">
              <img src="../assets/projects/2.jpg" class="project-img">
          </router-link>
          <span class="project-">project 2</span>
        </div>
        <div class="project-item-left">
          <img src="../assets/projects/3.jpg" class="project-img">
          <span class="project-">project 3</span>
        </div>
        <div class="project-item-right">
          <img src="../assets/projects/4.jpg" class="project-img">
          <span class="project-">project 4</span>
        </div>
        <div class="project-item-left">
          <img src="../assets/projects/5.jpg" class="project-img">
          <span class="project-">project 5</span>
        </div>
        <div class="project-item-right">
          <img src="../assets/projects/6.jpg" class="project-img">
          <span class="project-">project 6</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Project',
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
  color: white;
  padding: 150px 160px 150px 160px;
  background-color: black;
  height: auto 100%;
}
.project-item-left{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px;
  align-items: flex-start;
}
.project-item-right{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px;
  align-items: flex-end;
}
.project-img{
  width: 400px;
}
</style>
