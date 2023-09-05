const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const { sequelize } = require('./database')

require('./models/Tarea')

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))


app.use('/tareas', require('./routes/tareas.routes'))

app.listen(4000, () => {

    sequelize.sync({ force: false })
        .then(() => console.log("Database is connected"))
        .catch((error) => console.log(error))

    console.log("Server on port 4000")
})