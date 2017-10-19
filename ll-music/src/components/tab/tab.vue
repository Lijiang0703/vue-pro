<template>
	<div class="tab">
		<ul class="tab_list">
			<router-link tag= "li" to="./recommend" class="link-item">
				<span>推荐</span>
			</router-link>
			<router-link tag= "li" to="./singer" class="link-item">
				<span>歌手</span>
			</router-link>
			<router-link tag= "li" to="./rank" class="link-item">
				<span>排行</span>
			</router-link>
			<router-link tag= "li" to="./search" class="link-item">
				<span>搜索</span>
			</router-link>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {}
</script>

<style lang="stylus">
	.tab
		padding:10px
		.tab_list
			width:100%
			display:flex
			align-item:flex-end
			flex-wrap:no-wrap
		.link-item
			flex-grow:1
			text-align:center
			color : #ccc
			span
				padding:5px 0
			&.router-link-active 
				color: #e02860
				span
					border-bottom:2px solid #e02860
	
</style>