'use strict';
//function pow(x, n){
//	if(n == 1){
//		return x;
//	}
//	var result = x * pow(1, n-1);
//	return result;
//}
//alert(pow(5 , 6));
// Тестирование кода
describe('pow', function(){
	it('Возводить в n - ю степень', function(){
		assert.equal(pow(2, 3), 8);
	});
});