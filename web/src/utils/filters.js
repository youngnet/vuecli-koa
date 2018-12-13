// vue全局filter文件
export function toFixed(value) {
	return value.toFixed(2);
}
export function phoneHide(phone) {
	return phone.substr(0, 3) + '****' + phone.substr(7);
}
