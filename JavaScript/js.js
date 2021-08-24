document.write(' <br/> <br> <br>	Name 	: Khayrul Bashar. </br>'); 
document.write('Phone	: 0193221517151.</br>'); 
document.write('Mail	: akcadmkbh@gmail.com.</br> </br>');


var num1 = '20';
var num2 = 20;
var num3 = true;

document.write(typeof(num1));
document.write(typeof(num2));
document.write(typeof(num3));

document.write('<br>')
 	// converts method
 var number = 50;
 var st = toString(number);
 document.write(typeof(st));

 document.write('<br>')

 var st = 'baby'
 var nt = parseInt(st);
 document.write(typeof(nt));

document.write('<br>')

 var ft = '25.5';
 var st = parseFloat(ft);
 document.write(typeof(st));

document.write('<br>')




	// variables starts

	var name1, name2, fullName, age, mail;
	name1 ='Khayrul';
	name2 ='Bashar';
	name2 ='Hridoy';
	fullName =name1+' '+name2;
	document.write(fullName);

document.write('<br>')

	// variables ends

	// number methods starts here
var number1 = 12.46167;
var number2	= 0.4657;
var output1 = (number1.toFixed(2));
var output2 = (number2.toPrecision(4));
document.write(output1); document.write('<br>')

document.write(output2);

document.write('<br>')


		var num1 = 12.4637;
		var num2 = 3.16279;
		var output1 = (num1.toFixed());
		var output2 = (num2.toPrecision(2));
		document.write(output1); 
		document.write(output2);
	// number methods ends here 
	
document.write('<br>')

	// true & false indicates 1 & 0
	
	
	// concatination between two string
	
document.write('Khayrul'+' Bashar');

var fName = "Khayrul";
var lName = " Bashar";
var fullName = fName + lName;
document.write('My name is '+ fullName +' Hridoy1 ');document.write('<br>')

document.write(fullName + ' is my name.');document.write('<br>')


document.write('Khayrul'+' Bashar');document.write('<br>')


var num1 = 25;
var num2 = 30;
document.write('Num1 is = '+ num1 + ' and Num2 is = ' + num2);

// String related libray
		
		var text = 'Bangladesh';
		var len = text.length;
		document.write('Number of caracter = ' + len); 

		document.write('<br>')

		// var text = prompt("Enter the name: ");
		var total = text.length;
		document.write('Total is = ' + total); document.write('<br>') 
		// var t = prompt('Enter the word is:');
		var index = t.charAt(2);
		document.write('This is the index number =' + index); 

		document.write('<br>')

		// var fName = prompt("Enter your first Name: ");
		// var lName = prompt("Enter your last name: ");
		var fullName = fName+' '+lName;
		document.write(fullName);document.write('<br>');
		document.write(fName.concat(lName));
		document.write('<br>');
		var lan = fullName.length;
		document.write(lan); document.write('<br>');
		var uc = fullName.toUpperCase();
		document.write(uc); document.write('<br>');
		var lc = fullName.toLowerCase();
		document.write(lc);document.write('<br>');
		var num = 3.46748;
		var pos = (num.toPrecision(5));
		document.write(pos);document.write('<br>');
		var cp = (fullName.charAt(5));
		document.write(cp);document.write('<br>')
		var sl = fullName.slice(3,10);
		document.write(sl);

	// Aritmatic & Assign
		var a = 100;
		var b = 200;
		var inc = ++a;
		var dc = b/b;
		a+= 300;

		b*=5;
		console.log(b);
		console.log(a);
		document.write(inc); document.write('<br>')
		document.write(dc)



		// var num1 = prompt('Enter first number: ');
		// var num2 = prompt('Enter second number: ');

		// var n1 = parseInt(num1,10);
		// var n2 = parseInt(num2,10);

		// document.write(n1+n2 +'<br>');
		// document.write(n1-n2 +'<br>');
		// document.write(n1*n2 +'<br>');
		// document.write(n1/n2 +'<br>');
		// document.write(n1%n2 +'<br>');

// More another system

		// var num1 = prompt('Enter first number: ');
		// var num2 = prompt('Enter second number: ');

		// var n1 = parseInt(num1,10);
		// var n2 = parseInt(num2,10);

		// var add, sub, mul, divi, modul;

		// add = num1+num2;
		// sub = num1-num2;
		// mul = num1*num2;
		// divi = num1/num2;
		// modul = num1%num2;

		// document.write(add +'<br>');
		// document.write(sub +'<br>');
		// document.write(mul +'<br>');
		// document.write(divi +'<br>');
		// document.write(modul +'<br>');
		
