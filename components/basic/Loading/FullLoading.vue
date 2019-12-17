<template>
	<section>
		<view class="loadingWrap" v-if="getFullLoading">
			<view class="loadingContent">
				<view class="loding">
					<ddIcon type="icloading" size="46" color="#000"></ddIcon>
				</view>
			</view>
		</view>
	</section>
</template>

<script>
	import ddIcon from '@/components/dd-icon/dd-icon.vue'
	import {
		mapGetters,
		mapActions,
	} from 'vuex';
	export default {
		components: {
			ddIcon
		},
		data() {
			return {

			}
		},
		computed:{
			...mapGetters(['getFullLoading'])
		},
	}
</script>

<style lang="scss" scoped>
	.loadingWrap {
		width: 100%;
		height: 100vh;
		background: #FFFFFF;
		.loadingContent {
			padding-bottom:10vh;
			width: 100%;
			height: 100vh;
			display: flex;
			align-items: center;
			justify-content: center;
			.loding {
				animation: rotate 1.5s linear infinite;
			}
		}
	}
	@keyframes rotate {
		0% {
			transform: rotate(0deg);
			opacity:1;
		}
		25% {
			transform: rotate(90deg);
			opacity:0.9;
		}
		50% {
			transform: rotate(180deg);
			opacity:0.8;
		}
		75% {
			transform: rotate(270deg);
			opacity:0.9;
		}
		100% {
			transform: rotate(360deg);
			opacity:1;
		}
	}
</style>
