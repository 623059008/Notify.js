var Notify=function(status,text,click_fn,type,id){
    //初始化一条消息,并储存在消息池中FIFS
    this.getuuid=function(){
      Notify.uuid=Notify.uuid+1;
      return Notify.uuid;
    }
    var msg=this;
    msg.dbid=id||1;//用作反馈db的信息记录
    msg.id=this.getuuid();
    msg.status=status||"info";
    msg.text=text||"Default Message.";
    msg.click_fn=click_fn||null;
    msg.append=false;
    msg.type=type||2;//默认Notification提醒,1是bootstrap提醒
    Notify.MsgList.push(msg);
    //每一条消息的html的生成函数
    this.gethtml=function(){
        var strVar = "";
            strVar += "<div class=\"alert alert-"+this.status+" alert-dismissable text-noselect\" id=\"msg"+this.id+"\">\n";
            strVar += "	<button id=\"msg_close"+this.id+"\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">\n";
            strVar += "                &times;\n";
            strVar += "	<\/button>\n";
            strVar += this.text;
            strVar += "<\/div>\n";
        return strVar;
    };
    //Notification实例化函数
    this.newInfo=function(){
      var status="信息:";
      switch (this.status) {
        case "info":status="信息:";break;
        case "warning":status="警告:";break;
        case "success":status="成功:";break;
        case "danger":status="危险:";break;
      };
      var msg=new Notification('消息', {
              tag:this.status,
              body: status+this.text,
              icon: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=727023099,1772061912&fm=27&gp=0.jpg',
              renotify:true,
              silent:true,
              sound:'',//消息出现的声音
              noscreen:true,
          });
      return msg;
    }
    //this.run=Notify.run;
    Notify.run();//自动显示
}
//静态变量
Notify.MsgList=[];
Notify.container=$("body");
Notify.uuid=0;
//静态方法
Notify.init=function(container){
    Notify.container=container;
}
Notify.run=function(){
    if(Notify.MsgList.length>0&&!Notify.MsgList[0].append)
    {
        if(Notify.MsgList[0].type==2)
        {
          if (!('Notification' in window)) {
            console.log("浏览器不支持Notification");
            Notify.MsgList[0].type=1;
          }
          else if (Notification.permission !== 'denied') {
              if(Notification.permission === 'default')
              {
                Notification.requestPermission(function (permission) {
                    if (permission === 'granted') {
                        var msg=Notify.MsgList[0].newInfo();
                        //绑定点击和关闭事件
                        msg.onclick=function(){
                          Notify.MsgList[0].click_fn();
                          Notify.MsgList.splice(0,1);
                          msg.close();//会触发onclose事件
                        }
                        msg.onclose=function(){
                          //不执行消息绑定的事件,直接关闭
                          setTimeout(function () {
                            Notify.run();
                          }, 500);
                        }
                    }
                });
              }else
              if(Notification.permission === 'granted')
              {
                var msg=Notify.MsgList[0].newInfo();
                //绑定点击和关闭事件
                msg.onclick=function(){
                  Notify.MsgList[0].click_fn();
                  Notify.MsgList.splice(0,1);
                  msg.close();//会触发onclose事件
                }
                msg.onclose=function(){
                  //不执行消息绑定的事件,直接关闭
                  setTimeout(function () {
                    Notify.run();
                  }, 500);
                }
              }
          }
        }
        if(Notify.MsgList[0].type==1)
        {
          $(Notify.container).append(Notify.MsgList[0].gethtml());
          Notify.MsgList[0].append=true;
          //点击消息主体触发事件并关闭消息显示下一条消息
          $("#msg"+Notify.MsgList[0].id).unbind('click').click(function(event) {
              $(this).fadeOut();
              Notify.MsgList[0].click_fn();
              Notify.MsgList.splice(0,1);
              //执行下一条消息
              setTimeout(function () {
                Notify.run();
              }, 500);
          });
          //unbind close btn because of the default close is not elegent.
          $("#msg_close"+Notify.MsgList[0].id).unbind('click');
        }
    }else{
      console.log("消息池就绪中.")
    }
}