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

构造器的参数为options{status:"",text:"",click:function(){},type:1 or 2,id:""}
![Alt text](https://github.com/623059008/Notify.js/raw/master/table.png)


----------


**License**

MIT


----------
