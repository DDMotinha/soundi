$(document).ready(function() {
    $('#generoA').select2({
        width: '150px' // need to override the changed default
    });
    $('#generoB').select2({
        width: '150px' // need to override the changed default
    });
    $('#generoC').select2({
        width: '150px' // need to override the changed default
    });
    $('#generoD').select2({
        width: '150px' // need to override the changed default
    });
    $('#cidade').select2({
        width: '150px' // need to override the changed default
    });
})

async function fetchFestas() {
    const response = await fetch(`${window.location.origin}/api/festas`)
    const json = response.json()
    return json
}

async function populaSelects(json) {
    var generoAPrompt = []
    var generoBPrompt = []
    var generoCPrompt = []
    var generoDPrompt = []
    var cidadePrompt = []

    for (let index = 0; index < json.length; index++) {
        const element = json[index];
        generoAPrompt.push(element.GeneroA)
        generoAPrompt.push(element.GeneroB)
        generoAPrompt.push(element.GeneroC)
        generoAPrompt.push(element.GeneroD)
        cidadePrompt.push(element.CidadeFesta)
    }

    generoAPrompt = [...new Set(generoAPrompt)].sort()
    cidadePrompt = [...new Set(cidadePrompt)].sort()

    generoAPrompt.forEach((element)=>{
        $('#generoA').append(`<option value="${element}">${element}</option>`)
    })
    cidadePrompt.forEach((element)=>{
        $('#cidade').append(`<option value="${element}">${element}</option>`)
    })
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
    await populaSelects(festas)
}


window.onload = async () => {
    await populationTableParties()
}
