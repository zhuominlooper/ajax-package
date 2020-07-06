# ajax-package
用promise对ajax进行封装  
1.由于我需要测试封装的ajax的正确性，所以使用webpack搭了一个本地服务  
2.clone代码下来，直接npm i就可以安装依赖，主要是一些简单的webpack配置  
3.在js文件里换一下url，然后运行npm run devserver,即可在浏览器自动打开界面  
4.点击按钮，成功后会得到数据  
5.其实就是用promise封装异步操作，先得到then里的回调函数，然后根据返回执行  
6.webpack的配置不用管，此时已经配置好了  
