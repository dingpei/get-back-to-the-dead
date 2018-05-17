<template>
	<div>
		<less></less>
		<div id="container" style="float:none;margin: 0px auto;"></div>
		<!-- <calender></calender> -->
		<pictureArrow></pictureArrow>
	</div>
</template>
<script>
	import less from "./less"
	import calender from "./calender"
	import pictureArrow from "./picture-arrow"
	export default{
		name:"group",
		components:{
			less,
			calender,
			pictureArrow
		},
		data(){
			return{

			}
		},
		mounted(){
			this.dateInstantiate.dateComponent("#container", "400px", "500px");
		}
	}
</script>
<style scoped>
	
</style>