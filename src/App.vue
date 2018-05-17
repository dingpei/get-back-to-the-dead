<template>
 <div ref="wode" class="bar" id="app">
    <p @click="my">我的</p>
    <input type="text" v-focus>
    <div class="box">
      <section>element UI</section>
      <h1>第一层</h1>
      <router-link to="/h">hello</router-link>
      <router-link to="/page">page</router-link>
      <router-link to="/tree">tree</router-link>
      <router-link to="/layout">layout</router-link>
      <router-link to="/layout1">layout1</router-link>
      <router-link to="/icon">icon</router-link>
      <router-link to="/form">form</router-link>
      <router-link to="/progress">progress</router-link>
      <router-link to="/loading">loading</router-link>
      <router-link to="/dropdown">dropdown</router-link>
      <router-link to="/group">组件</router-link>
      <router-link to="/jsonpBaidu">jsonp百度和视频</router-link>
      <router-link to="/userful">userful</router-link>
      <router-link to="/iview">iview</router-link>
    </div>
<!--     <div>
      <h1>第二层</h1>
      <section>布局</section>
      <router-link to='/layoutHolyGrail'>layoutHolyGrail</router-link>
    </div>

    <div>
      <h1>第三层</h1>
      <section>练习</section>
      <router-link to='/eApp'>eApp</router-link>
    </div>
    <div>
      <h1>第四层</h1>
      <router-link to="/filters">filters</router-link>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
  // import 
    export default {
        data() {
            return {
               
            }
        },
        directives:{
          // 注册一个局部的自定义指令 v-focus
          focus:{
            inserted:function(el){
              el.focus()
            }
          }
        },
        computed:{

        },

         methods:{
            my:function(){
              this.$router.push("/group")
            }
       },
       mounted(){
        // console.log(this.$refs)
        // // this.$layer.alert("找不到对象！");
        //   console.log(this.$store.state)
       }
    }
</script>
<style scoped lang="less">
  h1{
    padding-left: 100px;
  }
  .router-link-active{
    background: #f90;
    color:#fff;
    font-size: 30px;
  }
  
  *{
    text-decoration: none;
  }
  #app{
    color:#333;
    .box a{
      margin-right: 10px;
    }
  }
</style>