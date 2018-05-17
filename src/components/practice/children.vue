<template>
	<div class="container">
		<h2>我是子组件的标题</h2>
		<!-- <slot>
		    只有在没有要分发的内容时才会显示。
  		</slot> -->

  		<header>
  			<slot name="header"></slot>
  		</header>
  		<main>
  			<slot name="main"></slot>
  		</main>
  		<footer>
  			<slot name="footer"></slot>
  		</footer>
	</div>
</template>
<script>
	export default{
		name:"children",
		data(){
			return {
				showStatus:true,
			}
		}
	}
</script>
<style scoped>
	
</style>