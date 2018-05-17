<template>
	<div>
		<h1 v-on:click="aaa">aaaaaaaaa</h1>
	</div>
</template>
<script>
	export default{
		name:"zi",
		data(){
			return {
				lala:"12345"
			}
		},
		methods:{
			aaa(){
				this.$emit("lala",this.lala);
				this.$emit("jjj","1111111")
			}
		}

	}
</script>
<style scoped>
	h1{
		font-size: 20px;
		position: absolute;
		right: 0;
	}
</style>