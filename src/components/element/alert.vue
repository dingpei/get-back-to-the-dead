<template>
  <div class="hello">
      弹窗
      <div>
         <el-alert
            title="成功提示的文案"
            type="success"
            show-icon>
          </el-alert>
          <el-alert
            title="消息提示的文案"
            type="info"
            show-icon>
          </el-alert>
          <el-alert
            title="警告提示的文案"
            type="warning"
            show-icon>
          </el-alert>
          <el-alert
            title="错误提示的文案"
            type="error"
            show-icon>
          </el-alert>
      </div>
  </div>
</template>

<script>
export default {
  name: 'tree',
  components: {
    },
    data() {
      return {
       
      }
    },
    methods:{
       hello() {
        alert('Hello World!');
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
