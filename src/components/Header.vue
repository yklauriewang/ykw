<template>
    <div class="header-container">
    	<div class="header">
        <img src="../assets/logo.png">
        <div class="nav">
        	<router-link to="/about" tag="li"><a>ABOUT</a></router-link>
        	<router-link to="/project" tag="li"><a>PROJECT</a></router-link>
        	<router-link to="/contact" tag="li"><a>CONTACT</a></router-link>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-container{
	display: flex;
	align-items: center;
	justify-content: center;
}
.header{
	height: 100px;
	background: rgba(255,255,100,0);
	position: fixed;
	top: 0;
	z-index: 1000;
	width: 84%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.header img{
	width: 70px;
	height: 70px;
}
.header .nav{
	list-style: none;
	display: flex;
}
.header .nav li{
	margin-left: 40px;
	font-family:  futura std,Arial,"Hiragino Sans GB","Microsoft Yahei","微软雅黑",STHeiti,sans-serif;
	font-weight: bold;
}
.header .nav a{
	text-decoration: none;
	color: white;
}

</style>
