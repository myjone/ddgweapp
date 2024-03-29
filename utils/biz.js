import {path} from "./path.js"
import {
	showToast,
	showLoading,
	hideLoading,
	getStorageSync,
	navigateTo,
	clearStorageSync
} from './uniWrap.js'


export const tologin=()=>{
	uni.showModal({
		title: '授权提示',
		content: '您还未登录是否前去授权登录?',
		success: function(res) {
			if (res.confirm) {
				navigateTo(path['login'])
			} else if (res.cancel) {
	
			}
		}
	});
}

//去除数组中重复的对象
export function deteleObject(obj) {
    var uniques = [];
    var stringify = {};
    for (var i = 0; i < obj.length; i++) {
        var keys = Object.keys(obj[i]);
        keys.sort(function(a, b) {
            return (Number(a) - Number(b));
        });
        var str = '';
        for (var j = 0; j < keys.length; j++) {
            str += JSON.stringify(keys[j]);
            str += JSON.stringify(obj[i][keys[j]]);
        }
        if (!stringify.hasOwnProperty(str)) {
            uniques.push(obj[i]);
            stringify[str] = true;
        }
    }
    uniques = uniques;
    return uniques;
}