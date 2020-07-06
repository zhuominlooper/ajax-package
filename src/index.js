function ajax(URL) {
	return new Promise(function (resolve, reject) {
		var req = new XMLHttpRequest(); //创建ajax的实例
		req.open('GET', URL, true);//打开一个get请求，并且是异步
		req.onload = function () {
		if (req.status === 200) { 
				resolve(req.responseText);
			} else {
				reject(new Error(req.statusText));
			} 
		};//返回readyState 状态码为4时候调用
		req.onerror = function () {
			reject(new Error(req.statusText));
		};
		req.send(); //发送请求
	});
}

window.callAPI=function(){
    console.log('开始调用api获取数据')
    var URL = "https://localhost:5001/blog/test"; //本机的测试api，根据自己情况来修改
    ajax(URL).then(function onFulfilled(value){
		document.write('数据为:' + value); 
    }).catch(function onRejected(error){
        document.write('错误:' + error); 
    });
}