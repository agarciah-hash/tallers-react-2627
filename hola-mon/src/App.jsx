import { useContext, useState } from 'react'
import Targeta from './components/Targeta.jsx'
import Comptador from './components/Comptador.jsx'
import FormulariTasca from './components/FormulariTasca.jsx'
import FiltreTasques from './components/FiltreTasques.jsx'
import LlistaTasques from './components/LlistaTasques.jsx'
import { TasquesContext } from './context/TasquesContext.js'

function App() {
 
  const [comptador, setComptador] = useState(0)

  function canvia(delta) {
    setComptador((anterior) => anterior + delta)
  }

  function reinicia() {
    setComptador(0)
  }

  let missatgeComptador = ''
  let tipusComptador = 'info'
  if (comptador === 0) {
    missatgeComptador = 'Encara no has fet cap clic.'
    tipusComptador = 'info'
  } else if (comptador > 0) {
    missatgeComptador = 'Vas per bon camí!'
    tipusComptador = 'exit'
  } else {
    missatgeComptador = 'Vas en negatiu, compte!'
    tipusComptador = 'error'
  }

  
  const { tasques } = useContext(TasquesContext)
  const [filtre, setFiltre] = useState('totes')

  
  const pendents = tasques.filter((tasca) => !tasca.feta).length
  const fetes = tasques.length - pendents

  return (
    <main className="min-h-screen bg-slate-100 flex flex-col items-center justify-center gap-6 p-6">
      <Targeta titol="Comptador">
        <Comptador
          valor={comptador}
          missatge={missatgeComptador}
          tipus={tipusComptador}
          pas={1}
          onCanvia={canvia}
          onReinicia={reinicia}
        />
      </Targeta>

      <Targeta titol="Tasques">
        <div className="space-y-4">
          <FormulariTasca />

          <div className="flex items-center justify-between text-sm text-slate-600">
            <span>
              Pendents: <strong className="text-indigo-600">{pendents}</strong>
            </span>
            <span>
              Fetes: <strong className="text-emerald-600">{fetes}</strong>
            </span>
          </div>

          <FiltreTasques filtre={filtre} onCanviaFiltre={setFiltre} />

          <LlistaTasques filtre={filtre} />
        </div>
      </Targeta>
    </main>
  )
}

export default App