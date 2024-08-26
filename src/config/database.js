import mysql from 'mysql'


//conexão com o banco

const db = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password:"12345",
    database: "deliverymais"
});

// Teste de conexão
// db.getConnection((err, conn)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Conexão com o Banco de dados ok")
//     }
// })

export {db};