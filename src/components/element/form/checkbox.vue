<template>
	<div class="checkbox">
		<el-checkbox v-model="checked">备选项</el-checkbox>
		<el-checkbox-group v-model="checkList">
		    <el-checkbox label="复选框 A"></el-checkbox>
		    <el-checkbox label="复选框 B"></el-checkbox>
		    <el-checkbox label="复选框 C"></el-checkbox>
		    <el-checkbox label="禁用" disabled></el-checkbox>
		    <el-checkbox label="选中且禁用" disabled></el-checkbox>
		  </el-checkbox-group>
		  <button @click="select">点击</button>
		  <br>全选<br>
		   <el-checkbox v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
		  <div style="margin: 15px 0;"></div>
		  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
		    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
		  </el-checkbox-group>
		  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
  <div style="margin: 15px 0;"></div>
  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
	</div>
</template>
<script>
	const cityOptions = ['上海', '北京', '广州', '深圳'];
	export default{
		name:'checkbox',
		data(){
			return {
				checked: false,
				checkList: [],
				checkAll: false,
		        checkedCities: ['上海', '北京'],
		        cities: cityOptions,
		        isIndeterminate: true
			}
		},
		methods:{
			select(){
				console.log(this.checkedCities)
			},
			 handleCheckAllChange(val) {
		        this.checkedCities = val ? cityOptions : [];
		        this.isIndeterminate = false;
		      },
		      handleCheckedCitiesChange(value) {
		        let checkedCount = value.length;
		        this.checkAll = checkedCount === this.cities.length;
		        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
		      }
		}
	}
</script>
<style scoped>
	.checkbox{
		border:solid 5px #999;
		text-align: center;
		padding:10px;
	}
</style>