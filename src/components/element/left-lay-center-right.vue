<template>

  <div class="hello">
	<!--分栏间隔-->分栏间隔
    <el-row :gutter="20">
	  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	</el-row>
	<!--混合布局-->混合布局
	<el-row :gutter="20">
	  <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
	</el-row>
	<el-row :gutter="20">
	  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
	</el-row>
	<el-row :gutter="20">
	  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
	</el-row>
	<!--分栏偏移-->分栏偏移
	<el-row :gutter="20">
	  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
	</el-row>
	<el-row :gutter="20">
	  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></el-col>
	</el-row>
	<el-row :gutter="20">
	  <el-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></el-col>
	</el-row>

  </div>
</template>

<script>
export default {
  name: 'layout',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello{
		width: 1200px;
		background: ;
		padding:10px;
		margin:0 auto;
	}
	.el-row {
	    margin-bottom: 20px;
	    &:last-child {
	      margin-bottom: 0;
	    }
	  }
	  .el-col {
	    border-radius: 4px;
	  }
	  .bg-purple-dark {
	    background: #99a9bf;
	  }
	  .bg-purple {
	    background: #d3dce6;
	  }
	  .bg-purple-light {
	    background: #e5e9f2;
	  }
	  .grid-content {
	    border-radius: 4px;
	    min-height: 36px;
	  }
	  .row-bg {
	    padding: 10px 0;
	    background-color: #f9fafc;
	  }
</style>
