<template>
<div class="content background-gradient">
	  <div class="h1-title">{{title}}</div>
	  <h1 class="h1-content">VUE！</h1>
	  <h1 class="h1-content">VUE组件</h1>
	  <h1 class="h1-content">就是VUE组件</h1>
	  <h1 class="h1-content">本来就是VUE组件</h1>
	  <h1 class="h1-content">VUE组件就是这么模版而已</h1>
</div>
 
</template>

<script>
export default {
  data () {
    return {
      title: '我是菜单1的文章内容模版!'
    }
  }
}
</script>

<style>
.h1-title{ 
	width: 100%;
	font-size: 14px;
	line-height: 40px;
	height: 40px;
	color:#333;
	border-bottom: 1px solid #ccc;
	text-align: center;
}
.h1-content{
	color:#333;
	text-align: center;
	line-height: 2;
}
</style>