const h1 = document.querySelector('h1');
const txt = h1.innerText;
let tags = '';

for (let letter of txt) {
	tags += `<span>${letter}</span>`;
}

console.log(tags);
// HTML상에서 h1 안쪽에 기존에 있던 내용은 없애고, tags 내용으로 덮어쓰는 것.
h1.innerHTML = tags;
