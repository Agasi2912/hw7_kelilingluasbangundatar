const express = require('express')
const app = express()
const morgan = require ('morgan')

const PORT = 8080

app.use(morgan("tiny"))

app.get ("/users", (request, response) => {
    response.json({data: [{id: 1, name: "Users1"}]});
});

app.post ("/users", (request, response) => {
    response.json("Data added succesfully");
});

app.put ("/users", (request, response) => {
    response.json("Data added succesfully");
});

app.delete ("/users", (request, response) => {
    response.json("Data added succesfully");
});
app.listen (PORT, () => {
    console.log('Server berjalan di $[PORT]');
});

