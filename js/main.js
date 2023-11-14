const main = document.querySelector('main');
const tits = main.querySelectorAll('h1');

// 해당 함수는 DOM 자체를 인수로 전달 받는 함수임.
// 그러므로 인수로 h1이라는 DOM(querySelectorAll('h1'))을 전달.

function splitLetter(el) {
	let tags = '';
	for (let letter of el.innerText) {
		tags += `<span>${letter}</span>`;
	}
	el.innerHTML = tags;
}
splitLetter(tits[0]);
splitLetter(tits[1]);

const btns = document.querySelectorAll('li');
const boxs = document.querySelectorAll('article');

function activation(arr, index) {
	arr.forEach((el) => el.classList.remove('on'));
	arr[index].classList.add('on');
}
btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		// activation(btns, idx);
		// activation(boxs, idx);
		[btns, boxs].forEach((el) => activation(el, idx));
	});
});
