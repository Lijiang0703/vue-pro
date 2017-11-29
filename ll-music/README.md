# vue-pro
	在网上买了一个关于vue的教程,真正转变成自己的知识是需要花费时间的.这个项目就用来纪录自己的学习过程.

10.16 :
	了解了一种新的css预处理框架 : stylus
  
10.18 : 
	npm使用巩固，--save和--save-dev的使用区别，--save是自动把模块和版本号添加到dependencies，--save-dev是自动添加到devdependencies
	首页头部的简单搭建，初步使用vue－router实现导航
	样式结构整理

10.19 : 
	eslint 语法检测真是令人抓狂，索性去掉了，后续再研究
	jsop 跨域获取数据的使用，数据请求方法的封装
  
10.20 :
	轮播图组件的实现（尚未）
	了解slot元素的使用(相当于将额外的内容组合在组件中)

10.21 :
	nodejs 中的router模块等的学习了解

11.9 :
	前阵子身体状况有点不好，学习停了一阵子。身体是革命的本钱，接下来会恢复这个内容的学习。
	简单做了两个页面的静态样式，还有待完善
	axios似乎不支持jsop（待验证）
11.27
	vue transition组件实现过渡效果
11.29
	被.recommendWrap的样式问题困扰了一个多礼拜，list滚动到底部有一个item高度的距离显示不了。经检查发现，postion:fixed的时候没有定义bottom:0,导致recommendWrap的高度多了一部分，又因为overflow:hidden了，所以未能正确显示出来。position:fixed可以很好的设置元素的高度不超过页面的高度，但是要注意使用中的问题