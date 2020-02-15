const express = require('express')

const app = express()

// const baseDir = `${__dirname}/build/`

// app.get('*', (req,res) => res.sendFile('index.html' , { root : baseDir }))

// const port = 21120
// app.listen(port, () => console.log(`Servidor subiu com sucesso em http://localhost:${port}`))

const root = require('path').join(__dirname, 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})

const port = 21217
app.listen(port, () => console.log(`Servidor subiu com sucesso em http://localhost:${port}`))

