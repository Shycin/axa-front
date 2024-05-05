const contrats = document.getElementById("contrats")

contrats.addEventListener("submit", function (e) {
    e.preventDefault()
    console.log(e)

    const clientId = document.getElementById("clientId")
    const nom = document.getElementById("nom")
    const prenom = document.getElementById("prenom")
    const ville = document.getElementById("ville")
    const rue = document.getElementById("rue")
    const codePostal = document.getElementById("codePostal")

    const genre = document.getElementsByName("genre")[0]
    const presenceCoassurance = document.getElementsByName("presenceCoassurance")[0]


    const numeroOpportunite = document.getElementById("numeroOpportunite")
    const referenceDossier = document.getElementById("referenceDossier")
    const numeroSIRET = document.getElementById("numeroSIRET")
    const numeroSIREN = document.getElementById("numeroSIREN")
    const intermediaire = document.getElementById("intermediaire")
    const descriptionSuccincte = document.getElementById("descriptionSuccincte")
    const adresseOperation = document.getElementById("adresseOperation")
    const coutOperation = document.getElementById("coutOperation")


    const descriptifOperation = quill.root.innerHTML


    const imageLien = document.getElementById("imageLien")
    const planAdresseOperation = document.getElementById("planAdresseOperation")

})