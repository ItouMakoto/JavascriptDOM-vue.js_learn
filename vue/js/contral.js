/**
 * Created by Eruda on 2017/11/10.
 */
window.onload=function () {
    var test=new Vue({
        el:'#test2',
        data:{
            message: '页面加载于 ' + new Date().toLocaleString(),
            seen:true,

        }
    });
    var test4=new Vue({
        el:'#test4',
        data:{
            lists:[
                {text:'我是伊藤诚'},
                {text:'我是大帅比'},
                {text:'上天入地第一人'},
            ]
        }
    });
    var test5=new Vue({
        el:'#test5',
        data:{
            message:'我是成电伊藤诚',
        },
        methods:{
            reserveMessage:function () {
               this.message=this.message.split('').reverse().join('');
            }
        }
    });

    var test6=new Vue({
        el:'#test6',
        data:{
            message:'我是伊藤诚'
        }
    });

    Vue.component('lisp-item',{
        props:['u'],
        template:'<li>{{u.text}}</li>'
    });

    var test7=new Vue({
        el:'#test7',
        data:{
            lists:[
                {id:0,text:'one shut one kill'},
                {id:1,text:'hero is never die'},
                {id:2,text:'to see is to believe'}
            ]
        }
    });
    var vum=Vue.extend({
        template:'<li>{{ todo.text }}</li>',
        props: ['todo']
    });
    Vue.component('todo-item', vum);


    //建立模板
    var guide=Vue.extend({
        template:'<div class="guide">导航栏</div>',
    })
    var main=Vue.extend({
        template:'<div id="contain"><div class="side">侧边栏</div><div class="main_frame">主窗口</div></div>'
    })
    var below=Vue.extend({
        template:'<div class="below"></div>'
    })
    //注册模板
    Vue.component('app-guide',guide);
    Vue.component('app-mid',main);
    Vue.component('app-below',below);
    new Vue({
        el:'#test9',
    })

}


