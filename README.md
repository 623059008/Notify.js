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
//首先你必须初始化Notify的容器,如果你想使用bootstrap形式的Notify的话.
Notify.init(Dom);//Default value:body.
//参数是一个dom元素,你可以使用任何方法获取这个dom元素并传入Notify.init()中.
//例如
Notify.init($("#div_head"));
//对Notify容器的声明只需要一次即可,Notify的容器会在需要时自动显示,显示完成后自动消失(display:none);


//你可以在任何地方声明一条消息,记得选择消息的type
//默认type为2，即H5 Notification提醒
//Notification提醒只能在有服务器的情况下访问才会产生
var options={
    status:"info",
    text:"This is a message!Please read it and close it.Thank you!",
    click:msg_click,
    type:1
};
var msg=new Notify(options);
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
