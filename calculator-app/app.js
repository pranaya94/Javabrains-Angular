var app = angular.module("calculatorApp",[]);
app.controller("calculatorCtrl",calculatorCtrl);

function calculatorCtrl(){

	this.op1 = 0;
	this.op2 = 0;
	this.result = 0;
	result1 = 0;
	this.operator = "+"	;

	this.add = function(){
		this.operator = "+";
		a = parseFloat(this.op1);
		b = parseFloat(this.op2);		
		result1 = a + b;	
	}
	this.sub = function(){
		this.operator = "-";
		a = parseFloat(this.op1);
		b = parseFloat(this.op2);		
		result1 = a - b;	
	}
	this.mul = function(){
		this.operator = "*";
		a = parseFloat(this.op1);
		b = parseFloat(this.op2);		
		result1 = a * b;	
	}
	this.div = function(){
		this.operator = "/";
		a = parseFloat(this.op1);
		b = parseFloat(this.op2);		
		result1 = a / b;	
	}
	this.evaluate = function(){
		this.result= result1;
	}
}