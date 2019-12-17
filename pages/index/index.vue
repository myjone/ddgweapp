<template>
	<section class='wrap'>
		<FullLoading></FullLoading>
	</section>
</template>
<script>
	import FullLoading from "@/components/basic/Loading/FullLoading.vue"
	export default {
		components: {
			FullLoading
		},
		data() {
			return {
				title:'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			changeTab(e) {
				console.log(e)
			},
			showLoading(e){
				
			}
		}
	}
</script>
<style lang="scss" scoped>
	.wrap {
		width: 100%;
	}
</style>
