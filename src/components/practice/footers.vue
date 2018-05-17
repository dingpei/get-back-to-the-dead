<template>
	<div>
		<div v-show="someChildProperty">Child2</div>
	</div>
</template>
<script>
	export default{
		name:"footers",
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
		background: #eee;
		padding:10px;
	}
</style>