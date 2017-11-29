# Notify.js

Notify.js实现了方便快捷的消息管理，让你可以发布多条消息，用户会看到一条消息，当一条消息被关闭时，会继续显示下一条消息.


----------


**1.引入文件:**

```
//如果你需要type=1的消息显示，必须要引入bootstrap
<link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script src="Notify.js"></script>
```


----------


**2.使用:**

```
//你可以在任何地方声明一条消息,记得选择消息的type
//默认type为2，即H5 Notification提醒
//Notification提醒只能在有服务器的情况下访问才会产生
var ms1=new Notify("info","This is a message!",msg_click_fn,1);
//msg_click_fn是点击消息的事件
```


----------


**3.参数:**

构造器的参数为status,text,click_fn,type,id  注意顺序
|参数名 | 参数说明|
|:----:|:---:|
|status	| 消息的状态,用于改变type=1消息的样式和type=2消息的tag,值：info/danger/warning/success,默认:info|
|text |	消息的内容,默认:""|
|click_fn |	点击消息会执行的函数,默认:null|
|type |	类型,值：1/2;1是bootstrap的消息样式,2是H5 Notification的提醒.默认:2|
|id	| 消息的id,和该消息的Dom元素的id无关,仅用于标示该消息,例如已读状态向数据库反馈会用到.默认:1|


----------


**License**

MIT


----------
