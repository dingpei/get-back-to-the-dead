<template>
	<div>
		<i class="el-icon-edit"></i>
		<i class="el-icon-share"></i>
		<i class="el-icon-delete"></i>
		<i class="el-icon-loading"></i>
		<el-button type="primary" icon="el-icon-search">搜索</el-button>
		<!-- 遮罩层 -->遮罩层
		<el-button  type="primary"  @click="onSearch">查询</el-button>
	</div>
</template>
<script>
	export default{
		name:'icon',
		data(){
			return {

			}
		},
		methods:{
			onSearch() {
			    const loading = this.$loading({
			      lock: true,
			      text: 'Loading',
			      spinner: 'el-icon-loading',
			      background: 'rgba(0, 0, 0, 0.65)',
			      target: document.querySelector('.div1')
			    });
			    setTimeout(() => {
			      loading.close();//关闭遮罩层
			    }, 2000);
			}
		}
	}
</script>
<style scoped>
	.el-button--primary:active{
	    background: blue;
	}
	.el-button--primary{
	    background: #03ccbb ;
	}
</style>