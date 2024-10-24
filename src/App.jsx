import './App.css'
import { useState } from 'react'



// vamos a hacer una funcion que me limite a trabajar con numeros naturales(mayor a 0)
//y se pasamos como argumento al onclick


function App() {
  const [valor, setValor] = useState(0)
  return (
    <main className='flex flex-col h-dvh w-dvw'>
      <div className='max-w-[80%] m-auto border border-green-600 p-6 w-8/12 h-[50%]'>
        <h1 className='text-7xl text-green-700 my-4'>Contador</h1>
        <section>
          {/* el numero que va cambiando */}
          <p className='text-5xl font-bold my-4'>{valor}</p>
        </section>
        <section className=' flex my-6 justify-center'>
          <button className='text-4xl border border-green-600 rounded-xl p-4 mx-3' onClick={() => { setValor(valor + 1) }}>
            ➕
          </button>
          {/* los botones de + y -  */}
          <button className='text-4xl border border-green-600 rounded-xl p-4 mx-3' onClick={() => { setValor(valor - 1) }}>
            ➖
          </button>
        </section>
      </div>
    </main>
  )
}

export default App
