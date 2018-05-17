<template>
	<div>
		<good2 :level="2">Hello world!</good2>
		<good1></good1>
	</div>
</template>
<script>
	import good2 from "./userful/good2"
	import good1 from "./userful/good1"
	export default{
		name:"userful",
		components:{
			good1,
			good2
		},
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
	div{
		background: #03ccbb;
	}
</style>