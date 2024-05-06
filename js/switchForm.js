function isHidden(el) {
	var style = window.getComputedStyle(el);
	return style.display === "none";
}

const buttonChangeForm = document.getElementsByClassName("changeForm");
for (var i = 0; i < buttonChangeForm.length; i++) {
	buttonChangeForm[i].addEventListener("click", function (e) {
		const currentPage = parseInt(e.target.getAttribute("currentpage"));
		const nextPage = currentPage + 1;

		document
			.getElementById("form" + currentPage)
			.classList.add("was-validated");

		let allAvailable = true;
		const allFieldInvalid = document.getElementsByClassName("invalid-feedback");
		for (
			var fieldInvalid = 0;
			fieldInvalid < allFieldInvalid.length;
			fieldInvalid++
		) {
			const valid = isHidden(allFieldInvalid[fieldInvalid]);

			if (!valid) {
				allAvailable = false;
			}
		}
		if (allAvailable) {
			currentPageForm = nextPage;

			document.getElementById("form" + currentPage).style.display = "none";

			if (document.getElementById("status" + currentPage)) {
				document
					.getElementById("status" + currentPage)
					.classList.remove("current");
				document
					.getElementById("status" + currentPage)
					.classList.add("completed");
			}

			if (document.getElementById("status-bar" + currentPage))
				document.getElementById("status-bar" + currentPage).style.height =
					"100%";

			if (document.getElementById("status" + nextPage)) {
				document.getElementById("status" + nextPage).classList.add("current");
			}

			if (document.getElementById("form" + nextPage)) {
				document.getElementById("form" + nextPage).style.display = "block";
			}
		}
	});
}

const buttonChangeFormPrevious =
	document.getElementsByClassName("changeFormPrevious");
for (var i = 0; i < buttonChangeFormPrevious.length; i++) {
	buttonChangeFormPrevious[i].addEventListener("click", function (e) {
		const currentPage = parseInt(e.target.getAttribute("currentpage"));
		const previousPage = currentPage - 1;
		currentPageForm = previousPage;

		document.getElementById("status" + currentPage).classList.remove("current");
		document.getElementById("form" + currentPage).style.display = "none";

		if (document.getElementById("status" + previousPage)) {
			document.getElementById("status" + previousPage).classList.add("current");
		}

		if (document.getElementById("form" + previousPage)) {
			document.getElementById("form" + previousPage).style.display = "block";
		}
	});
}