// another system

		// var num1 = prompt('Enter first number: ');
		// var num2 = prompt('Enter second number: ');

		// var n1 = parseInt(num1,10);
		// var n2 = parseInt(num2,10);

		// var sum, sub, mul, div, rem;

		// sum = n1+n2;
		// sub = n1-n2;
		// mul = n1*n2;
		// div = n1/n2;
		// rem = n1%n2;

		// document.write('This is the additional result: '+n1 + "+" + n2 + "=" + sum +'<br>');
		// document.write('This is the subtraction result: '+ n1 +'-'+ n2 +"="+ sub +'<br>');
		// document.write('This is the multplication result: '+n1 +'*'+ n2 +'='+ mul +'<br>');
		// document.write('This is the divition result: ' +n1 +'/'+n2+'='+div+ '<br>');
		// document.write('This is the reminder result: '+n1+'%'+n2+ '='+ rem+ '<br>');
		
		var name1 = prompt('Type Your First Name: ');
		var name2 = prompt('Type Your Last Name: ');
		var fullName = name1+' '+name2;
		document.write('My Name is ' +fullName +'<br>');

		var num1 = prompt('Enter first number: ');
		var num2 = prompt('Enter second number: ');

		var n1 = parseInt(num1,10);
		var n2 = parseInt(num2,10);

		var sum, sub, mul, div, rem;

		sum = n1+n2;
		sub = n1-n2;
		mul = n1*n2;
		div = n1/n2;
		rem = n1%n2;

		document.write('This is the additional result: '+n1 + "+" + n2 + "=" + sum +'<br>');
		document.write('This is the subtraction result: '+ n1 +'-'+ n2 +"="+ sub +'<br>');
		document.write('This is the multplication result: '+n1 +'*'+ n2 +'='+ mul +'<br>');
		document.write('This is the divition result: ' +n1 +'/'+n2+'='+div+ '<br>');
		document.write('This is the reminder result: '+n1+'%'+n2+ '='+ rem+ '<br>');


		var num1 = prompt('Enter first number: ');
		var num2 = prompt('Enter second number: ');

		var n1 = parseInt(num1,10);
		var n2 = parseInt(num2,10);

		var result;

		

		result = n1+n2;
		document.write('This is the additional result: '+n1 + "+" + n2 + "=" + result +'<br>');

		result = n1-n2;
		document.write('This is the subtraction result: '+ n1 +'-'+ n2 +"="+ result +'<br>');

		result = n1*n2;
		document.write('This is the multplication result: '+n1 +'*'+ n2 +'='+ result +'<br>');

		result = n1/n2;
		document.write('This is the divition result: ' +n1 +'/'+n2+'='+result+ '<br>');

		result = n1%n2;
		document.write('This is the reminder result: '+n1+'%'+n2+ '='+ result+ '<br>');


		var a = 50;
		var b = 40;
		var c = 30;
		var d = 50;

		// Relational operation
		
		document.write(a>b); //true
		document.write(a>=b); //true
		document.write(a<=b);
		document.write(a==d); //true
		document.write(20=="20"); //true
		document.write(20==="20"); //false
		document.write(a!=c); //true
		document.write(a!=d); //false
		document.write(a!==c); //true
		document.write(a!==d); //false
		document.write(20!==20); //false
		document.write(20!==20); //false
		document.write('<br>')

		// Logical Operation
		
		document.write(a>b && b>c); //true 
		document.write(a>b && b>c && a>c); //true 
		document.write(a>b && b>d && a>c); //false 
		document.write(a>b || b>d || a>c); //true
		document.write(!true); //false 
		document.write(!false); //true 
		document.write(!(false==false)); //false
		document.write(!(20==20)); //false
		document.write(!(20==10)); //true

		document.write('<br>')
		document.write('<br>')
		document.write(1+'<br>')

		// coditional operation
		
		var num = 5;
		var num1 =6;
		var num2 =8;
		var num3 =5;

		if(num%2==0) {
			document.write('Even');
		}

		// if(num%2!=0)
		// 	document8.write('Odd'+'<br>');

		else {
			document.write('Odd'+'<br>')
		}

		// Another
		if (num1%2==0) {
			document.write('Even');
		}

		document.write('<br>')
		document.write('<br>')
		//if else
		if (num<num1 && num1<num2) {
			document.write('True')
		}

		else {
			document.write('False')
		}


		document.write('<br>')
		document.write(3+'<br>')
		//if else
		if (num<num1 && num1<num2 && num>num3 ) {
			document.write('True')
		}

		else {
			document.write('False')
		}


		document.write('<br>')
		document.write(4+'<br>')
		//if, else if, else
		if (num<num1 && num1>num2) {
			document.write('False')
		}

		else if (num1<num2) {
			document.write('True')
		}


		document.write('<br>')
		document.write(5+'<br>')
		//if, else if, else
		if (num<num1 && num1>num2) {
			document.write('False')
		}

		else if (num1>num2) {
			document.write('False')
		}
		else if (num==num) {
			document.write('True')
		}

		else {
			document.write('True')
		}

		document.write('<br>')
		document.write('<br>')
		document.write('<br>')


		//Result Output By Checking Condition
		var mark =prompt('Enter The Mark : ');

		if (mark>100 || mark<0) {
			document.write('The result is Invalid!')
		}

		else if (mark>=90) {
			document.write('U have got A+!')
		}
		else if (mark>=80) {
			document.write('U have got A')
		}
		else if (mark>=75) {
			document.write('U have got A-')
		}
		else if (mark>=70) {
			document.write('U have got B+')
		}
		else if (mark>=60) {
			document.write('U have got C+')
		}
		else if (mark>=50) {
			document.write('U have got D')
		} 
		else if (mark>=40) {
			document.write('U have got E')
		}
		else {
			document.write('U are Fail!')
		}


		document.write('<br>')
		document.write('<br>')
		document.write('<br>')

		//Negative & Positive Condition
		
		var value = prompt('Enter the value : ');

		if (value>0) {
			document.write('Positive')
		}
		else if (value<0) {
			document.write('Negative')
		}
		else {
			document.write('Zero')
		}

