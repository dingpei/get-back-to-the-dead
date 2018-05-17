<template>
	<div class="container">
		<h2>我是child子组件的标题</h2>
		<div class="mg">
			<slot :citys="message">
			    <div>
			    	只有在没有要分发的内容时才会显示。
			    </div>
	  		</slot>
		</div>
	</div>
</template>
<script>
	export default{
		name:"child",
		data(){
			return {
				showStatus:true,
				message:{
					city:"别见怪in"
				}
			}
		}
	}
</script>
<style scoped>
	.mg{
		background: #f09;
	}
</style>