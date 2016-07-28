<template>
<div class="footer">
	 <!--<h1>{{ title }}</h1>-->
	 {{copyright}}
</div>
 
</template>

<script>
export default {
  data () {
    return {
      copyright:"YCJ版权是用来坑爹的！copyright@2000-2016"
    }
  }
}
</script>

<style>
.footer{
	position: fixed;
	display: block;
	width: 100%;
	font-size: 12px;
	color: #fff;
	bottom: 0;
	height: 30px;
	text-align: center;
	line-height: 30px;
	background: rgba(0,0,0,0.5);
	border-top: 1px solid #000;
	z-index:11;
}
</style>