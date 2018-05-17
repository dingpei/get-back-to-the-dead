<template>
	<div>
		<app></app>
	</div>
</template>
<script>
	export default{
		name:"good1",
		data(){
			return {
				searchInputValue:"12345678"
			}
		},
		watch:{
			searchInputValue(){

		        this.fetchPostList()

		    }
		},
		methods:{
			fetchPostList(){

			}
		},
		created(){
			this.fetchPostList()
		}
	}
</script>
<style scoped>
	
</style>