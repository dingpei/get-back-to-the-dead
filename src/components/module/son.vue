<template>
	<div>
		<button @click="dian">son</button>
	</div>
</template>
<script>
	export default{
		name:"son",
		data(){
			return {

			}
		},
		methods:{
			dian(){
				this.$emit("aaa","之二完hi看就看")
			}
		}
	}
</script>
<style scoped>
	div{
		float: right;
	}
</style>