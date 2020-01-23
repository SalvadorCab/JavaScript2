let idVar = setInterval(() => {
	timer()
}, 1000);

function timer() {
	let dateVar = new Date();
	let time = dateVar.toLocaleTimeString();
	document.getElementById("clock").innerHTML = time;
};