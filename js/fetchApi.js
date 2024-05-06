async function init(nameParams = "", valueParams = "") {
    const url = urlTarget + "/contracts"
    const urlParams = new URLSearchParams(window.location.search);

    if (nameParams && !urlParams.get(nameParams)) {
        urlParams.append(nameParams, valueParams)
    }
    else if (nameParams && urlParams.get(nameParams)) {
        urlParams.set(nameParams, valueParams)
    }

    const fetchData = await fetch(url + "?" + urlParams.toString(), {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",

        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
    }).then((response) => response.json());


    const contratsTable = document.getElementById('table-contracts')
    contratsTable.innerHTML = ""

    for (each of fetchData.data) {
        generateRow(each)
    }

    generatePagination(fetchData.count)
}
init()


const orderIcon = document.getElementsByClassName("sort-icon")
for (
    var orderIconCompteur = 0;
    orderIconCompteur < orderIcon.length;
    orderIconCompteur++
) {
    orderIcon[orderIconCompteur].addEventListener("click", function (e) {
        const nameParams = e.target.getAttribute('name')
        const valueParams = e.target.getAttribute('value')

        const newParams = "&" + nameParams + "=" + valueParams
        otherParams = newParams

        init(nameParams, valueParams)


        e.target.setAttribute('value', e.target.getAttribute('value') === "asc" ? "desc" : "asc")
    })
}


const onInput = debounce(delayedSearch, 500);

const searchFiltre = document.getElementsByClassName("searchFiltre")
for (
    var searchFiltreCompteur = 0;
    searchFiltreCompteur < searchFiltre.length;
    searchFiltreCompteur++
) {
    searchFiltre[searchFiltreCompteur].addEventListener("input", function (e) {
        onInput(e);
    })
}

function delayedSearch(e) {
    const nameParams = e.target.id
    const valueParams = e.target.value

    const newParams = "&" + nameParams + "=" + valueParams
    otherSearchParams = newParams

    otherParams = ""

    init(nameParams, valueParams)
}