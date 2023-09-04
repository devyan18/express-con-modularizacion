const { Router } = require('express')
const {
    crearUnaTarea,
    editarUnaTarea,
    eliminarUnaTarea,
    obtenerTareaPorId,
    obtenerTodasLasTareas
} = require('../controllers/tareas.controllers')

const router = Router()

router.get('/', obtenerTodasLasTareas)
router.get('/:id', obtenerTareaPorId)
router.post('/', crearUnaTarea)
router.patch('/:id', editarUnaTarea) 
router.delete('/:id', eliminarUnaTarea)

module.exports = router