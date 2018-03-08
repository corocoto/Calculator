var FirstNumber, SecondNumber;
var symbol='';
var dot=true;
function conclusion(number) {
	if ((document.getElementById('stroka').value!=0) ||(document.getElementById('stroka').value=='0.')){
		document.getElementById('stroka').value+=number;
	}else{ 
		document.getElementById('stroka').value=number;
	}
}

function ClearText() {
	document.getElementById('stroka').value=0;
	FirstNumber=0;
	SecondNumber=0;
	symbol='';
	dot=true;
}

function MathematicalSigns(sign) {
	if (symbol!=''){
		switch (symbol){
			case '-': FirstNumber-=document.getElementById('stroka').value;
				  	  break;
			case '+': FirstNumber*=1;
					  SecondNumber=document.getElementById('stroka').value*1;
					  FirstNumber+=SecondNumber;
				      break;
			case '/': FirstNumber/=document.getElementById('stroka').value;
				      break;
			case '*': FirstNumber*=document.getElementById('stroka').value;
				      break;
		}
		document.getElementById('stroka').value=FirstNumber;
		symbol='';
		SecondNumber=0;
	}

	switch (sign){
		case '-': FirstNumber=document.getElementById('stroka').value;
				  document.getElementById('stroka').value=0;
				  symbol='-';
				  break;
		case '+': FirstNumber=document.getElementById('stroka').value;
				  document.getElementById('stroka').value=0;
				  symbol='+';
				  break;
		case '/': FirstNumber=document.getElementById('stroka').value;
				  document.getElementById('stroka').value=0;
				  symbol='/';
				  break;
		case '*': FirstNumber=document.getElementById('stroka').value;
				  document.getElementById('stroka').value=0;
				  symbol='*';
				  break;
	}
	dot=true;
}

function Equally() {
	if (symbol!=''){
		switch (symbol){
			case '-': FirstNumber-=document.getElementById('stroka').value;
				  	  break;
			case '+': FirstNumber*=1;
					  SecondNumber=document.getElementById('stroka').value*1;
					  FirstNumber+=SecondNumber;
				      break;
			case '/': FirstNumber/=document.getElementById('stroka').value;
				      break;
			case '*': FirstNumber*=document.getElementById('stroka').value;
				      break;
		}
		document.getElementById('stroka').value=FirstNumber;
		symbol='';
		SecondNumber=0;
	}
}

function MathSqrt() {
	document.getElementById('stroka').value=Math.sqrt(document.getElementById('stroka').value);
	dot=false;
}

function MathSqr() {
	document.getElementById('stroka').value*=document.getElementById('stroka').value;
	dot=false;
}

/*Change sign (plus or minus)*/
function ChangeSign() {
	document.getElementById('stroka').value*=-1;
}

function Dot() {
	if (dot){
		document.getElementById('stroka').value+='.';
	}
	dot=false;
}