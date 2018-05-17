<template>
	<div>
		<el-input
		  placeholder="请输入内容"
		  v-model="input10"
		  clearable>
		</el-input>

		<div class="demo-input-suffix">
		  属性方式：
		  <el-input
		    placeholder="请选择日期"
		    suffix-icon="el-icon-date"
		    v-model="input2">
		  </el-input>
		  <el-input
		    placeholder="请输入内容"
		    prefix-icon="el-icon-search"
		    v-model="input21">
		  </el-input>
		</div>
		<div class="demo-input-suffix">
		  slot 方式：
		  <el-input
		    placeholder="请选择日期"
		    v-model="input22">
		    <i slot="suffix" class="el-input__icon el-icon-date"></i>
		  </el-input>
		  <el-input
		    placeholder="请输入内容"
		    v-model="input23">
		    <i slot="prefix" class="el-input__icon el-icon-search"></i>
		  </el-input>
		</div>

		<el-input
		  type="textarea"
		  :rows="2"
		  placeholder="请输入内容"
		  v-model="textarea">
		</el-input>

		<el-input
		  type="textarea"
		  autosize
		  placeholder="请输入内容"
		  v-model="textarea2">
		</el-input>
		<div style="margin: 20px 0;"></div>
		<el-input
		  type="textarea"
		  :autosize="{ minRows: 2, maxRows: 4}"
		  placeholder="请输入内容"
		  v-model="textarea3">
		</el-input>

		<el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
	</div>
</template>
<script>
	export default{
		name:'eInput',
		data(){
			return {
				input10: '',
				input2: '',
			    input21: '',
			    input22: '',
			    input23: '',
			    textarea: '',
			    textarea2: '',
			    textarea3: '',
			    num8: 1
			}
		},
		methods:{
			 handleChange(value) {
		        // console.log(value);
		      }
		}
	}
</script>
<style scoped>
	
</style>