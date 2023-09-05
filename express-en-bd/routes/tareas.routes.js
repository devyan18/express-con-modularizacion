const { Router } = require('express')
const {
    getAllTareas,
    createNewTarea,
    deleteTarea,
    updateTarea,
    getTareaById
} = require('../controllers/tareas.controllers')

const router = Router()

router.get('/', getAllTareas)
router.get('/:id', getTareaById)
router.post('/', createNewTarea)
router.put('/:id', updateTarea)
router.delete('/:id', deleteTarea)

module.exports = router