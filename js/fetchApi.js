async function init() {
    const url = urlTarget + "/contracts"
    const fetchData = await fetch(url + "?page=" + currentPage, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        // body: JSON.stringify(donnees), // le type utilisé pour le corps doit correspondre à l'en-tête "Content-Type"
    }).then((response) => response.json());

    for (each of fetchData.data) {
        generateRow(each)
    }

    generatePagination(fetchData.count)
}
init()