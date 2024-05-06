const cout1 = document.getElementById("cout1");
const cout2 = document.getElementById("cout2");
const coutOperation = document.getElementById("coutOperation");

function add2Cout() {
	coutOperation.value =
		(parseFloat(cout1.value) || 0) + (parseFloat(cout2.value) || 0);
}

cout1.addEventListener("keyup", add2Cout);
cout2.addEventListener("keyup", add2Cout);
