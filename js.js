'use strict';
//function checkAge(age){
//	return (age > 18) ? true : confirm('Родители //разрешили?');
//}
//alert(checkAge(18));
//
//function checkAge(age){
//	return (age > 18) || confirm('Родители разрешили?');
//}

//function min(a, b){
//	return (a < b) ? a : b;
//}
//alert(min(5, -12));

//function pow(x, n){
//	var result = 1;
//	for(var i = 1; i <= n; i++){
//		 result *= x;
//	}
//	return result;
//}
//alert(pow(3, 5));

//function pow(x, n){
//	return (n != 1) ? x * pow(x, n-1) : x;
//}
//alert(pow(10, 3));

//Function Declaration -- function sum(){}
//Function Expression   -- var f = function(){}
//Named Function Expression -- var f = function sum(){}

//function sumTo(n){
//	return (n != 1) ? n + sumTo(n-1) : n;
//}
//alert(sumTo(1));
//alert(sumTo(2));
//alert(sumTo(3));
//alert(sumTo(4));

//function fact(n) {
//	var sum = 1;
//		if(n != 1) return n * fact(n-1);
//		else{ return n;}
//	}
//
//alert(fact(1));
//alert(fact(2));
//alert(fact(3));
//alert(fact(4));
//alert(fact(5));

//function fib(n){
//	var a = 1, b = 1;
//	for(var i = 3; i <= n; i++){
//		var c = a + b;
//		a = b;
//		b = c;
//	}
//	return b;
//}
//
//alert(fib(3)); //2
//alert(fib(7)); //13
//alert(fib(77)); //....


//function  fib(n){
//	return n <= 1 ? n : fib(n-1) + fib(n-2);
//}
//alert(fib(40));
//alert(fib(7));