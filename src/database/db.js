// importar a dependencia do SQLite3

const sqlite3 = require("sqlite3").verbose()

// Criar o objeto de Banco de Dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// Utilizar o objeto de bando de dados(db), para as operações

db.serialize(() => {
    //Criar uma tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)
    // //Variavel com a inserção de dados na tabela places 
    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items 
    //     ) VALUES (?,?,?,?,?,?,?);
    // `
    // // Dados da tabela places
    // const values = [
    //     "https://images.unsplash.com/photo-1587930950456-5fb8eebefa7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    //     "Papersider",
    //     "Guilherme Gemballa, Jardim América",
    //     "Número 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Papéis e Papelão"
    // ]
    // // caso tenha (this) não é possivel usar a somente a ArrowFunction (() => {})
    // function afterInsertData(err){
    //     if(err) {
    //         return console.log(err)
    //     }
    //     // Cadastro vai ser colcluido caso n tenha erro.
    //     console.log("Cadastro Concluido")
    //     // Exibição do cadastro realizado com o (this)
    //     console.log(this)
    // }

    // // Realizando o Insert, Colocando os valores e chamando uma função para cadastrar e trazendo erro caso tenha algo errado
    // db.run(query, values, afterInsertData)
  
    

//     //Deletando 1 item da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
    //     // Verificando se conseguiu realizar o delete na tabela do db
    //     if(err) {
    //         // Se der erro, log de erro
    //         return console.log(err)
    //     }
    //     // Se não der erro ele vai efetuar a deleção e exibir o log(Delete realizado com sucesso)
    //     console.log("Delete realizado com sucesso")
    // })
//     // //realizando a consluta a tabela
//     // db.all(`SELECT * FROM places`, function(err, rows) {
//     //     // Verificação se teve algum erro ao fazer a busca
//     //     if(err) {
//     //         // Se der erro, log de erro
//     //         return console.log(err)
//     //     }
//     //     // Caso consiga fazer a consulta irá exibir o Log: Registros consultados são
//     //     console.log("Registros consultados são")
//     //     // Logo em seguida ele exibe todos os dados que foi pedido na consulta com o (rows)
//     //     console.log(rows)
//     // })
})