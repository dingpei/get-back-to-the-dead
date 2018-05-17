<template>
	<div class="box">
		<p>家里呢离开的烦恼
			<div>
				<span>家里呢离开的烦恼</span>
			</div>
		</p>
	</div>
</template>

<style scoped lang="less" rel="stylesheet/less">
	@allBk:#f90;
	.box{
		background: @allBk;
		p{
			font-size: 30px;
			width: 120px;
			color:#fff;
			&:extend(.wo);
			background:#03ccbb;
		}
	}
	.wo{
		background:#03cb;
	}
</style>