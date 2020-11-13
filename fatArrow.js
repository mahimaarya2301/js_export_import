export var myObject = {
	name:"Rahul",
	"surname":'Sharma'
};

export let n1=10;
export let n2=20;

function showName(name='Rahul'){ // Default Argument
	alert('Hello '+name);
}
let showName2 = (name)=>{
	alert(`Hello ${name}`);
}

export { showName,showName2 };
//export default showName2;