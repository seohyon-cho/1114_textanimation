/*
const h1 = document.querySelector('h1');
const txt = h1.innerText;
let tags = '';

for (let letter of txt) {
	tags += `<span>${letter}</span>`;
}

console.log(tags);
// HTML상에서 h1 안쪽에 기존에 있던 내용은 없애고, tags 내용으로 덮어쓰는 것.
h1.innerHTML = tags;
*/
splitLetter('h1');
splitLetter('h2');

//
function splitLetter(el) {
	// 함수 안에 있는 지역변수는 함수 호출이 끝나고 나면 지워져 불필요하게 메모리 차지도 안 하기 때문에 성능면에서 효율적임.
	const dom = document.querySelector(el);
	let tags = '';

	for (let letter of dom.innerText) {
		tags += `<span>${letter}</span>`;
	}

	dom.innerHTML = tags;
}

/*
// 내가 짠 방식 (구현 안 됨. 오류 발생)
function splitLetter(el) {
	txt.forEach((el) => {
		tags += `<span>${el}</span>`;
		h1.innerHTML = tags;
	});
}
*/
