<template>
    <div class="header-container">
    	<div class="header">
        <img src="../assets/logo.png">
        <div class="nav">
        	<router-link to="/about" tag="li"><a class="button">ABOUT</a></router-link>
        	<router-link to="/project" tag="li"><a class="button">PROJECT</a></router-link>
        	<router-link to="/contact" tag="li"><a class="button">CONTACT</a></router-link>
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
	height: 120px;
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
	margin-left: 10px;
	font-family:  futura std,Arial,"Microsoft Yahei","微软雅黑",sans-serif;
	font-weight: bold;
}
.header .nav a{
	text-decoration: none;
	color: #dedede;
}


.button {
 display: block;
 position: relative;
 background: rgba(255,255,100,0);
 color: #fff;
 width: 160px;
 height: 50px;
 line-height: 50px;
 text-align: center;
 font-family: 'Ubuntu', sans-serif;
 font-size: 15px;
 font-weight: bold;
 text-decoration: none;
 margin: 50px auto 0;
 border-radius: 2px;
 overflow: hidden;
 -webkit-transition: all 0.15s ease-in;
 transition: all 0.15s ease-in;
} 
.button:before {
 content: ' ';
 position: absolute;
 background: #fff;
 width: 25px;
 height: 50px;
 top: 0;
 left: -45px;
 opacity: 0.3;
 -webkit-transition: all 0.25s ease-out;
 transition: all 0.25s ease-out;
 -webkit-transform: skewX(-25deg);
         transform: skewX(-25deg);
} 
.button:hover {
 background: rgba(255,255,100,0);
}
.button:hover:before {
 width: 45px;
 left: 205px;
}  
</style>
