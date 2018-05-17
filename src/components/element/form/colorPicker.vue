<template>
	<div>
		<div class="block">
		  <span class="demonstration">有默认值</span>
		  <el-color-picker v-model="color1"></el-color-picker>
		</div>
		<div class="block">
		  <span class="demonstration">无默认值</span>
		  <el-color-picker v-model="color2"></el-color-picker>
		</div>

		<el-color-picker v-model="color3" show-alpha></el-color-picker>

		<el-color-picker v-model="color4"></el-color-picker>
		<el-color-picker v-model="color4" size="medium"></el-color-picker>
		<el-color-picker v-model="color4" size="small"></el-color-picker>
		<el-color-picker v-model="color4" size="mini"></el-color-picker>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        color1: '#409EFF',
        color2: null,
        color3: 'rgba(19, 206, 102, 0.8)',
        color4: '#409EFF'
      }
    }
  };
</script>