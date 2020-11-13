export var myObject ={
	name:"Mahima",
	"surname":'Arya',
}
function showName(name){ //name is formal arg
	alert('Hello'+name);
}
function showName2(name='Priyanka'){ //Defauly arg
	alert(`Hello ${name}`);
}
let showName3 = (name)=>{
	alert('Hello'+name);
}
export {showName,showName2,showName3};