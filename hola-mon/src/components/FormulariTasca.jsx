import { useState } from 'react'
import Boto from './Boto.jsx'
import Missatge from './Missatge.jsx'

function FormulariTasca({ onAfegir }) {
  const [text, setText] = useState('')
  const [error, setError] = useState('')

  function canviaText(e) {
    setText(e.target.value)
    if (error) setError('')
  }

  function envia(e) {
    e.preventDefault()

    const net = text.trim()

    if (!net) {
      setError("Escriu una tasca abans d'afegir-la.")
      return
    }

    onAfegir(net)
    setText('')
    setError('')
  }

  return (
    <form onSubmit={envia} noValidate className="space-y-3">
      <div>
        <label htmlFor="tasca" className="block text-sm font-medium text-slate-700 mb-1">
          Nova tasca
        </label>
        <input
          id="tasca"
          type="text"
          value={text}
          onChange={canviaText}
          placeholder="Què vols fer?"
          autoComplete="off"
          maxLength={80}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? 'error-tasca' : undefined}
          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <p className="text-xs text-slate-400 mt-1">{text.length}/80</p>
      </div>

      {error && (
        <div id="error-tasca">
          <Missatge text={error} tipus="error" />
        </div>
      )}

      <Boto type="submit" className="w-full sm:w-auto">
        Afegeix
      </Boto>
    </form>
  )
}

export default FormulariTasca