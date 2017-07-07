app.directive('myDir',function(){
	return {
		restrict:EACM,
		replace:true,
		template:
		templateUrl
		controller:模板所需要使用的变量的作用域
		controlleAs：
		scope
		link
	}
})；

// angular可用于注入的有三种类型，service、factory、provider
//service 表示服务，是一个单例对象，他提供了$http、$route、$window、$location等
app.service('app.service',function(){
	//相关操作
})
//将服务注入到某控制器
app.controller('名字',['$scop','app.service','filter',function($scope,app.service,filter){

}])

//factory，就是创建一个对象，然后给该对象添加属性和方法，然后将该对象返回，再注入到需要的controller
app.factory('myFactory',function(){
	//先创建个空对象
	var factory = {};
	factory.name = "张三";
	factory.getName = function(){
		return '字符串'
	}
	return factory;
})
//依赖注入
app.controller('',function($scope,myFactory){

})

//provider
//负责告诉angular如何创造一个新的可注入的东西；通过$provider来创建一个供应商，通过$get传递参数
app.provider('myProvider',function(){
	var fun = function(value){
		console.log(value);
	}
	this.$get = function(){
		return fun;
	}
})
//注入
app.controller('',function($scope,myProvider){
	myProvider('123');//等同于调用了fun函数，并将123传递进去
})