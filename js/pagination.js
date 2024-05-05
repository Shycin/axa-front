
function generateLinkPagination(pageId, current = false, text = pageId) {
    const pageItem = document.createElement("li");
    pageItem.classList.add("page-item");
    if (current) {
        pageItem.classList.add("active");
    }

    const pageItemLink = document.createElement("a");
    pageItemLink.classList.add("page-link");
    pageItemLink.href = "?page=" + pageId;
    pageItemLink.innerText = text;

    pageItem.appendChild(pageItemLink)

    return pageItem
}

function generatePagination(count) {
    const maxItemPagination = 10

    const nbPage = Math.ceil(count / maxItemPagination)
    const elementPagination = document.getElementById('pagination')

    if (currentPage > 1) {
        const newLinkPage = generateLinkPagination(parseInt(currentPage) - 1, false, "PREVIOUS")
        elementPagination.appendChild(newLinkPage)
    }
    else {
        const newLinkPage = generateLinkPagination(parseInt(currentPage) - 1, false, "PREVIOUS")
        newLinkPage.classList.add("disabled")
        elementPagination.appendChild(newLinkPage)
    }


    for (let compteur = 1; compteur < nbPage + 1; compteur++) {
        console.log(compteur === parseInt(currentPage))
        const newLinkPage = generateLinkPagination(compteur, compteur === parseInt(currentPage))
        elementPagination.appendChild(newLinkPage)
    }


    if (nbPage > currentPage) {
        const newLinkPage = generateLinkPagination(parseInt(currentPage) + 1, false, "NEXT")
        elementPagination.appendChild(newLinkPage)
    }
    else {
        const newLinkPage = generateLinkPagination(parseInt(currentPage) + 1, false, "NEXT")
        newLinkPage.classList.add("disabled")
        elementPagination.appendChild(newLinkPage)
    }

}