

async function fetchFestas() {
    const response = await fetch(`${window.location.origin}/api/festas`)
    const json = response.json()
    console.log(json)
    return json
}


async function populationTableParties() {
    const festas = await fetchFestas()
    for (let index = 0; index < festas.length; index++) {
        const element = festas[index];
        $('#populationTable').append(`
            <tr>
                <td>${element.NomeDaFesta}</td>
                <td>${element.GeneroA}</td>
                <td>${element.GeneroB}</td>
                <td>${element.GeneroC}</td>
                <td>${element.GeneroD}</td>
                <td>${element.EstadoFesta}</td>
                <td>${element.CidadeFesta}</td>
                <td><a href="${element.LinkDaFesta}">${element.LinkDaFesta}</a></td>
            </tr>
        `)   
    }
}

populationTableParties()