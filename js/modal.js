
function generateRowDataModal(name, value) {
    const rowData = document.createElement("div");

    const spanName = document.createElement("span");
    spanName.innerText = name

    const spanValue = document.createElement("span");
    spanValue.innerText = value

    rowData.appendChild(spanName)
    rowData.appendChild(spanValue)

    return rowData
}

function generateRowDataImageModal(name, images) {
    const rowData = document.createElement("div");

    const spanName = document.createElement("span");
    spanName.innerText = name


    rowData.appendChild(spanName)

    for (image of JSON.parse(images)) {
        const imageLink = document.createElement("a")
        imageLink.href = urlTarget + "/public/uploads/" + image;

        const imageRow = document.createElement("img");
        imageRow.src = urlTarget + "/public/uploads/" + image;
        imageRow.width = "100"

        imageLink.appendChild(imageRow)

        rowData.appendChild(imageLink)
    }

    return rowData
}


function generateRowDataUploadModal(pdfLink, docxLink) {
    const rowData = document.createElement("div");



    const iconDownload = document.createElement("i");
    iconDownload.classList.add("icon-download")

    const spanRowpdf = document.createElement("a");
    spanRowpdf.setAttribute('href', urlTarget + pdfLink);
    spanRowpdf.setAttribute('download', '');
    spanRowpdf.setAttribute('target', '_blank');
    spanRowpdf.innerText = ".pdf"
    spanRowpdf.appendChild(iconDownload)

    const link1Button = document.createElement("button");
    link1Button.append(spanRowpdf)




    const iconDownload2 = document.createElement("i");
    iconDownload2.classList.add("icon-download")

    const spanRowdocx = document.createElement("a");
    spanRowdocx.setAttribute('href', urlTarget + docxLink);
    spanRowdocx.setAttribute('download', '');
    spanRowdocx.setAttribute('target', '_blank');
    spanRowdocx.innerText = ".docx"
    spanRowdocx.appendChild(iconDownload2)

    const link2Button = document.createElement("button");
    link2Button.append(spanRowdocx)



    rowData.appendChild(link1Button)
    rowData.appendChild(link2Button)

    return rowData
}

function generateRowDataClientModal(name, client) {
    const rowData = document.createElement("div");

    const lineIdentite = (client.genre === "H" ? "M." : "Mme.") + " " + client.prenom + " " + client.nom + ", " + client.rue + ", " + client.codePostal + " " + client.ville


    const spanName = document.createElement("span");
    spanName.innerText = name

    const spanValue = document.createElement("span");
    spanValue.innerText = lineIdentite

    rowData.appendChild(spanName)
    rowData.appendChild(spanValue)

    return rowData
}

function generateClose(id) {
    const rowItem = document.createElement("td");

    const spanItem = document.createElement("span");
    spanItem.classList.add("clickable")
    spanItem.innerText = "Fermer"

    const iconItem = document.createElement("i");
    iconItem.classList.add("icon-close")
    iconItem.classList.add("clickable")


    spanItem.addEventListener('click', function () {
        document.getElementById(id).classList.remove('open')
    })

    iconItem.addEventListener('click', function () {
        document.getElementById(id).classList.remove('open')
    })

    rowItem.appendChild(iconItem)
    rowItem.appendChild(spanItem)

    return rowItem
}



function generateRowItemModal(id, object) {

    const modalContract = document.createElement("div");
    modalContract.classList.add("modalContract")
    modalContract.id = id

    const containerModal = document.createElement("div");
    containerModal.classList.add("containerModal")

    containerModal.appendChild(generateClose(id))
    containerModal.appendChild(generateRowDataModal("Numéro d'opportunité", object.numeroOpportunite))
    containerModal.appendChild(generateRowDataModal("Référence du dossier", object.referenceDossier))
    containerModal.appendChild(generateRowDataModal("Numéro de SIRET", object.numeroSIRET))
    containerModal.appendChild(generateRowDataModal("Numéro de SIREN", object.numeroSIREN))
    containerModal.appendChild(generateRowDataClientModal("Client", object.client))
    containerModal.appendChild(generateRowDataModal("Intermédiaire", object.intermediaire))
    containerModal.appendChild(generateRowDataModal("Description succincte", object.descriptionSuccincte))
    containerModal.appendChild(generateRowDataImageModal("Image description", object.imageLien))
    containerModal.appendChild(generateRowDataModal("Coassurance ?", object.presenceCoassurance))
    containerModal.appendChild(generateRowDataModal("Adresse de l'opération", object.adresseOperation))
    containerModal.appendChild(generateRowDataImageModal("Plan de l'adresse", object.planAdresseOperation))
    containerModal.appendChild(generateRowDataModal("Descriptif détaillé", object.descriptifOperation))
    containerModal.appendChild(generateRowDataModal("Coût", object.coutOperation))
    containerModal.appendChild(generateRowDataUploadModal(object.pdfFileUrl, object.docxFileUrl))

    const numeroOpportunite = document.createElement("div");
    containerModal.classList.add("containerModal")



    modalContract.appendChild(containerModal)

    return modalContract
}
