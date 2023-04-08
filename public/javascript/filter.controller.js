
$('#generoA').on('change', function(evt){
    alteraTable(evt)
})

$('#cidade').on('change', function(evt){
    alteraTable(evt)
})


function alteraTable(evt){
    console.log('a')
    // Recupera o valor selecionado pelo usuário e a <tbody> que contém as linhas da tabela a ser filtrada
    const valorSelecionado = evt.target.value;
    const tbody = document.getElementById("festas").getElementsByTagName("tbody")[0];
  
    // Percorre as linhas da <tbody> e verifica se o valor selecionado está presente em alguma célula
    for (let i = 0; i < tbody.rows.length; i++) {
      const linha = tbody.rows[i];
      let valorEncontrado = false;
  
      for (let j = 0; j < linha.cells.length; j++) {
        const celula = linha.cells[j];
  
        if (celula.innerHTML.includes(valorSelecionado)) {
          valorEncontrado = true;
          break;
        }
      }
      if(valorSelecionado !== 'null'){
        linha.style.display = valorEncontrado ? "table-row" : "none";
      } else if(valorSelecionado === 'null'){
        linha.style.display = "table-row"
      }
    }
}