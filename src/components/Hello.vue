<template slot-scope="props">
 <div class="bar">
      <div id="box">
        <h1>jsonp请求百度接口</h1>
        <input type="text" v-model="keyword" @keyup="get($event)" placeholder="请输入您要搜索的关键词" class="input_s"  @keydown.down="changeDown()" @keydown.up.prevent="changeUp()">
        <ul class="ul_se">
            <li v-for="(value,$index) in myData" :class="{gray:$index==now}" @click="clickChose($index)">
                {{value}}
            </li>
        </ul>
        <p v-show="myData.length==0">暂无数据...</p>
    </div>
    <!-- <app></app>
    <apps></apps> -->
    <meetdate></meetdate>
    <son></son>
    <son1></son1>
    <div class="my-component">
      <h1>这是父组件</h1>

      <!-- 单个插槽 -->
      <childrens>
        <p>这是一些初始内容</p>
        <p>这是更多的初始内容</p>

      </childrens>
      <!-- 多个插槽 -->
      <childrens class="color">
        <p><h1 slot="header">这是新的插槽</h1></p>
        <p slot="main">这是新的插槽</p>
        <p><h1 slot="footer">这是新的插槽</h1></p>
        
      </childrens>
     <!-- 2.1.0 新增 -->
      <childs>
         <template slot-scope="props">
          <div slot-scope="props">
            <span @click="parents">hello from parent</span><br>
            <span>{{ props.citys.city }}</span>
          </div>
        </template>
      </childs>
      
     <!-- 2.5.0+ -->
      <childs>
          <div slot-scope="props">
            <span @click="parents">hello from parent</span><br>
            <span>{{ props.citys.city }}</span>
          </div>
      </childs>
    </div>
    <div>
      <button @click="tab">切换组件</button>
    <!-- 显示某个组件 -->
      <component :is="currentView"></component>
    </div>

  </div>
</template>

<script>
    import app from './practice/app'
    import apps from './practice/apps'
    import childrens from './practice/children'
    import childs from './practice/child'
    import son from './module/son'
    import son1 from './module/son1'
    import meetdate from './practice/meet_date'
    // import myvideo from './plug-in-unit/myvideo'

    export default {
        data() {
            return {
                myData:[],
                    keyword:'',
                    now:-1,
                currentView: 'app'
            }
        },
        components:{
          app,
          apps,
          meetdate,
          son,
          son1,
          childrens,
          childs
        },
        methods:{
            tab(){
              this.currentView = "apps";
            },
            parents(){
              console.log(event.target)
            },
             get(ev){ //键盘操作
                  if(ev.keyCode==38 || ev.keyCode==40)
                        return;
                 if(ev.keyCode==13){
                       window.open('https://www.baidu.com/s?wd='+this.keyword);
                       this.keyword='';
                }
                this.$http.jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su", //跨域请求接口
                    {
                    params: {
                        wd:this.keyword,
                    },
                    jsonp:'cb'
                }).then(function(res){
                    this.myData = JSON.parse(res.bodyText).s
                },function(){
                    console.log("请求失败！！！")
                });
              },

             changeDown(){ //下键选择
                this.now++;
                if(this.now==this.myData.length)this.now=-1;
                this.keyword=this.myData[this.now];
            },

            changeUp(){ //上键选择
                this.now--;
                if(this.now==-2)this.now=this.myData.length-1;
                this.keyword=this.myData[this.now];
            },
             clickChose($index){  //鼠标选择搜索关键词事件
                this.now = $index;
                this.keyword=this.myData[this.now];
                window.open('https://www.baidu.com/s?wd='+this.keyword);
            },

       },
       beforeMounted(){
          this.$on("aaa",function(index){
            console.log("beforeMounted")
          })
        }
    }
</script>
<style scoped>
/*.ul_se{ background: #fff; border: 1px solid #ccc; width: 100%;}
.ul_se li{list-style: none; height: 30px; line-height: 30px; cursor: pointer;}
.input_s{width: 400px; height: 30px; padding-left: 10px;}
.gray{background: deepskyblue; color: #fff;}
.ul_se li:hover{background: deepskyblue; color: #fff;}*/
.bar{
  position: relative;
}
.color{
  background: #f89;
}
</style>