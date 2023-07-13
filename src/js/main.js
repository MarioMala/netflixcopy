/** @format */
const inputMail = document.getElementById('input-mail');
const labelMail = document.querySelector('.label-mail');
const selectLanguage = document.querySelector('.language');
const spanBoxs = document.querySelectorAll('.span-box');
const textBoxs = document.querySelectorAll('.box-text');


// ----------CZYSZCZENIE PLACEHOLDERA-----------------------

const clearPlaceholder = () => {
	inputMail.attributes[3].textContent = '';
};
const startPlaceholder = () => {
	inputMail.attributes[3].textContent = '  Adres e-mail';
};

inputMail.addEventListener('focus', clearPlaceholder);
inputMail.addEventListener('blur', startPlaceholder);
//------------------------------------------------------------
//

//------------PRZESUWANIE LABELA------------------------------
const placeMoveEnd = () => {
	labelMail.classList.add('label-position');
	labelMail.style.display = 'flex';
};

const placeMoveStart = () => {
	labelMail.classList.remove('label-position');
	if (inputMail.textContent === '') {
		labelMail.style.display = 'none';
	}
};

inputMail.addEventListener('focus', placeMoveEnd);
inputMail.addEventListener('blur', placeMoveStart);

//------------------------------------------------------------/

const select = [...selectLanguage.options];

const selectedLanguage = () => {
	if (select[0].value === 'poland') {
		alert('Wybrałeś język polski');
	} else if (select[1].value === 'english') {
		alert('Wybrałeś język angielski');
	}
};

const showText = e => {
	e.target.closest('div').classList.toggle('rotate');
	e.target.nextElementSibling.classList.toggle('active');
};

spanBoxs.forEach(box => box.addEventListener('click', showText));
selectLanguage.addEventListener('change', selectedLanguage);
