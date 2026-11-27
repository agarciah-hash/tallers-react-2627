import { useContext } from 'react'
import Tasca from './Tasca.jsx'
import { TasquesContext } from '../context/TasquesContext.js'

function LlistaTasques({ filtre }) {
  const { tasques } = useContext(TasquesContext)

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

  if (tasquesFiltrades.length === 0) {
    return <p className="text-sm text-slate-500">{missatgeBuit}</p>
  }

  return (
    <ul className="space-y-2">
      {tasquesFiltrades.map((tasca) => (
        <Tasca key={tasca.id} tasca={tasca} />
      ))}
    </ul>
  )
}

export default LlistaTasques