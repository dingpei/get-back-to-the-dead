<template>
	<div>
		<router-link to="/form/checkbox">checkbox</router-link>
		<router-link to="/form/input">input</router-link>
		<router-link to="/form/select">select</router-link>
		<router-link to="/form/align">align</router-link>
		<router-link to="/form/upload">upload</router-link>
		<router-link to="/form/color">color</router-link>
		<router-view></router-view>
		<el-radio v-model="radio" label="1">备选项</el-radio>
  		<el-radio v-model="radio" label="2">备选项</el-radio>
		<el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
  		<el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>

  		<el-radio-group v-model="radio2">
		    <el-radio :label="3">备选项</el-radio>
		    <el-radio :label="6">备选项</el-radio>
		    <el-radio :label="9">备选项</el-radio>
		  </el-radio-group>
		<button @click="slect">选择</button>
		<div>
		    <el-radio-group v-model="radio3">
		      <el-radio-button label="上海"></el-radio-button>
		      <el-radio-button label="北京"></el-radio-button>
		      <el-radio-button label="广州"></el-radio-button>
		      <el-radio-button label="深圳"></el-radio-button>
		    </el-radio-group>
		  </div>
		  <div style="margin-top: 20px">
		    <el-radio-group v-model="radio4" size="medium">
		      <el-radio-button label="上海" ></el-radio-button>
		      <el-radio-button label="北京"></el-radio-button>
		      <el-radio-button label="广州"></el-radio-button>
		      <el-radio-button label="深圳"></el-radio-button>
		    </el-radio-group>
		  </div>
		  <div style="margin-top: 20px">
		    <el-radio-group v-model="radio5" size="small">
		      <el-radio-button label="上海"></el-radio-button>
		      <el-radio-button label="北京" disabled ></el-radio-button>
		      <el-radio-button label="广州"></el-radio-button>
		      <el-radio-button label="深圳"></el-radio-button>
		    </el-radio-group>
		  </div>
		  <div style="margin-top: 20px">
		    <el-radio-group v-model="radio6" disabled size="mini">
		      <el-radio-button label="上海"></el-radio-button>
		      <el-radio-button label="北京"></el-radio-button>
		      <el-radio-button label="广州"></el-radio-button>
		      <el-radio-button label="深圳"></el-radio-button>
		    </el-radio-group>
		  </div>
	</div>
</template>
<script>
	export default{
		name:'icon',
		data(){
			return {
				radio: '1',
				radio1: '选中且禁用',
				radio2: 3,
				radio3: '上海',
		        radio4: '上海',
		        radio5: '上海',
		        radio6: '上海'
			}
		},
		methods:{
			slect(){
				console.log(this.radio3)
				console.log(this.radio4)
				console.log(this.radio5)
				console.log(this.radio6)
			}
		}
	}
</script>
<style scoped>
/*	.el-radio-button--primary{
		background: #f90;
	}*/
</style>