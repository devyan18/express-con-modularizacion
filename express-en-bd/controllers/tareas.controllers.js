const { TareasModel } = require('../models/Tarea')

const getAllTareas = async (req, res) => {
    try {
        const allTareas = await TareasModel.findAll()

        res.status(200).json(allTareas)
    } catch (error) {
        res.status(500).send('hubo un error al obtener las tareas')    
    }
}

const getTareaById = async (req, res) => {
    try {
        const tarea = await TareasModel.findByPk(req.params.id)
        res.status(200).json(tarea)
    } catch (error) {
        res.status(500).send('hubo un error obtener una tarea')
    }
}

const createNewTarea = async (req, res) => {
   try {
        const { titulo } = req.body

        await TareasModel.create({ titulo })

        res.status(201).send('tarea creada correctamente')
   } catch (error) {
        res.status(500).send('hubo un error al crear la tarea')
   }
}

const updateTarea = async (req, res) => {
    try {
        const id = req.params.id
        const { titulo, estado } = req.body
    
        await TareasModel.update({ titulo, estado }, {
            where: {
                id: id
            }
        })
    
        res.status(202).send('tarea edito correctamente')
    } catch (error) {
        res.status(500).send('error al actualizar la tarea')        
    }
}

const deleteTarea = async (req, res) => {
    try {
        const id = req.params.id

        await TareasModel.destroy({
            where: {
                id: id
            }
        })
    
        res.status(202).send('la tarea se elimino correctamente')
    } catch (error) {
        res.status(500).send('hubo un error al eliminar la nota')
    }
}

module.exports = {
    getAllTareas,
    createNewTarea,
    deleteTarea,
    updateTarea,
    getTareaById
}