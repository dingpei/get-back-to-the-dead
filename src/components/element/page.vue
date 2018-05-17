<template>
    <div class="form-group ">
        <h1>分页器控件</h1>
        <div class="block">
          <span class="demonstration">页数较少时的效果</span>
          <el-pagination
            background
            @current-change="currentChange"
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
        </div>
        <div class="block">
          <span class="demonstration">大于 {{111}}</span>
          <el-pagination
              background
              @current-change="currentChange"
              layout="prev, pager, next"
              :total="222" :page-size="10">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default{
    	name:'page',
        data(){
            return {
                
            }
        },
        methods:{
           currentChange(val){
            // console.log(val)
           }
        }

    }
</script>
<style scoped>
    h1{
        font-size: 30px;
        color:green;
        text-align: center;
    }
</style>

