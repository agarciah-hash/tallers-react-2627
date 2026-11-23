import { useState } from 'react'
import Targeta from './components/Targeta.jsx'
import Comptador from './components/Comptador.jsx'
import FormulariTasca from './components/FormulariTasca.jsx'
import FiltreTasques from './components/FiltreTasques.jsx'
import LlistaTasques from './components/LlistaTasques.jsx'

function App() {
  // --- Comptador (Fitxa 02) ---
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

  // --- Tasques (Fitxa 03) ---
  const [tasques, setTasques] = useState([])
  const [filtre, setFiltre] = useState('totes')

  function afegeixTasca(text) {
    const novaTasca = {
      id: crypto.randomUUID(),
      text,
      feta: false,
    }
    setTasques((anteriors) => [...anteriors, novaTasca])
  }

  function toggleTasca(id) {
    setTasques((anteriors) =>
      anteriors.map((tasca) =>
        tasca.id === id ? { ...tasca, feta: !tasca.feta } : tasca,
      ),
    )
  }

  function eliminaTasca(id) {
    setTasques((anteriors) => anteriors.filter((tasca) => tasca.id !== id))
  }

  // Estat derivat
  const pendents = tasques.filter((tasca) => !tasca.feta).length
  const fetes = tasques.length - pendents

  const tasquesFiltrades = tasques.filter((tasca) => {
    if (filtre === 'pendents') return !tasca.feta
    if (filtre === 'fetes') return tasca.feta
    return true
  })

  let missatgeBuit = ''
  if (tasques.length === 0) {
    missatgeBuit = 'Encara no hi ha tasques. Afegeix-ne una.'
  } else if (filtre === 'pendents') {
    missatgeBuit = 'No hi ha tasques pendents. Bona feina!'
  } else if (filtre === 'fetes') {
    missatgeBuit = 'Encara no has marcat cap tasca com a feta.'
  }

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
          <FormulariTasca onAfegir={afegeixTasca} />

          <div className="flex items-center justify-between text-sm text-slate-600">
            <span>
              Pendents: <strong className="text-indigo-600">{pendents}</strong>
            </span>
            <span>
              Fetes: <strong className="text-emerald-600">{fetes}</strong>
            </span>
          </div>

          <FiltreTasques filtre={filtre} onCanviaFiltre={setFiltre} />

          <LlistaTasques
            tasques={tasquesFiltrades}
            missatgeBuit={missatgeBuit}
            onToggle={toggleTasca}
            onElimina={eliminaTasca}
          />
        </div>
      </Targeta>
    </main>
  )
}

export default App