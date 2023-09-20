const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

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

app.listen(3000, ()=>{
    console.log('servidor encendido');
}); 
// para los demas metodos, pueden mediante el body y el url y se puede enviar informacion sensible desde la parte del body y el express
