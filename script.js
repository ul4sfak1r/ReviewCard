const mainDiv = document.querySelector('.main-div');
const roundDivWrapper = document.getElementById('round-div-wrapper');
const roundDivs = document.querySelectorAll('.round-divs');
const numbers = document.querySelectorAll('.numbers');
const button = document.querySelector('button');
const elementsWillBeHidden = document.querySelectorAll('.will-be-hidden');
let rate = 0;

roundDivWrapper.addEventListener('click', (e) =>  {
	const target = e.target.closest('.round-divs');
    if (target) {
        const index = Array.from(roundDivs).indexOf(target) - 1;
        rate = index;
        if (index >= 0 && index < numbers.length) { 
            roundDivs.forEach((roundDiv) => roundDiv.classList.remove('clickedDiv'));
            numbers.forEach((number) => number.classList.remove('clickedNumber'));
            target.classList.toggle('clickedDiv');
            numbers[index].classList.toggle('clickedNumber');
        }
    }
});

button.addEventListener('click', () => {
	if (!Array.from(roundDivs).some((element) => {return element.classList.contains('clickedDiv')
	})) {
		document.getElementById('alert').classList.remove('hidden');
		return;
	} else {
		elementsWillBeHidden.forEach(element => element.classList.add('hidden'));
		mainDiv.insertAdjacentHTML('beforeend', `
			<img src="illustration-thank-you.svg" class="thank-you-img">
			<div class="rate">You selected ${rate + 1} out of 5</div>
			<h1 class="thank-you-message">Thank you!</h1>
			<p class="thank-you-message">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
			`
		)
	}
})