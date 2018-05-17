<template>
	<div>
		<el-select class="eSelect" v-model="value" placeholder="请选择">
		    <el-option
		      v-for="item in options"
		      :key="item.value"
		      :label="item.label"
		      :value="item.value">
		    </el-option>
		  </el-select>
	</div>
</template>
<script>
	export default{
		name:'icon',
		data(){
			return {
				options: [{
		          value: '选项1',
		          label: '黄金糕'
		        }, {
		          value: '选项2',
		          label: '双皮奶'
		        }, {
		          value: '选项3',
		          label: '蚵仔煎'
		        }, {
		          value: '选项4',
		          label: '龙须面'
		        }, {
		          value: '选项5',
		          label: '北京烤鸭'
		        }],
		        value: ''
			}
		},
		methods:{
			
		}
	}
</script>
<style scoped>
	.eSelect{
		background: #f90;font-size: 14px;
		font-size: 30px;
		height: 30px;
	}
</style>