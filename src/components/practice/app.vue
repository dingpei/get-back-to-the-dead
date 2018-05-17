<template>
	<div>
		<div @click="send">
			{{datas}}<br>
			{{reversedMessage}}  <br>
			{{now}}
		</div>
		<div>{{ message | capitalize }}
		<div>
			<button @click="openTop()">top</button>
	         <button @click="openCenter()">center</button>
	         <button @click="openBottom()">bottom</button>
			<button @click="openLoading()">loading</button>
		</div>
		<div id="counter-event-example">
			  <p>{{ total }}</p>
			  <button-counter v-on:increment="incrementTotal"></button-counter>
			  <button-counter v-on:increment="incrementTotal"></button-counter>
			</div>
		</div>
		<keep-alive>
			<component v-bind:is="currentView">
			  <!-- 组件在 vm.currentview 变化时改变！ -->
			</component>
		</keep-alive>
		<top>
			<!-- 插槽的使用（可以使子组件内部的数据显示出来） -->
			<p>这是子组件内部</p>
			<p>这是子组件内部</p>
			<p>这是子组件内部</p>
			 <!-- <span slot-scope="{ text }">{{ text }}</span> -->
		</top>
		<br>
		<h1 slot="hearder">只是header</h1>
		<div id="demo">
		  <button v-on:click="show = !show">
		    Toggle
		  </button>
		  <transition name="fade">
		    <p v-if="show">hello</p>
		  </transition>
		</div>
	</div>
</template>
<script>
	import buttonCounter from "./button_counter"
	import top from "./top"
	import footers from "./footers"
	var obj = {
	  foo: 'bar'
	}
	export default{
		name:"app",
		components:{
			buttonCounter,
			top,
			footers
		},
		data(){
			return{
				datas:"子组件123456",
				fullName:"the far",
				message:"这是第一个信息",
				arrs:[1,2,3,4,5,6,7],
				total: 0,
				currentView:'footers',
				show:true
			}
		},
		computed:{
			reversedMessage:function(){
				return this.datas.split('').reverse().join("")
			},
			now:function(){
				return Date.now();
			},
			newFullName:{
				set:function(){
					return this.fullName + this.datas;
				},
				get:function(){
					this.fullName = "这就是我"
				}
			}

		},
		filters:{
			capitalize:function(value){
				if (!value) return ''
				
				return value +"！这是后面加上的"
			}
		},
		methods:{
			send(){
				// console.log("send1111111")
				this.$emit("aaa",this.datas)
			},
			openTop(){
				this.$toast('top');
			},
			openCenter(){
				this.$toast("center")
			},
			openBottom(){
	             this.$toast('bottom');  // or this.$toast.bottom('bottom'); 
	       },
	       openLoading(){
	            this.$loading('loading...');
				let self = this;
		        setTimeout(function () {
		          self.closeLoading()
		        }, 2000)
	        },
	        closeLoading(){
	            this.$loading.close();
		    },
		    incrementTotal: function () {
		      this.total += 1;
		    }
		},
		mounted(){
			// console.log(this.$msg);//封装的数据
			// this.$arrayDeweighting(this.arrs);//Toast中封装的方法
		}
	}
</script>
<style scoped>
	.submit span{
		padding:20px;
		background: #eee;
	}
	p{
		background: #03ccbb;
	}
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	  opacity: 0;
	}


</style>