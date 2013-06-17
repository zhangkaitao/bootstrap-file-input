为bootstrap提供统一的文件上传按钮
===== 
试用了几个类似的，不能满足需求，干脆自己写一个。  
思路是：利用label完成辅助点击file框，并把file框设置为透明即可，非常简单  
可完美解决在ie中的“访问限制”问题（即必须是用户点击才能进行文件上传），且无位置偏移问题。

使用方式
===== 
导入js和css即可，会自动查找file标签执行初始化  
```
<script src="./js/bootstrap.file-input.js"></script>
<link href="./css/bootstrap.file-input.css" rel="stylesheet">
```

效果
===== 
![Test XIB](https://raw.github.com/zhangkaitao/bootstrap-file-input/master/img.jpg)

其他参考：
===== 
1、http://gregpike.net/demos/bootstrap-file-input/demo.html  
缺点：ie8（其他版本未测试）下，可能在使用过程中input位置有偏差  
2、http://addyosmani.github.com/jquery-ui-bootstrap/extra.html#file-input  
这个是jquery-ui-bootstrap的参考示例，缺点也是ie的限制  

所以大家可以根据我的思路改写这两个。  
