<template>
	<div class="heander">
		<div id="example-1">
		  <button @click="show = !show">
		    Toggle render
		  </button>
		  <transition name="slide-fade">
		    <p v-if="show">hello</p>
		  </transition>
		</div>

		<div id="example-2">
		  <button @click="show = !show">Toggle show</button>
		  <transition name="bounce">
		    <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
		  </transition>
		</div>

		<div id="example-3">
		  <button @click="show = !show">
		    Toggle render
		  </button>
		  <transition
		    name="custom-classes-transition"
		    enter-active-class="animated tada"
		    leave-active-class="animated bounceOutRight"
		  >
		    <p v-if="show">hello</p>
		  </transition>
		</div>
	</div>
</template>
<script>
	export default{
		name:"apps",
		data(){
			return{
				datas:"子组件2",
				show:true
			}
		},
		methods:{
			send(name){
				console.log(name)
			}
		},
		beforeMounted(){
			this.$on("aaa",function(index){
				console.log("beforeMounted")
			})
		}
	}
</script>
<style scoped>
	/* 可以设置不同的进入和离开动画 */
	/* 设置持续时间和动画函数 */
	.slide-fade-enter-active {
	  transition: all .3s ease;
	}
	.slide-fade-leave-active {
	  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-to
	/* .slide-fade-leave-active for below version 2.1.8 */ {
	  transform: translateX(10px);
	  opacity: 0;
	}
	.bounce-enter-active {
	  animation: bounce-in .5s;
	}
	.bounce-leave-active {
	  animation: bounce-in .5s reverse;
	}
	@keyframes bounce-in {
	  0% {
	    transform: scale(0);
	  }
	  50% {
	    transform: scale(1.5);
	  }
	  100% {
	    transform: scale(1);
	  }
	}
	.heander{
		padding:40px;
	}
</style>