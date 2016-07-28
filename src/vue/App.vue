<template>
	<div class="wrapper">
	<com-header></com-header>
	<!--<com-content></com-content>
	<com-footer></com-footer>-->
	</div>

 
</template>

<script>
import ComHeader from './Header.vue';
//import ComContent from './Content.vue';
//import ComFooter from './Footer.vue';
export default {
  data () {
    return {
      title: '我是个头部模版!',
      menu:[
      "菜单1","菜单2","菜单3","菜单4","菜单5"
      ]
    }
  },
  components: {
    ComHeader
  }
//components: {
//  ComHeader,
//  ComContent,
//  ComFooter
//}
}
</script>

<style>
</style>