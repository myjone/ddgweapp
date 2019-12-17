<template>
	<section class='wrap'>
		<view class="item" v-for='(item,index) in iconList' :key='index' @click='copyName(item.name)'>
			<ddIcon :type="item.name" size="36" :color="navColor"  ></ddIcon>
		</view>
	</section>
</template>
<script>
	import ICONJSON from "@/utils/json/icon.js"
	import ddIcon from '@/components/dd-icon/dd-icon.vue'
	export default{
		components:{
			ddIcon
		},
		data(){
			return{
				iconList:ICONJSON,
				navColor:"#333",
				edit:'edit',
				
			}
		},
		methods:{
			copyName(name){
				uni.setClipboardData({
					data:name,
					success:function(res){
						
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.wrap{
		width:100%;
		.item{
			width:20%;
			height:100rpx;
			display:flex;
			align-items: center;
			justify-content:center;
			float:left;
		}
	}
</style>
