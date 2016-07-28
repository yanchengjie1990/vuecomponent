import Vue from 'vue';
import VueRouter from 'vue-router';
require('./css/layout.css');//根据config配置它会运用插件style-loader 
//来直接插入页面运用style标签  减少了一个css请求数 可以打开google控制台 查看不会去请求css文件的
//import App from './vue/App.vue';
import ComHeader from './vue/Header.vue'; //载入组件并命名为Header 个人理解
import Content from './vue/Content.vue';
import ContentTwo from './vue/Contenttwo.vue';
import ContentThree from './vue/Contentthree.vue';
import ContentFour from './vue/Contentfour.vue';
import Lists from './vue/List.vue';
import Footer from './vue/Footer.vue';
Vue.use(VueRouter);

//使用了 vue-router 就不需要实例化根组件了，route.start 会帮你实例化根组件。
//new Vue 是不需要的，否则其中的路由标签不能被识别。 必须注意这点
//new Vue({
//	el: '#app',
//	components:{ Header }
//});
var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
})
//令页面可以直接写这个标签
Vue.component('my-header', ComHeader);//注册组件  跟angular的指令又有点像 去了个大锤子。。。（指令也是模版）
Vue.component('my-footer', Footer);//注册组件  跟angular的指令又有点像 去了个大锤子。。。（指令也是模版）
// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter()

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map({
  '/menu1': {
    component: Content
  },
  '/menu2': {
    component: ContentTwo
  },
  '/menu3': {
    component: ContentThree
  },
  '/menu4': {
    component: ContentFour
  },
  '/menu5': {
    component: Lists
  }
})
var App = Vue.extend({})
// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, '#app')