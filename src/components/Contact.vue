<template>
    <div class="contact-container">
      <div class="contact-text">
          Are you interested in working with us ?
          Then kindly get in touch,
          we’d be happy to meet you.
          We look forward to hearing from you.
      </div>
      <div class="my-resume">
          <div class="my-photo">
            <img src="../assets/myphoto.jpg">
          </div>
          <div class="contact-way">
            <div class="social-way"><img src="../assets/ins.png"></div>
            <div class="social-way"><img src="../assets/facebook.png"></div>
            <div class="social-way"><img src="../assets/weibo.png"></div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      msg: 'contact'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact-container{
  color: white;
  padding: 150px 200px 20px 200px;
  display: flex;
  justify-content: space-between;
  background-color: black;
  height: 100%;
}
.contact-text{
  width: 350px;
}
.my-resume{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.my-photo img{
    width: 200px;
}
.contact-way{
    display: flex;
}
.social-way img{
    height: 36px;
    width: 36px;
    margin-top: 10px;
    margin-left: 10px;
}
</style>
