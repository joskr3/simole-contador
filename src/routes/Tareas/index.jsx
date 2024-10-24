import { useState } from "react"
import NavBar from "../../components/NavBar"

// eslint-disable-next-line react/prop-types
const ListaTareas = ({ tareas = [""] }) => {
    return (
        <ol className="flex flex-col max-w-24 m-auto mt-4">
            {
                tareas.map((tarea, index) => (
                    <li className="text-bold text-2xl" key={index}>{tarea}</li>
                ))
            }
        </ol>
    )
}

const TareasPage = () => {
    const [todasLastareas, setTodasLasTareas] = useState([""])
    const [nuevaTarea, setNuevaTarea] = useState("")

    const agregarTarea = () => {
        if (nuevaTarea) {
            setTodasLasTareas([...todasLastareas, nuevaTarea])
            setNuevaTarea('')
        }
    }
    return (
        <>
            <NavBar />
            <div className="flex flex-col justify-center">
                <h1 className="text-5xl justify-center flex m-auto mx-6">Lista de tareas pendientes</h1>
                <section className="flex gap-6 max-w-40 mt-6 justify-center m-auto">
                    <input
                        className="border border-black p-4 rounded-xl min-w-fit"
                        type="text"
                        value={nuevaTarea}
                        onChange={(e) => setNuevaTarea(e.target.value)}
                        placeholder="Agregar Nueva Tarea"
                    />
                    <button className="bg-green-600 border border-white rounded-xl text-white p-2 min-w-fit"
                            onClick={agregarTarea}>
                        Agregar Tarea
                    </button>
                </section>
                <section>
                    <ListaTareas tareas={todasLastareas || [""]} />
                </section>
            </div>
        </>
    )
}

export default TareasPage