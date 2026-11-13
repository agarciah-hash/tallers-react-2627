import { useState } from 'react'

function App() {
  const [comptador, setComptador] = useState(0)

  function incrementa() {
    setComptador((anterior) => anterior + 1)
  }

  function decrementa() {
    setComptador((anterior) => anterior - 1)
  }

  function reinicia() {
    setComptador(0)
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Hola món!
        </h1>

        <p className="text-lg text-slate-700 bg-slate-50 border border-slate-200 rounded-xl py-3 px-4">
          Has fet clic <span className="font-bold text-indigo-600">{comptador}</span> vegades.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={incrementa}
            className="bg-indigo-600 text-white font-medium py-2.5 px-4 rounded-lg hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors cursor-pointer"
          >
            Incrementa
          </button>

          <button
            type="button"
            onClick={decrementa}
            className="bg-rose-600 text-white font-medium py-2.5 px-4 rounded-lg hover:bg-rose-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 transition-colors cursor-pointer"
          >
            Decrementa
          </button>

          <button
            type="button"
            onClick={reinicia}
            className="bg-slate-200 text-slate-800 font-medium py-2.5 px-4 rounded-lg hover:bg-slate-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 transition-colors cursor-pointer"
          >
            Reinicia
          </button>
        </div>
      </div>
    </main>
  )
}

export default App