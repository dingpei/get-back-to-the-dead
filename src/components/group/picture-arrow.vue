<template>
	<div id="content">
		<span v-show="isActive && isShow"></span>
		<div @mouseenter="leftArrow" @mouseleave="rightArrow" class="box">
			<div>
				<img src="../../../static/images/3.png" alt="">
				<img src="../../../static/images/1.jpg" alt="">
				<img src="../../../static/images/2.jpg" alt="">
				<img src="../../../static/images/3.png" alt="">
				<img src="../../../static/images/1.jpg" alt="">
			</div>
		</div>
		<span v-show="isActive && !isShow"></span>
	</div>
</template>
<script>
	export default{
		name:"group",
		data(){
			return{
				isActive:false,
				isShow:false,
			}
		},
		methods:{
			leftArrow:function(){
				this.isActiveShow();
				var offsetL = $('#content .box').offset().left;
				var offsetR = $('#content .box').offset().right;
				console.log(offsetL)
			},
			rightArrow:function(){
				this.isActiveShow();
			},
			isActiveShow:function(){
				this.isActive = !this.isActive;
			}
		},
		mounted(){
			// console.log($('#content span:last-child'))
			
		}
	}
</script>
<style scoped>
	#content{
		position: relative;
		width: 400px;
		height: 400px;
		margin:0 auto;
		padding:30px;
	}
	#content span{
		position: absolute;
		width: 30px;
		height: 300px;
		top:40px;
		background: #f90;
		z-index: 22;
	}
	#content span:first-child{
		left:0;
	}
	#content span:last-child{
		right: 0;
	}
	#content div.box{
		width: 400px;
		height: 300px;
		overflow: hidden;
	}
	#content div.box div{
		width: 100000000px;
		height: 100%;
	}
</style>