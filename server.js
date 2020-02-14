const express = require('express')
require('dotenv/config');

const app = express()

const baseDir = `${__dirname}/build/`

app.get('*', (req,res) => res.sendFile('index.html' , { root : baseDir }))

const port = 4000
app.listen(port, () => console.log(`Servidor subiu com sucesso em http://localhost:${port}`))
