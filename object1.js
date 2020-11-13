let obj = {
	num1:30,
	'num2':25,
	"num3":15,
	getTotal:function(){
		let t = this.num1 * this.num2 * this.num3; 
		alert(t);
	},
	getSum:function getSum(){
		var t = this.num1 + this.num2 + this.num3;
		alert(t);
		
	}

};
export { obj };