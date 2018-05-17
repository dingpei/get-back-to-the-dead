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
      <el-button @click="visible = true">按钮</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>欢迎使用 Element</p>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'tree',
  components: {
    },
    data() {
      return {
         visible: false
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
