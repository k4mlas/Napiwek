const price = document.querySelector('#price');
const persons = document.querySelector('#person');
const tip = document.querySelector('#tip');
const btn = document.querySelector('.card__data__btn');
const error = document.querySelector('.card__data__error');
const result = document.querySelector('.card__data__result');
const resultSpan = document.querySelector('.card__data__result__cost');

const check = () => {
	if (price.value !== '' && persons.value !== '' && tip.value !== '') {
		console.log('Pola są uzupełnione');
	} else {
		console.log('Wszystkie pola są puste');
		error.style.display = 'block';
	}
};

btn.addEventListener('click', check);
