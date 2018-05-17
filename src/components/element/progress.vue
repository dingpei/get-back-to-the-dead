<template>
	<div>
		<el-progress :percentage="0"></el-progress>
		<el-progress :percentage="70"></el-progress>
		<el-progress :percentage="100" status="success"></el-progress>
		<el-progress :percentage="50" status="exception"></el-progress>

		<el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
		<el-progress :text-inside="false" :stroke-width="25" :percentage="70"></el-progress>
		<el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
		<el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
		<br>圆形进度条<br>
		<el-progress type="circle" :percentage="0"></el-progress>
		<el-progress type="circle" :percentage="number"></el-progress>
		<el-progress type="circle" :percentage="100" status="success"></el-progress>
		<el-progress type="circle" :percentage="50" status="exception"></el-progress>
	</div>
</template>
<script>
	export default{
		name:"eprogress",
		data(){
			return {
				number:20,
			}
		},

	}
</script>