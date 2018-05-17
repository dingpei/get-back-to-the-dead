<template>
	<div>
		<div v-show="someChildProperty">
			<span>Child1</span>
			<slot></slot>	
		</div>
		<header>
			<slot name="hearder"></slot>
		</header>
		<div class="child">
		  <slot name="main" text="hello from child"></slot>
		</div>
	</div>
</template>
<script>
	export default{
		name:"top",
		props:["sss"],
		data(){
			return {
				someChildProperty: true
			}
		},
		methods:{
			
		}
	}
</script>
<style scoped>
	div{
		background: #f90;
	}
</style>