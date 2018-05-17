<template>
	<div>
		<div ref="dateAll" class=" dateTime" @mouseenter="dataShow" @mouseleave="dataHidden">
			<h6 ref="meetDate">{{meetDates}}</h6>
			<div ref="contentDate" class="dateContent" :class="{noDateShow:isActive}">
				<div class="dateYear">
					<i @click="add"></i>
					<b ref="year">{{year}}</b>
					<i @click="des"></i>
				</div>
				<ul class="dateMouth hidden">
					<li @click="month" v-for="item in dates">{{item}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default{
		name:"meetDate",
		data(){
			return{
				dates:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月",],
				year:new Date().getFullYear()+'年',
				isActive:false,
				meetDates:"会议时间"
			}
		},
		watch:{
		},
		methods:{
			add:function(){
				event.stopPropagation(); 
				var num = parseInt(this.$refs.year.innerHTML.slice(0,4));
				this.$refs.year.innerHTML = --num + "年"

			},
			des:function(){
				event.stopPropagation(); 
				var num = parseInt(this.$refs.year.innerHTML.slice(0,4));
				this.$refs.year.innerHTML = ++num + "年"
			},
			month:function(){
				event.stopPropagation(); 
				this.meetDates = this.year + event.target.innerHTML;				
				this.$refs.meetDate.className="active";
				this.isActive = false;
				//日期获取
				var str = this.$refs.meetDate.innerHTML.slice(0,4);
				if(event.target.innerHTML.split("月")[0] < 10){
					str += '-'+ 0 +event.target.innerHTML.split("月")[0];
				}else{

					str += '-'+ event.target.innerHTML.split("月")[0];
				}
				
				//调用父组件的方法
				// this.$parent.eDate(str);
				this.$emit("onItemClick",str)
			},
			dataShow:function(){
				this.isActive = true;
			},
			dataHidden:function(){
				this.isActive = false;
			}
		},
		created(){
			var self = this;
		}
	}
</script>
<style>
	ul{
		list-style: none;
	}
	.dateTime{
		position: relative;
	}
	.dateTime h6{

		height: 30px;
	}
	.dateTime h6.active{
		color: #333333;
	}
	.dateContent{
		position: absolute;
		/*right: 25px;*/
		width: 140px;
		top:31px;
		z-index: 100;
		display: none;
		background: #fff;
		border: 1px solid #D6D6D6;
		box-shadow: 0 2px 6px 0 rgba(51,51,51,0.20);
		border-radius: 0 0 2px 2px;
	}
	.noDateShow{
		display: block;
	}
	.dateYear{
		font-size: 14px;
		color:#333;
		line-height: 20px;
		position: relative;
		background: #EDF5FF;
		text-align: center;
		font-size: 14px;
		color: #333333;
		line-height: 36px;
	}
	.dateYear i{
		position: absolute;
		left:12px;
		top:13px;
		cursor: pointer;
		width: 7px;
		height: 7px;
		background: #EDF5FF;
		border:solid 1px #999;
		border-right: solid 1px #EDF5FF;
		border-top: solid 1px #EDF5FF;
		transform: rotate(45deg);
	}
	.dateYear i:last-child{
		left: 118px;
		transform: rotate(-135deg);
	}
	.dateTime div.noDate{
		display: block;
	}
	.dateMouth{
		padding-top: 9px;
		padding-bottom: 10px;
		cursor: pointer;
	}
	.dateMouth li{
		float: left;
		padding:6px 23px;
		font-size: 12px;
		color: #333333;
		line-height: 17px;
	}
	.dateMouth li:nth-child(11){
		padding-right: 19px;
	}
</style>