const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

// middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// routes
app.use('/tareas', require('./routes/tareas.routes'))
app.use('/usuarios', require('./routes/usuarios.routes'))

app.listen(4000, () => {
    console.log("Server on port 4000")
})