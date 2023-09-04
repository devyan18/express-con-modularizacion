// array original
let tareas = [
    {
        id: 1,
        title: "mi primer tarea",
        done: false
    }
]

// genera una nueva id teniendo en cuenta cual es la id de mayor numero dentro del array de tareas
const generarNuevaId = () => {
    return Math.max(...tareas.map((param) => +param.id)) + 1
}


// devuelve en formato JSON el array de las tareas
const obtenerTodasLasTareas = (req, res) => {
    res.json(tareas)
}

// busca una tarea por id y devuelve toda la informacion de esa tarea
const obtenerTareaPorId = (req, res) => {

    // guardamos en una constante el id que extraemos de los parametros
    const id = req.params.id

    // buscamos una tarea cuya id sea igual a la id que obtenes de los parametros
    const tarea = tareas.find((elemento) => {
        return elemento.id == id
    })

    // validamos si la tarea existe y de no ser asi respondemos con un mensaje de error
    if (!tarea) {
        return res.send('no hay tarea con esa id')
    }

    // se devuelve la tarea en caso de haberse encontrado.
    res.json(tarea)
}

// obtiene datos por el body y con ellos crea una nueva tarea en el array de las tareas
const crearUnaTarea = (req, res) => {

    // obtenemos el title del body de la peticion
    const { title } = req.body


    // conseguimos una nueva id que no este utilizada
    const nuevaId = generarNuevaId()

    // array.push muta el array original
    // agregamos a la coleccion de tareas una nueva tarea con los datos recibidos
    tareas.push({
        id: nuevaId,
        title: title,
        done: false
    })

    // devolvemos un mensaje de exito.
    res.send("Tarea creada")
}

// buscamos una tarea por id y le cambiamos su contenido dentro del array de las tareas
const editarUnaTarea = (req, res) => {

    // guardamos en una constante el id que extraemos de los parametros
    const id = req.params.id

    // obtenemos el title y del done del body de la peticion
    const { title, done } = req.body

    // array.map no muta el array original
    // recorremos el array de las tareas y modificamos una de las tareas segun una condicion
    tareas = tareas.map((tarea) => {

        // validamos que el id no sea igual y de ser asi, retornamos la tarea sin modificarla 
        if (tarea.id != id) {
            return tarea
        }
        
        // devolvemos la tarea pero modificada
        return {
            id: tarea.id,
            title: title,
            done: done
        }

    })

    // devolvemos un mensaje de exito
    res.send("Tarea editada")
}

// buscamos una tarea por id y la eliminamos del array de las tareas
const eliminarUnaTarea = (req, res) => {

    // guardamos en una constante el id que extraemos de los parametros
    const id = req.params.id

    // filter no muta el array original
    // buscamos una tarea que coincida con la id que recibimos por parametros y la borramos del array
    tareas = tareas.filter((tarea) => tarea.id != id)

    // devolvemos un mensaje de exito
    res.send('tarea eliminada')
}

module.exports = {
    obtenerTodasLasTareas,
    obtenerTareaPorId,
    crearUnaTarea,
    editarUnaTarea,
    eliminarUnaTarea
}