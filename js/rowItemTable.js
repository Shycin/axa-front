function generateRowItemClient(text, client, tooltip = true) {

    const allInfoClient = text + "\r\n" + client.rue + "\r\n" + client.codePostal + ", " + client.ville

    const rowItem = document.createElement("td");

    const spanRow = document.createElement("span");
    spanRow.innerText = text + " ";

    rowItem.appendChild(spanRow)

    return rowItem
}

function generateRowItemAction(urlPdf, urlDocx) {
    const rowItem = document.createElement("td");

    const iconDownload = document.createElement("i");
    iconDownload.classList.add("icon-download")

    const spanRowpdf = document.createElement("a");
    spanRowpdf.setAttribute('href', urlTarget + urlPdf);
    spanRowpdf.setAttribute('download', '');
    spanRowpdf.setAttribute('target', '_blank');
    spanRowpdf.innerText = ".pdf"
    spanRowpdf.appendChild(iconDownload)


    const iconDownload2 = document.createElement("i");
    iconDownload2.classList.add("icon-download")

    const spanRowdocx = document.createElement("a");
    spanRowdocx.setAttribute('href', urlTarget + urlDocx);
    spanRowdocx.setAttribute('download', '');
    spanRowdocx.setAttribute('target', '_blank');
    spanRowdocx.innerText = ".docx"
    spanRowdocx.appendChild(iconDownload2)

    rowItem.appendChild(spanRowpdf)
    rowItem.appendChild(spanRowdocx)

    return rowItem
}

function generateRowItemImage(images) {
    const rowItem = document.createElement("td");


    for ([index, image] of JSON.parse(images)) {
        const imageRow = document.createElement("a");
        imageRow.href = urlTarget + "/public/uploads/" + image;
        imageRow.innerText = "image " + index

        rowItem.appendChild(imageRow)
    }

    return rowItem
}

function generateRowItem(text, tooltip = true) {
    const rowItem = document.createElement("td");

    const spanRow = document.createElement("span");
    spanRow.innerText = text + " ";


    rowItem.appendChild(spanRow)

    return rowItem
}

function generateDetail(id) {
    const rowItem = document.createElement("td");

    const iconItem = document.createElement("i");
    iconItem.classList.add("icon-info")
    iconItem.classList.add("clickable")

    iconItem.addEventListener('click', function () {
        document.getElementById(id).classList.add('open')
    })

    rowItem.appendChild(iconItem)

    return rowItem
}



function generateRow(object) {

    const contratsTable = document.getElementById('table-contracts')
    const main = document.getElementById('main')

    const identiteClient = (object.client.genre === "H" ? "M." : "Mme") + " " + object.client.prenom + " " + object.client.nom
    const id = object.numeroOpportunite

    const rowItem = document.createElement("tr");
    rowItem.classList.add("table-row")


    rowItem.appendChild(generateRowItem(object.numeroOpportunite))
    rowItem.appendChild(generateRowItem(object.referenceDossier))
    rowItem.appendChild(generateRowItemClient(identiteClient, object.client))
    rowItem.appendChild(generateRowItemAction(object.pdfFileUrl, object.docxFileUrl))
    rowItem.appendChild(generateDetail(id))

    main.appendChild(generateRowItemModal(id, object))

    contratsTable.appendChild(rowItem)
}
