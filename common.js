/**
 * 公用js积累
 * by zhimin
 */
/**
 * 判断浏览器是否支持tranform属性
 * @return {[String]} [支持返回支持浏览器下的transform,不支持则返回空]
 */
function getTranform(){
	var transform = '',
		divStyle = document.createElement("div").style,
		transformArr = ['transform','webkitTransform','MozTransform','msTransform','OTransform'];
		i = 0,
		len = transformArr.length;

	for(;i<len;i++){
		if(transformArr[i] in divStyle){
			// 如果支持，则返回
			return transform = transformArr[i];
		}
	}
	// 如果没有找到，则返回空;
	return transform;
}
/**
 * 获取元素样式
 * @param  {String} elem     元素
 * @param  {String} property 元素样式
 * @return {String}          元素样式的返回值
 */		
function getStyle(elem,property) {
	// IE通过currentStyle来获取，其他浏览器通过getComputedStyle
	return document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(elem,false)[property]:elem.currentStyle[property];
}
