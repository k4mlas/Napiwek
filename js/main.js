const price = document.querySelector('#price');
const persons = document.querySelector('#person');
const tip = document.querySelector('#tip');
const btn = document.querySelector('.card__data__btn');
const error = document.querySelector('.card__data__error');
const result = document.querySelector('.card__data__result');
const resultSpan = document.querySelector('.card__data__result__cost');

const check = () => {
	if (price.value !== '' && persons.value !== '' && tip.value !== '0') {
		error.style.display = 'none';
		calc();
	} else {
		error.style.display = 'block';
		result.style.display = 'none';
	}
};

const calc = () => {
	const addOne = parseFloat(price.value);
	const addTwo = parseFloat(persons.value);
	const addThree = parseFloat(tip.value);
	const effect = (addOne + addOne * addThree) / addTwo;
	result.style.display = 'block';
	resultSpan.textContent = effect.toFixed(2);
};

btn.addEventListener('click', check);
