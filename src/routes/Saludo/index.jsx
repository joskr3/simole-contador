import NavBar from "../../components/NavBar"

import { useState, useEffect } from "react"

const SaludoPage = () => {
    const [saludo, setSaludo] = useState("")

    function getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
    }

    useEffect(() => {
        const saludos = ["Mi Saludo especial 1", "Mi Saludo especial 2", "Mi Saludo especial 3", "Mi Saludo especial 4"]   
        function obtenerCitaAleatoria() {
            const randomIndex = getRandomIntInclusive(0, 3)
            return setSaludo(saludos[randomIndex])
        }
        setInterval(obtenerCitaAleatoria, 1000)
    }, []);

    return (
        <>
            <NavBar />
            <p className="text-7xl m-auto justify-center">{saludo}</p>
        </>
    )
}

export default SaludoPage