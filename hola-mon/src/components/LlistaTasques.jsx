import Tasca from './Tasca.jsx'

function LlistaTasques({ tasques, missatgeBuit, onToggle, onElimina }) {
  if (tasques.length === 0) {
    return <p className="text-sm text-slate-500">{missatgeBuit}</p>
  }

  return (
    <ul className="space-y-2">
      {tasques.map((tasca) => (
        <Tasca
          key={tasca.id}
          tasca={tasca}
          onToggle={onToggle}
          onElimina={onElimina}
        />
      ))}
    </ul>
  )
}

export default LlistaTasques