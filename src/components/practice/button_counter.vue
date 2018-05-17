<template>
	<div>
		<button v-on:click="incrementCounter">{{ counter }}</button>
	</div>
</template>
<script>
	export default{
		name:"buttonCounter",
		data(){
			return {
				counter: 0
			}
		},
		methods:{
			incrementCounter: function () {
		      this.counter += 1;
		      this.$emit('increment')
		    }
		}
	}
</script>