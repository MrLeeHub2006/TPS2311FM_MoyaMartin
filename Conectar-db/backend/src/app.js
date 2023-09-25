const express = require('express');
const mysql2 = require('mysql2')


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// ==== http ===

app.get('/:name/:id', (req, res)=>{
    const{ name, id } = req.params
    res.send(`${name}: ${id}`);
});
// con get puedo mandar informacion mediante la url mediante el body no, 
// no se puede usar informacion sensible
app.post('/', (req, res)=>{
    const{email, password} = req.body;
    res.send(`${email}: ${password}`);
});

app.put('/', (req, res)=>{
    res.send('Peticion PUT');
});

app.delete('/', (req, res)=>{
    res.send('Peticion DELETE');
});
// ==== db ===
const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    databse: 'tutorial',
});
connection.connect((err)=>{
    if (err) throw err;
    console.log('BD conectada');

});

//const querySQL = 'SHOW TABLES;';

//connection.connect((err, res)=>{
//    if (err) throw err;
//    console.log('respuesta sql', res);
//});

const insertQuery = `INSERT INTO User(first_name, age)VALUES('Juan','30')`;

connection.query(insertQuery, (err,res)=>{
    if(err) throw err;
    console.log('respuesta insert'. res )
})

const getQuery=`SELECT * FROM User;`;

connection.query(getQuery, (err,res)=>{
    if (err) throw err;
    console.log('respuesta insert', res)
})

app.listen(3000, ()=>{
    console.log('servidor encendido');
}); 
// para los demas metodos, pueden mediante el body y el url y se puede enviar informacion sensible desde la parte del body y el express
