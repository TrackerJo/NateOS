function createCounterComp(count){
	const Counter = document.createElement("div");
	Counter.setAttribute('class', `counter`);

	const add = document.createElement("button");
	add.textContent = `+`;
	add.addEventListener('onclick', () => {count++});

	Counter.appendChild(add);

	const minus = document.createElement("button");
	minus.textContent = `-`;

	Counter.appendChild(minus);

	const CountLabel = document.createElement("span");
	CountLabel.textContent = `${count}`;

	Counter.appendChild(CountLabel);

	return Counter;

}