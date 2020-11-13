const obj = {
	num1:10,
	'num2':20,
	"num3":30,
	getTotal:function(){
		let t = this.num1 + this.num2 + this.num3;
		alert(t);
	},
	getSum: function getSum(){
		let t = this.num1 + this.num2 + this.num3;
		alert(t);
	}
	
};

export { obj };