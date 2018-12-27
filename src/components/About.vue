<template>
    <div class="about-container">
        <div class="about-me-text">
          My name is Aaron Márquez, I’m an interactive graphic designer from Lima, Peru. When I finished high-schooI, I didn’t know exactly how my future as a professional would be. I had a huge attraction to Advertising so I went to the one of the most prestigious institutes in Lima. I talked with one of the receptionists and very confident she told me: "When I saw you walked in, I saw a great graphic designer”. Inspired by her words I choose GD as my career: jokes aside, her words really hit me.
            DON'T YOU THINK IS FUNNY? I SURE DO!
            SO, WHAT ARE YOU WAITING FOR? LET’S WORK TOGETHER! 
            FEEL FREE TO WRITE ME!
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
.about-container{
  color: white;
  padding: 150px 200px 0 200px;
  display: flex;
  justify-content: space-between;
  background-color: black;
  height: 100%;
}
.about-me-text{
  width: 400px;
}

</style>
