<template>
	<div class="box">
		<span>筛选：</span>
   	 	<div class="all">
   	 		<b class="all_sec"></b>
   	 		<ul>
 				<li v-for="item in datas">
 					{{item}}
 				</li>
   	 		</ul>
   	 	</div>
	</div>
</template>
<script>
	export default{
		name:"meetDate",
		data(){
			return{
				datas:[1,2,3,4,5,6]
			}
		}
	}
</script>
<style scoped>
	.box{
		width: 100px;
	}
	span{
		display: block;
		width: 100%;
		background: #f90;
		line-height: 30px;
	}
	.all b{
		width: 100%;
	}
	li{
		background: #eee;
	}
	li:hover{
		background: #ff0;
	}
</style>