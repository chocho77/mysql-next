const { createPool } = require("mysql");
const pool = createPool({
    host: "localhost",
    user: "root",
    password: "qW!25%^@aStYq12@",
    port: 3306,
    database: "fullstack",
});


pool.getConnection((err) => {
    if(err){
        console.log("Error conecting to db...");
    }
    console.log("Connected to db...");
});

const executeQuery=(query,arraParms)=>{
    return new Promise((resolve,reject)=>{
        try{
            pool.query(query,arraParms,(err,data)=>{
                if(err){
                    console.log("error in executing the query");
                    reject(err);
                }
                resolve(data);
            });

        }catch(err){

        }
    })
}

module.exports = { executeQuery };
