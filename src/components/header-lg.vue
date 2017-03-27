<template>
	<div id='header-lg'>
		<h3>{{ bigTitle }}</h3>
		<h4> {{ noteTitle }} </h4>
	</div>
</template>

<script>

	export default{
		name:'header-lg',
		props:['bigTitle','noteTitle']
	}

</script>

<style scoped lang='less'>
	@import "../assets/css/variables.less";
	#header-lg{
		height: 150px;
		width: 100%;
		box-shadow: #ddd 0 3px;
		background:linear-gradient(270deg,@green 0%,@turquoise 100%);
		color: @white;
	}	
	h3{
		padding: 35px 0 0 117px;
		font-size: 280%;
	}
	h4{
		padding: 10px 0 0 110px;
		font-size: 110%;
	}
</style>




