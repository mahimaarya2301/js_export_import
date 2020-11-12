class MyClass{
	//1. Property
	
	//2. Constructor
	constructor(){
		alert('Hello from MyClass Constructor');
	}
	
	//3. Methods
	showName(name){ // name formal arg
		//alert('Hello '+name);
		return 'Hello '+name;
	}
}

export class MyClass2{
	//1. Property
	
	//2. Constructor
	
	//3. Methods
	showName(name){ // name formal arg
		//alert('Hello '+name);
		return 'Hello '+name;
	}
}

//export { MyClass,MyClass2 };
export { MyClass };