import Vue from 'vue'
// 时间转换
const filter = {
	install(Vue) {
		Vue.filter('wintype',
			function(value) {
				if (value == 'lose') {
					return '0';
				} else if (value == 'draw') {
					return '1';
				} else if (value == 'win') {
					return '3';
				}
			}
		);
		Vue.filter('time',
			function(value) {
				let out = ''
				if (value) {
					value = parseInt(value)
					let date = new Date(value)
					let y = date.getFullYear()
					let m = date.getMonth() + 1
					m = m < 10 ? '0' + m : m
					let d = date.getDate()
					d = d < 10 ? ('0' + d) : d
					let s = date.getHours()
					s = s < 10 ? ('0' + s) : s
					let f = date.getMinutes()
					f = f < 10 ? ('0' + f) : f
					let a = date.getSeconds()
					a = a < 10 ? ('0' + a) : a
					return out = m + '-' + d
				} else {
					return out = ''
				}
			}
		)

		Vue.filter('timeMiniute',
			function(value) {
				let out = ''
				if (value) {
					value = parseInt(value)
					let date = new Date(value)
					let y = date.getFullYear()
					let m = date.getMonth() + 1
					m = m < 10 ? '0' + m : m
					let d = date.getDate()
					d = d < 10 ? ('0' + d) : d
					let s = date.getHours()
					s = s < 10 ? ('0' + s) : s
					let f = date.getMinutes()
					f = f < 10 ? ('0' + f) : f
					let a = date.getSeconds()
					a = a < 10 ? ('0' + a) : a
					return out = m + '-' + d + '' + s + ':' + 'f'
				} else {
					return out = ''
				}
			}
		)
		Vue.filter('chanelTime',
			function(value) {
				if (value) {
					value = parseInt(value)
				}
				let out = ''
				let date = new Date(value)
				let y = date.getFullYear()
				let m = date.getMonth() + 1
				m = m < 10 ? '0' + m : m
				let d = date.getDate()
				d = d < 10 ? ('0' + d) : d
				let s = date.getHours()
				s = s < 10 ? ('0' + s) : s
				let f = date.getMinutes()
				f = f < 10 ? ('0' + f) : f
				let a = date.getSeconds()
				a = a < 10 ? ('0' + a) : a
				out = y + '年' + m + '月' + d + '号'
				return out;
			}
		)
		Vue.filter('secondTime',
			function(value) {
				let out = ''
				if (value) {
					value = parseInt(value)
				} else {
					out = '时间不存在'
				}

				let date = new Date(value)
				let y = date.getFullYear()
				let m = date.getMonth() + 1
				m = m < 10 ? '0' + m : m
				let d = date.getDate()
				d = d < 10 ? ('0' + d) : d
				let s = date.getHours()
				s = s < 10 ? ('0' + s) : s
				let f = date.getMinutes()
				f = f < 10 ? ('0' + f) : f
				let a = date.getSeconds()
				a = a < 10 ? ('0' + a) : a
				out = y + '-' + m + '-' + d + ' ' + s + ':' + f + ':' + s
				return out;
			}
		)
		Vue.filter('TWONUMBER',
			function(value) {
				let out = "";
				value = (value / 100).toString();
				value = value.replace(/[^0-9|\.]/g, ''); //清除字符串中的非数字非.字符
				if (/^0+/.test(value)) //清除字符串开头的0
					value = value.replace(/^0+/, '');
				if (!/\./.test(value)) //为整数字符串在末尾添加.00
					value += '.00';
				if (/^\./.test(value)) //字符以.开头时,在开头添加0
					value = '0' + value;
				value += '00'; //在字符串末尾补零
				out = value.match(/\d+\.\d{2}/)[0];
				return out;
			}
		)
		Vue.filter('yuan',
			function(value) {
				let out = "";
				value = (value / 100).toString();
				value = value.replace(/[^0-9|\.]/g, ''); //清除字符串中的非数字非.字符
				if (/^0+/.test(value)) //清除字符串开头的0
					value = value.replace(/^0+/, '');
				if (!/\./.test(value)) //为整数字符串在末尾添加.00
					value += '.00';
				if (/^\./.test(value)) //字符以.开头时,在开头添加0
					value = '0' + value;
				value += '00'; //在字符串末尾补零
				out = value.match(/\d+\.\d{2}/)[0];
				out = out.split('.')[0];
				return out;
			}
		)
		Vue.filter('branch',
			function(value) {
				let out = "";
				value = (value / 100).toString();
				value = value.replace(/[^0-9|\.]/g, ''); //清除字符串中的非数字非.字符
				if (/^0+/.test(value)) //清除字符串开头的0
					value = value.replace(/^0+/, '');
				if (!/\./.test(value)) //为整数字符串在末尾添加.00
					value += '.00';
				if (/^\./.test(value)) //字符以.开头时,在开头添加0
					value = '0' + value;
				value += '00'; //在字符串末尾补零
				out = value.match(/\d+\.\d{2}/)[0];
				out = out.split('.')[1];
				return out;
			}
		)
		Vue.filter('hideUndfind',
			function(value) {
				let out = " ";
				out = value;
				return out;
			}
		)

		Vue.filter('collectStatusText',
			function(value) {
				let out = " ";
				if (value) {
					out = '加入收藏'
				} else {
					out = '已收藏'
				}
				return out;
			}
		)
		
		Vue.filter('orderType',
			function(value) {
				let out = " ";
				 if(value==2) {
					out = '拼多多'
				}else if(value ==3){
					out = '京东'
				}else{
					out="淘宝"
				}
				return out;
			}
		)
		
		
		Vue.filter('orderStatus',
			function(value) {
				let out = '';
				let status ={
					3:"待结算",
					88:'已结算',
					13:'已失效'
				}
				out = status[value]?status[value]:value
				return out;
			}
		)
		
		
		

		Vue.filter('itemFilter',
			function(value) {
				let itemValue = value.split(':')[0] == '00' ? 24 : parseInt(value.split(':')[0])
				let out = "";
				let nowHours = new Date().getHours();
				if (itemValue === 10) {
					if (nowHours < 10) {
						out = '即将开始'
					} else if (10 <= nowHours && nowHours < 12) {
						out = '正在进行中'
					} else {
						out = '已结束'
					}
				} else if (itemValue === 12) {
					if (nowHours < 12) {
						out = '即将开始'
					} else if (12 <= nowHours && nowHours < 15) {
						out = '正在进行中'
					} else {
						out = '已结束'
					}
				} else if (itemValue === 15) {
					if (nowHours < 15) {
						out = '即将开始'
					} else if (15 <= nowHours && nowHours < 24) {
						out = '正在进行中'
					} else {
						out = '已结束'
					}
				} else if (itemValue === 24) {
					if (0 <= nowHours && nowHours < 10) {
						out = '正在进行中'
					} else {
						out = '即将开始'
					}
				}
				return out;
			}
		)
		Vue.filter('sortTypeName',
			function(value1, value2) {
				let out = " ";
				if (value1 == 1) {
					if (value2) {
						out = '佣金比例'
					} else {
						out = '综合'
					}
				} else {
					out = '综合'
				}
				return out;
			}
		)
		Vue.filter('btnInfo',
			function(value) {
				let out = " ";
				let arr = {
					buy_item: '去购买',
					get_coupon: '去领券',
					view_item: '去浏览',
					taobao_auth: '去授权',
					bind_phone: '去完成',
					first_buy: '去购买',
					new_awward: '去领取',
					detail_award: '去浏览',
				}
				out = arr[value] ? arr[value] : '去完成'
				return out;
			}
		)


		Vue.filter('vipInfo',
			function(value) {
				let out = " ";
				let arr = {
					1: '普通会员',
					2: '金牌会员',
					3: '合伙人',
				}
				if (value) {
					out = arr[value]
				} else {
					out = '普通会员'
				}

				return out;
			}
		)


		Vue.filter('itemTimeDate',
			function(value) {
				let out = "";
				if (value) {
					out = value.split(' ')[1].split(':')[0] + ':' + value.split(' ')[1].split(':')[1];
				} else {
					out = ''
				}

				return out;
			}
		)
		Vue.filter('itemStatus',
			function(value) {
				let out = ''
				const obj = {
					0: '已结束',
					1: '已结束',
					2: '进行中',
					3: '即将开始',
					4: '即将开始',
				}

				out = obj[value]

				return out;
			}
		)




		Vue.filter('cashStatus',
			function(value) {
				let out = ''
				let cashStatusObj = {
					0: "审核中",
					1: '成功',
					2: '失败',
				}
				out = cashStatusObj[value]
				return out;
			})

		Vue.filter('spliteTwo',
			function(value,value1) {
				console.log(value1)
				let out = ''
				if(value1){
					if(value){
						if(value.indexOf('至')>-1){
							//为了兼容母音特惠那块
							out = value
						}else{
							out = value.substring(0,2)
						}
					  
					}
				}else{
					out = value
				}
				
				return out;
			})






		Vue.filter('timeFilter',
			function(value) {
				if (value) {
					value = parseInt(value)
				}
				let out = '';
				let date = new Date(value);
				let nowDate = new Date();
				let y = date.getFullYear();
				let m = date.getMonth() + 1;
				m = m < 10 ? '0' + m : m;
				let d = date.getDate();
				d = d < 10 ? ('0' + d) : d;
				let s = date.getHours();
				s = s < 10 ? ('0' + s) : s
				let f = date.getMinutes();
				f = f < 10 ? ('0' + f) : f
				let a = date.getSeconds();
				a = a < 10 ? ('0' + a) : a
				let lastYear = y + '-' + m + '-' + d;
				let timeDay = m + '-' + d;

				var minute = 1000 * 60; //把分，时，天，周，半个月，一个月用毫秒表示  
				var hour = minute * 60;
				var day = hour * 24;
				var week = day * 7;
				var halfamonth = day * 15;
				var month = day * 30;
				var year = day * 365;

				var now = new Date().getTime(); //获取当前时间毫秒  
				var diffValue = now - value; //时间差  
				var result = '';
				if (diffValue < 0) {
					return;
				}
				var minC = diffValue / minute; //计算时间差的分，时，天，周，月  
				var hourC = diffValue / hour;
				var dayC = diffValue / day;
				var weekC = diffValue / week;
				var monthC = diffValue / month;
				var yearC = diffValue / year;
				if (y != nowDate.getFullYear()) {
					result = "" + lastYear;
				} else if (weekC > 1) {
					result = "" + timeDay;
				} else if (dayC >= 1) {
					result = "" + parseInt(dayC) + "天前";
				} else if (hourC >= 1) {
					result = "" + parseInt(hourC) + "小时前";
				} else if (minC >= 1) {
					result = "" + parseInt(minC) + "分钟前";
				} else
					result = "刚刚";
				return result;
			})
	}
}
export default filter
