import { useState } from 'react'
import Targeta from './components/Targeta.jsx'
import Comptador from './components/Comptador.jsx'

function App() {
  const [comptador, setComptador] = useState(0)

  function canvia(delta) {
    setComptador((anterior) => anterior + delta)
  }

  function reinicia() {
    setComptador(0)
  }

  let missatge = ''
  let tipus = 'info'
  if (comptador === 0) {
    missatge = 'Encara no has fet cap clic.'
    tipus = 'info'
  } else if (comptador > 0) {
    missatge = 'Vas per bon camí!'
    tipus = 'exit'
  } else {
    missatge = 'Vas en negatiu, compte!'
    tipus = 'error'
  }

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <Targeta titol="Comptador">
        <Comptador
          valor={comptador}
          missatge={missatge}
          tipus={tipus}
          pas={1}
          onCanvia={canvia}
          onReinicia={reinicia}
        />
      </Targeta>
    </main>
  )
}

export default App