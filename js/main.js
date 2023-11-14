function splitLetter(el) {
	// 함수 안에 있는 지역변수는 함수 호출이 끝나고 나면 지워져 불필요하게 메모리 차지도 안 하기 때문에 성능면에서 효율적임.
	const dom = document.querySelector(el);
	let tags = '';
	for (let letter of dom.innerText) {
		tags += `<span>${letter}</span>`;
	}
	dom.innerHTML = tags;
}
