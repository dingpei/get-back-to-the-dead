<template>
	<div :id="isActive" @click="changeStatus">
		{{message | capitalize}} <br>
		{{reversedMessage}}
	</div>
</template>
<script>
	export default{
		name:"filters",
		data(){
			return {
				message:"dghjdbj",
				isActive:"active",
			}
		},
		filters:{
			capitalize:function(value){
				if (!value) return ''
			     value = value.toString();
			     return value.charAt(0).toUpperCase() + value.slice(1)
			}
		},
		computed:{
			reversedMessage:function(){
				return this.message.split('').reverse().join('')
			}
		},
		methods:{
			changeStatus:function(){
				if(this.isActive){
					this.isActive = "";
				}else{
					this.isActive = "active"
				}
			}
		}
	}
</script>
<style scoped>
	#active{
		font-size: 30px;
	}
</style>