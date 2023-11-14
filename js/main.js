function splitLetter(el) {
	// 함수 안에 있는 지역변수는 함수 호출이 끝나고 나면 지워져 불필요하게 메모리 차지도 안 하기 때문에 성능면에서 효율적임.
	const dom = document.querySelector(el);
	let tags = '';
	for (let letter of dom.innerText) {
		tags += `<span>${letter}</span>`;
	}
	dom.innerHTML = tags;
}

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
