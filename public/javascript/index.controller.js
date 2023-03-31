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
        generoBPrompt.push(element.GeneroB)
        generoCPrompt.push(element.GeneroC)
        generoDPrompt.push(element.GeneroD)
        cidadePrompt.push(element.CidadeFesta)
    }

    generoAPrompt = [...new Set(generoAPrompt)].sort()
    generoBPrompt = [...new Set(generoBPrompt)].sort()
    generoCPrompt = [...new Set(generoCPrompt)].sort()
    generoDPrompt = [...new Set(generoDPrompt)].sort()
    cidadePrompt = [...new Set(cidadePrompt)].sort()

    generoAPrompt.forEach((element)=>{
        $('#generoA').append(`<option value="${element}">${element}</option>`)
    })
    generoBPrompt.forEach((element)=>{
        $('#generoB').append(`<option value="${element}">${element}</option>`)
    })
    generoCPrompt.forEach((element)=>{
        $('#generoC').append(`<option value="${element}">${element}</option>`)
    })
    generoDPrompt.forEach((element)=>{
        $('#generoD').append(`<option value="${element}">${element}</option>`)
    })
    cidadePrompt.forEach((element)=>{
        $('#cidade').append(`<option value="${element}">${element}</option>`)
    })
}

$('#generoA').on( function(evt){
    const select = document.getElementById('generoA')
    const tbody = document.getElementById("populationTable");
    const rows = tbody.querySelectorAll("tr");
    rows.forEach((row, index) => {
      if (select.value === "all") {
        row.style.display = "";
      } else if (select.value === "even") {
        if (index % 2 === 0) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      } else if (select.value === "odd") {
        if (index % 2 === 1) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      }
    });
})

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
