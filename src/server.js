const express = require("express")
//atribuindo o express a variavel server
const server = express()

// Pegando o banco de dados
const db = require("./database/db")


// configurar a pasta public
server.use(express.static("public"))

// doigo para habilitar o uso do req.body na página do post
server.use(express.urlencoded({ extended: true }))


// Utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


//Configurar o caminho da aplicação
server.get("/", (req, res) => {
    //req = Requisição
    //res = Resposta
    return res.render("index.html")
})
server.get("/create-point", (req, res) => {

    console.log(req.query)

    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

    // console.log(req.body)

    //Variavel com a inserção de dados na tabela places 
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items 
        ) VALUES (?,?,?,?,?,?,?);
    `
    // Dados da tabela places
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]
    // caso tenha (this) não é possivel usar a somente a ArrowFunction (() => {})
    function afterInsertData(err) {
        if (err) {
            console.log(err)
            return res.send("erro")

        }
            // Cadastro vai ser colcluido caso n tenha erro.
            console.log("Cadastro Concluido")
            // Exibição do cadastro realizado com o (this)
            console.log(this)
            return res.render("create-point.html", { saved: true })
        
    }
    db.run(query, values, afterInsertData)

})



server.get("/search", (req, res) => {

    const search = req.query.search

    if(search == ""){

        return res.render("search.html", { total: 0 })
    }

    // pegando os dados do banco de dados
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
        // Verificação se teve algum erro ao fazer a busca
        if (err) {
            // Se der erro, log de erro
            return console.log(err)
        }
        // Caso consiga fazer a consulta irá exibir o Log: Registros consultados são
        console.log("Registros consultados são")
        // Logo em seguida ele exibe todos os dados que foi pedido na consulta com o (rows)
        console.log(rows)

        // Armazenando o "tamanho" do array na variavel total
        const total = rows.length

        // Mostrar a página html com os dados do banco de dados
        return res.render("search.html", { places: rows, total: total })
    })


})

//Ligando o servidor, "listen" é o mesmo que ficar ouvindo a porta informada dentro do ()
server.listen(3000)

