# 问答系统进度(申永哲)

## 2017-07-12

### 任务安排
1. 练习使用git管理工具，并为团队创建整个项目工程，学习协同开发
1. 完成标签页的编写和相关路由
  1. 整个页面分为3个大板块，头部和尾部以及内容部分，其中头部和尾部需要外部ejs文件引入，暂未完成
  1. 内容部分分为标签简介，标签搜索加关注(需登录)，以及标签板块和著名技术问答的链接
  1. 可以输入localhost/tag显示页面
1. 下一步实现
  1. 搜索对应标签点击加关注时，将标签信息加入个人信息数据库里
  1. 当鼠标放在标签上时，会出现该标签的简单介绍的显示框。
  1. 在显示框中出现的人数会实时更新

### 问题和解决

1. 如何实现显示指定行数，溢出会显示省略号？

答：添加如下属性(目前谷歌兼容):
```  
  overflow: hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:3;
```

## 2017-07-12

### 任务进度

完成任务：

1. 创建了相对应的数据库模型，该数据库的模型如下
```
    let Schema = mongoose.Schema;
 
let tagsShema = Schema({
  tag: String,
  class: [Array], //存放所属的类
  issuesnum: Number,  //关注该标签的人数
  tagDescribe: String,   //对应标签的描述
});
 
module.exports.tags = mongoose.model('tags', tagsShema);  //创建tags集合的模型并共享
```
 2. 实现了当鼠标放到标签上显示工具提示框，内包含了关注人数，标签介绍，代码如下：
 ```ejs
 <div id="tishi1" style='display: none;' class='chuank'>
  <div id="sanjiao"></div>
  <div>
    <h5 id="title"><strong>java</strong></h5>
    <p id="tishi">觉得非公开了就是的开发了估计是老款的辐射功的的的法规尽快的更多反馈给记得刚看了大家的房间观看了到福建更多可根据地方水电费价格肯定发几个快递费的房间观看的房间观看地方第三方更健康的房间观看地方是根据贷款赶紧打开了大师傅赶紧看到了法国家里大方公开了地方价格地方是根据对方商量个健康的方式是经过考虑对方就开了地方是根据地方看了感觉是大哥叫对方立刻第三方根据地方了</p>
  </div>

  <hr style="margin:10px 0px">

  <ul class='list'>
  <li><a href="">查看</a></li>
  <li><a href="">编辑</a></li>
  <li><a href="">订阅</a></li>
  <li style="margin-left:40px;"><span id="pesNumber">1021</span>&nbsp;<span style="color:">人</span></li>
  <li><button id="btn1" class='like'>加关注</button></li>
</ul>
</div>
 ```
 
 ```js
 for (let i = 0, j = $('.tag').length; i < j; i++) {
  $('.tag').eq(i).hover(function() {
    $('.chuank').eq(i).stop().fadeIn(2000);
  },function() {
    $('.chuank').eq(i).stop().fadeOut(300);
  });
 
  $('.chuank').eq(i).hover(function() {
    $('.chuank').eq(i).stop().fadeIn();
  }, function() {
    $('.chuank').eq(i).stop().fadeOut();
  });
}
 ```
 ```css
 
#tishi1{
  width:300px;
  border: 1px solid #33a3dc;
  border-radius: 5px;
  position: absolute;    //实现绝对定位盒子的居中
  right: 50%;
  margin-right: -160px;
  top: -163px;
  /*display: none;*/
  z-index:999;
  background: #fff;
}
#tishi{
  margin: 10px 9px;
  height: 60px;
  font-size: 14px;
  overflow: hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:3;
}

.list {
  width: 300px;
  margin: 0;
  position: relative;
  padding-left: 0px;
  height:  30px;
}

.list li {
  /*width: 40px;*/
  height: 20px;
  margin: 0;
  margin-left: 15px;
  margin-bottom: 10px;
  float: left;
}
.list li a{
  color: #33a3dc;
}
.list li #btn1{   //加关注按钮
  font-size: 12px;
  padding: 5px 8px;
  background: #fff;
  border: 1px solid #33a3dc;
  border-radius: 5px;
  outline-style: none;
  /*position: absolute;*/
  line-height: 1;
  /*bottom: 10px;*/
}
#sanjiao{     //编写了一个三角形
  width: 10px;
  border-bottom: 10px solid transparent;
  border-top: 10px solid #33a3dc;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  position: absolute;
  left: 130px;
  bottom:-21px
}
 ```
下一步事项:
  1. 登陆后显示搜索加关注框
  2. 登陆后加关注才有效，加的关注会在将标签存储到对应用户的标签数组中
  3. 时刻更新关注人数，当你点击加关注按钮，该显示的人数加1，数据内关注人数也加1,按钮显示已关注；再次点击变成加关注，人数减1
### 问题与解决

1. 如何实现绝对定位的盒子在相对定位的父元素的居中？
```
答：可以用left:50%加上margin-left:(宽度/2)，来实现绝对定位的居中
```
2. 怎么能使相同元素具有同样的属性但是对其中一个元素操作不会影响到其他元素？

答：在<script>中使用for循环给每一个元素都设置属性
```
for (let i = 0, j = $('.tag').length; i < j; i++) {
  $('.tag').eq(i).hover(function() {
    $('.chuank').eq(i).stop().fadeIn(2000);
  },function() {
    $('.chuank').eq(i).stop().fadeOut(300);
  });
}

```






