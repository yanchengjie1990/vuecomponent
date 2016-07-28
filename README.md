# WebpackBin project
所述为个人理解，当发现理解有误请告知我，错误的知识是最可怕的。欢迎你的指正！
`npm start`运行本地服务器 查看 默认会是 localhost:8080
webpack -w  实时监控打包
webpack -p 压缩文件打包


进去先执行npm install 安装其所需的插件然后即可直接运行npm start
 目录说明/
  + package.json //npm配置文件 该文件中的scripts 参数定义用来配置快捷cmd命令
  + webpack.config.js //webpack配置
  + index.html //页面
  - node_modules //npm加载的模块
  - src //开发资源目录
    - assets //一些资源
      + logo.png  //图片资源
    - components //vue组件
      + a.vue 
      + b.vue
      + counter.vue
    + app.vue //布局文件
    + main.js  //入口文件
//学习组建也需有vue-route 的概念 // 跟我之前给你的一个angular Material包一样 其实只需要一个index.html主页面 
其它不管什么页面其实写的都是模版  通过route的路径配置地址 只是请求了不同的模版出来 放进index.html里 这也是route起到的作用
vue组建概念也是一个主页，多个模版（模版可以代替列表/头部等）。

比如  以 angular 的route 举例(其vue-route应相同理念只不过代码写法略有不同)
其下的参数对应表达
url:这是一个配置页面的名称  假设你的域名是www.1688service.com 你的url值为index.html //就可以直接访问www.1688service.com/index.html
views：其主页中的框架 只写了一句"<div ui-view></div>";
根据以下代码的所示  其给主页配置了5个模版
//这是vue写法
其主页中的框架<router-view></router-view>
router.map({
  '/foo': {
  	component: Foo
  }
});
//angular写法
$stateProvider.state(url, {
            views: {
                sidebarLeft: {
                    templateUrl: 'app/triangular/components/menu/menu.tmpl.html',
                    controller: 'MenuController',
                },
                sidebarRight: {
                    templateUrl: 'app/triangular/components/notifications-panel/notifications-panel.tmpl.html',
                    controller: 'NotificationsPanelController',
                },
                toolbar: {
                    templateUrl: 'app/triangular/components/toolbars/toolbar.tmpl.html',
                    controller: 'DefaultToolbarController',
                },
                content: {
                    template: '<div id="admin-panel-content-view" class="{{layout.innerContentClass}}" flex ui-view></div>'
                },
                belowContent: {
                    template: '<div ui-view="belowContent"></div>'
                }
            }
        })
    

.vue文件将由vue-loader进行加载;
vue其实相当于模版 好比如每个页面的头部或者底部都是固定的 html构造 css样式
vue里面同时包含了css js html源码 
config配置参数
	entry 是页面中的入口文件，比如我这边的入口文件时main.js
	output: 是指页面通过webpack打包后生成的目标文件放在什么地方去；
	resolve: 定义了解析模块路径时的配置，常用的就是extensions; 可以用来指定模块的后缀，这样在引入模块时就不需要写后缀，会自动补全。
	plugins: 定义了需要使用的插件，比如commonsPlugin在打包多个入口文件时会提取公用的部分，生成common.js;

module.loaders：是文件的加载器

## Start

`npm install`



Go to `localhost:8080`



