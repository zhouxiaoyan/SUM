function Hello(){
	var name;
	this.setName=function(thyName){
		name=thyName;
	};
	this.sayHello=function(){
		console.log('Hello '+name);
	};
};
module.exports=Hello;// exports 是模块公开的接口
//hello.js 通过 exports 对象把 world 作为模块的访问接口，
//在 main.js 中通过 require('./hello') 加载这个模块，
//然后就可以直接访 问 hello.js 中 exports 对象的成员函数了。