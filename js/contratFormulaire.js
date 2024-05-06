const contrats = document.getElementById("contrats");

const imageLien = document.getElementById("imageLien");
const imagesImageLien = document.getElementById("imagesImageLien");

imageLien.addEventListener("change", function (e) {
	imagesImageLien.innerHTML = "";

	if (Array.from(e.target.files).length) {
		const button = document.createElement("button");
		button.innerText = "x";
		button.addEventListener("click", function (e) {
			imageLien.value = "";
		});

		imagesImageLien.appendChild(button);
	}
});

const planAdresseOperation = document.getElementById("planAdresseOperation");
const imagesPlanAdresseOperation = document.getElementById(
	"imagesPlanAdresseOperation"
);

planAdresseOperation.addEventListener("change", function (e) {
	imagesPlanAdresseOperation.innerHTML = "";

	if (Array.from(e.target.files).length) {
		const button = document.createElement("button");
		button.innerText = "x";
		button.addEventListener("click", function (e) {
			planAdresseOperation.value = "";
		});

		imagesPlanAdresseOperation.appendChild(button);
	}
});

contrats.addEventListener("submit", async function (e) {
	e.preventDefault();
	e.stopPropagation();

	e.target.classList.add("was-validated");
	if (!e.target.checkValidity()) {
		return;
	}

	const clientId = document.getElementById("clientId").value;
	const nom = document.getElementById("nom").value;
	const prenom = document.getElementById("prenom").value;
	const ville = document.getElementById("ville").value;
	const rue = document.getElementById("rue").value;
	const codePostal = document.getElementById("codePostal").value;

	const genre = document.getElementsByName("genre")[0].value;
	const presenceCoassurance = document.getElementsByName(
		"presenceCoassurance"
	)[0].value;

	const numeroOpportunite = document.getElementById("numeroOpportunite").value;
	const referenceDossier = document.getElementById("referenceDossier").value;
	const numeroSIRET = document.getElementById("numeroSIRET").value;
	const numeroSIREN = document.getElementById("numeroSIREN").value;
	const affaire = document.getElementById("affaire").value;
	const intermediaire = document.getElementById("intermediaire").value;
	const descriptionSuccincte = document.getElementById(
		"descriptionSuccincte"
	).value;
	const adresseOperation = document.getElementById("adresseOperation").value;
	const coutOperation = document.getElementById("coutOperation").value;

	const descriptifOperation = quill.root.innerHTML;

	const imageLien = document.getElementById("imageLien");
	const planAdresseOperation = document.getElementById("planAdresseOperation");

	var formdata = new FormData();
	formdata.append("numeroOpportunite", numeroOpportunite);
	formdata.append("referenceDossier", referenceDossier);
	formdata.append("numeroSIRET", numeroSIRET);
	formdata.append("numeroSIREN", numeroSIREN);
	formdata.append("affaire", affaire);
	formdata.append("intermediaire", intermediaire);
	formdata.append("descriptionSuccincte", descriptionSuccincte);

	Array.from(imageLien.files).forEach((image) => {
		formdata.append("imageLien", image, image.name);
	});

	formdata.append("presenceCoassurance", presenceCoassurance);
	formdata.append("adresseOperation", adresseOperation);

	Array.from(planAdresseOperation.files).forEach((image) => {
		formdata.append("planAdresseOperation", image, image.name);
	});

	formdata.append("descriptifOperation", descriptifOperation);
	formdata.append("coutOperation", coutOperation);
	formdata.append("genre", genre);
	formdata.append("nom", nom);
	formdata.append("prenom", prenom);
	formdata.append("rue", rue);
	formdata.append("ville", ville);
	formdata.append("codePostal", codePostal);

	if (clientId) formdata.append("clientId", clientId);

	var requestOptions = {
		method: "POST",
		body: formdata,
		redirect: "follow",
	};

	const result = await fetch(urlTarget + "/contracts", requestOptions)
		.then((response) => response.json())
		.catch((error) => console.log("error", error));


	const divError = document.getElementById("message_error")
	const title = document.createElement("h2");

	if (result.error) {
		const ul = document.createElement("ul");
		title.innerText = "Erreur pendant la création"

		divError.append(title)

		result.details.forEach((error) => {
			const idError = Object.keys(error)[0]
			const messageError = Object.values(error)[0]

			const li = document.createElement("li");


			const regex = /([a-z]+)([A-Za-z]+)/;
			const match = idError.match(regex);

			if (match) {
				const motAvantMajuscule = match[1];
				const motApresMajuscule = match[2];

				li.innerText = motAvantMajuscule + " " + motApresMajuscule + " : " + messageError

			} else {
				li.innerText = idError + " : " + messageError
			}

			ul.appendChild(li)
		})

		divError.appendChild(ul)
	}
	else {
		const main = document.getElementById('main')

		title.innerText = "Le contrat a bien été créé"

		divError.append(title)
		divError.appendChild(generateDetail(result.data.numeroOpportunite))
		main.appendChild(generateRowItemModal(result.data.numeroOpportunite, result.data))
	}
});
