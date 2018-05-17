<template>
	<article class="center">
		<Row>
	        <Col span="12">col-12</Col>
	        <Col span="12">col-12</Col>
	    </Row>
	    <br>
	    <Row>
	        <Col span="8">col-8</Col>
	        <Col span="8">col-8</Col>
	        <Col span="8">col-8</Col>
	    </Row>
	    <br>
	    <Row>
	        <Col span="6">col-6</Col>
	        <Col span="6">col-6</Col>
	        <Col span="6">col-6</Col>
	        <Col span="6">col-6</Col>
	    </Row>
	    <Row :gutter="16">
	        <Col span="6">
	            <div>col-6</div>
	        </Col>
	        <Col span="6">
	            <div>col-6</div>
	        </Col>
	        <Col span="6">
	            <div>col-6</div>
	        </Col>
	        <Col span="6">
	            <div>col-6</div>
	        </Col>
	    </Row>
	</article>
</template>
<script>
	
	export default{
		name:"iviewLayout",
		data(){
			return{

			}
		},
		methods:{

		},
		mounted(){

		}
	}
</script>
<style scoped>
	.ivu-row .ivu-col div{
		background: #f90;
	}
</style>