//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()
//criar o objeto de banco de dados
const db =  new sqlite3.Database("./src/database/database.db")

module.exports = db

// utilizar o objeto para as operacoes
// db.serialize(() => {
    //criar uma tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         name TEXT,
    //         image TEXT,
    //         adress TEXT,
    //         adress2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    // //inserir dados na tabela
    // const query = `
    //     INSERT INTO places (
    //         name, image, adress, adress2, state, city, items
    //     ) VALUES (?,?,?,?,?,?,?);`
    
    // const values = [
    //     "Papersider",
    //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    //     "Guilherme Gemballa, Jardim America",
    //     "N° 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Papéis e Papelão"
    // ]

    // function afterInsertData(err) {
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }

    // db.run(query, values, afterInsertData)
    
    // // Consultar dados na tabela
    // db.all(`SELECT * FROM places`, function(err, rows) {
    //     if(err) {
    //         return console.log(err)
    //     }
    //     console.log("Aqui estao os seus registros")
    //     console.log(rows)
    // })

    // deletar dados
//     db.run(`DELETE FROM places WHERE id = ?`, [7], function(err){
//         if(err) {
//             return console.log(err)
//         }
//         console.log("Registro deletado com sucesso")
//     })
// })