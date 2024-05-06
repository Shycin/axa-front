const searchBar = document.getElementById("clientSearch");

const onInput = debounce(search, 500);

searchBar.addEventListener("input", function (e) {
	onInput(e.target.value);
});

async function search(search) {
	const url = urlTarget + "/clients";

	var urlencoded = new URLSearchParams();
	urlencoded.append("name", search);

	var requestOptions = {
		method: "POST",
		body: urlencoded,
		redirect: "follow",
	};

	const fetchData = await fetch(url, requestOptions)
		.then((response) => response.json())
		.catch((error) => console.log("error", error));

	const list = document.getElementById("searchChoices");
	list.innerHTML = "";

	fetchData.data.forEach(function (client) {
		const lineIdentite =
			(client.genre === "H" ? "M." : "Mme.") +
			" " +
			client.prenom +
			" " +
			client.nom +
			", " +
			client.rue +
			", " +
			client.codePostal +
			" " +
			client.ville;

		var option = document.createElement("li");
		option.classList.add("clickable");
		option.innerText = lineIdentite;

		option.addEventListener("click", function () {
			const clientId = document.getElementById("clientId");
			clientId.value = client.clientId;

			const genre = document.getElementsByName("genre")[0];
			const homme = document.getElementById("homme");
			const femme = document.getElementById("femme");
			client.genre === "H" ? (homme.checked = true) : (femme.checked = true);
			genre.value = client.genre;

			const nom = document.getElementById("nom");
			nom.value = client.nom;

			const prenom = document.getElementById("prenom");
			prenom.value = client.prenom;

			const ville = document.getElementById("ville");
			ville.value = client.ville;

			const rue = document.getElementById("rue");
			rue.value = client.rue;

			const codePostal = document.getElementById("codePostal");
			codePostal.value = client.codePostal;

			list.innerHTML = "";
			searchBar.value = "";
		});

		list.appendChild(option);
	});
}
