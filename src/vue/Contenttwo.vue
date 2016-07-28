<template>
<div class="content background-gradient">
	  <div class="h1-title">{{title}}</div>
	  <p>做列表页麻烦，我就随便做个简单的页面来区别几个菜单下的页面不同！组件就是模版而已,只需要做一个页面，然后把全部的页面做成组件这样减少了请求！最好先学习一下vue-route这个插件网址是：http://router.vuejs.org/zh-cn/installation.html；跟angular的route是同一个概念
	  如果你觉得每个页面可能不需要头部那你的index页面就得重新更改，可以学习vue-route里面的嵌套路由配置等</p>
</div>
 
</template>

<script>
export default {
  data () {
    return {
      title: '我是菜单2的文章内容模版!'
    }
  }
}
</script>
<style type="text/css">
	p{line-height: 2;padding:0 30px}
</style>