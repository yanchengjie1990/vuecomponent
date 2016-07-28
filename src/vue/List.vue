<template>
<div class="content background-gradient">
	  <div class="h1-title">{{title}}</div>
	  <p>灌水进去，快点！执行webpack -p导出项目并压缩 请看自述文件（README.md）也有说！</p>
	  <p>记住当你执行完webpack -p命令后发现打开build文件下的index.html是个空白页面说明此页面上的引用main。js文件路径需要改一下就可以了</p>
</div>
 
</template>

<script>
export default {
  data () {
    return {
      title: '我是菜单5的文章内容模版!'
    }
  }
}
</script>
