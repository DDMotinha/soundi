const fs = require('fs')
const path = require('path')

function csvToJson() {
        const file = fs.readFileSync(path.join(__dirname,'../files/DataBaseFestas.csv'), 'utf-8')
        const lines = file.split('\r\n');
        const headers = lines[0].split(';');
        const result = [];
        for (let i = 1; i < lines.length; i++) {
          const values = lines[i].split(';');
          const obj = {};
          for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = values[j];
          }
          result.push(obj);
        }
        return result;
}
      
async function estilos() {  
    let estilos = [
        {
            "value":1,
            "name":"Rock"
        },
        {
            "value":2,
            "name":"Funk"
        },
        {
            "value":3,
            "name":"Eletronica"
        },
        {
            "value":4,
            "name":"Samba"
        }
    ]
    return estilos
}

async function festas() {
    let festas = csvToJson()
    return festas
}

module.exports = {
    estilos,
    festas
}