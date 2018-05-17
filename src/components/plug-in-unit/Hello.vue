<template>
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
    <myVideo></myVideo>
  </div>
</template>

<script>
    import myVideo from "./video-player"
    export default {
        data() {
            return {
                myData:[],
                    keyword:'',
                    now:-1,
            }
        },
        components:{
          myVideo
        },
        methods:{
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
        }
    }
</script>
<style scoped>
/*.ul_se{ background: #fff; border: 1px solid #ccc; width: 100%;}
.ul_se li{list-style: none; height: 30px; line-height: 30px; cursor: pointer;}
.input_s{width: 400px; height: 30px; padding-left: 10px;}
.gray{background: deepskyblue; color: #fff;}
.ul_se li:hover{background: deepskyblue; color: #fff;}*/
</style>