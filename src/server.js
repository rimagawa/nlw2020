const express = require("express")
const server = express()

//pegar banco de dados
const db = require("./database/db")

//confgurar pasta publica
server.use(express.static("public"))


//habilitar o uso do req body
server.use(express.urlencoded({extended: true}))

//utilizando template engines
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//configurar caminhos da minha aplicação
//pagina inicial
//req - requisicao
//res - resposta
server.get("/", (req, res) => {
    return res.render("index.html")
})
server.get("/search-results", (req, res) => {

    const search = req.query.search
    // if (search == ""){

    // }


    //prgar os dados do banco
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
        if(err) {
            return console.log(err)
        }
        console.log(rows)
        const total = rows.length

        return res.render("search-results.html", {places: rows, total: total})
    })

    
})

server.get("/create-point", (req, res) => {

    //query string da url
    //req.query
    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    //req.body o corpo do formulario
    //console.log(req.body)

    //inserir dados no banco de dados
    const query = `
        INSERT INTO places (
            name, image, adress, adress2, state, city, items
        ) VALUES (?,?,?,?,?,?,?);`
    
    const values = [
        req.body.name,
        req.body.image,
        req.body.adress,
        req.body.adress2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if(err) {
            return console.log(err)
        }
        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", {saved: true})
    }
    db.run(query, values, afterInsertData)

    
})


//ligar o servidor
server.listen(3000)