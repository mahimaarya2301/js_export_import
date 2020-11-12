//Class Decleration
class B{
	//1.Property
	
	//2.Constructor
	constructor(){
		alert('Hello from B constructor');
	}
	//3.Method
	subtract(m,n){ //m,n are formal args
		alert('The subtration is'+(m-n));
	}
}
//Create an external object
const obj1 = new B();
//Access the member using member selection operator (.)
obj1.subtract(110,45);//Actual arg

export { B };