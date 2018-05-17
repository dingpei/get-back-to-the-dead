<template>
	<div>
		<button @click="isActive && dain(1111111)">{{eClick}}</button>
		<dates v-on:names="dain"></dates>
		<zi v-on:lala="dain"></zi>
		<div class="ja" v-if="isActive">
			11111111111莱克斯顿胡椒粉来看待
			{{isActive}}
		</div>
	</div>
</template>
<script>
	import dates from './date'
	import zi from './zi'
	export default{
		name:"layHolyGrail",
		components:{
          dates,
          zi
        },
		data(){
			return {
				 isActive:false,
				 eClick:"点击"
			}
		},
		methods:{
			  dain(index) {
			  	this.eClick = index;
			  },
			  jjj:function(datas){
			  	console.log(datas)
			  }
		},
		monted(){
		}
}
</script>
<style scoped>
	.ja{
		margin-top: 20px;
	}
</style>