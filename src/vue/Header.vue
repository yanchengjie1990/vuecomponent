<template><div class="header">
	 <!--<h1>{{ title }}</h1>-->
	 <a  v-for="item in menu" v-link="item.link">{{item.text}}</a>
</div>
<div class="height"></div>
<div class="bg"></div>
</template>
<script>
export default {
  data () {
    return {
	 menus:["菜单1","菜单2","菜单3","菜单4","菜单5"],
     title: '我是个头部模版!',
     menu:[
      	{
      		text:"菜单1",
      		link:"/menu1"
      	},{
      		text:"菜单2",
      		link:"/menu2"
      	},{
      		text:"菜单3",
      		link:"/menu3"
      	},{
      		text:"菜单4",
      		link:"/menu4"
      	},{
      		text:"菜单5",
      		link:"/menu5"
      	}
      ]
    }
  }
}
</script>

