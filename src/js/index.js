import Mathematics from './mathematics.js';

const div= [ ...document.querySelector('.btns').getElementsByTagName('div') ],
	thisNum = document.getElementById('result'),
	math = document.getElementById('math');
div.forEach(item => {
	if (item.getAttribute('id')!=='clear' && item.getAttribute('id')!=='square' &&
        item.getAttribute('id')!=='del' && item.getAttribute('id')!=='equally') {
		item.onclick = function () {
			if (!item.getAttribute('id') && thisNum.innerHTML==='0' && item.textContent!=='.') {
				thisNum.innerHTML = item.textContent;
			} else if (item.textContent==='.') {
				if (thisNum.innerHTML.indexOf('.')===0) {
					thisNum.innerHTML='0.';
				} else if (thisNum.innerHTML.indexOf('.')===-1) {
					thisNum.innerHTML+='.';
				}
			} else {
				thisNum.innerHTML += item.textContent;
			}
		};
	}
	if (item.getAttribute('id')) {
		switch (item.getAttribute('id')) {
		case 'clear' :
			item.onclick = () => {
				thisNum.innerHTML = '0';
			};
			break;
		case 'squareRoot' :
			item.onclick=() => thisNum.innerHTML = Mathematics.sqrt(thisNum.innerHTML);
			break;
		case 'square' :
			item.onclick=() => thisNum.innerHTML = Mathematics.sqr(thisNum.innerHTML);
			break;
		case 'div' :
			item.onclick=() => {
				math.innerHTML += `${thisNum.innerHTML}/`;
				thisNum.innerHTML = '0';
			};
			break;
		case 'multiply' :
			item.onclick=() => {
				math.innerHTML += `${thisNum.innerHTML}*`;
				thisNum.innerHTML = '0';
			};
			break;
		case 'sub' :
			item.onclick=() => {
				math.innerHTML+=`${thisNum.innerHTML}-`;
				thisNum.innerHTML='0';
			};
			break;
		case 'sum' :
			item.onclick=() => {
				math.innerHTML+=`${thisNum.innerHTML}+`;
				thisNum.innerHTML='0';
			};
			break;
		case 'equally' :
			item.onclick=() => {
				math.innerHTML+=`${thisNum.innerHTML}`;
				thisNum.innerHTML=`${Mathematics.result(math.innerHTML)}`;
				math.innerHTML = '';
			};
			break;
		case 'del' :
			item.onclick=() => {
				if (thisNum.innerHTML.length) { thisNum.innerHTML = thisNum.innerHTML.slice(0, -1); }
			};
			break;
		}
	}
});

import '../css/style.css';
