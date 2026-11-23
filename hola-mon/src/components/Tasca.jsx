import Boto from './Boto.jsx'

function Tasca({ tasca, onToggle, onElimina }) {
  const idCheckbox = `tasca-${tasca.id}`

  return (
    <li className="flex items-center gap-3 border border-slate-200 rounded-lg px-3 py-2 bg-white">
      <input
        id={idCheckbox}
        type="checkbox"
        checked={tasca.feta}
        onChange={() => onToggle(tasca.id)}
        className="h-4 w-4 accent-indigo-600 cursor-pointer"
      />
      <label
        htmlFor={idCheckbox}
        className={`flex-1 cursor-pointer ${
          tasca.feta ? 'line-through text-slate-400' : 'text-slate-800'
        }`}
      >
        {tasca.text}
      </label>
      <Boto
        variant="perill"
        onClick={() => onElimina(tasca.id)}
        aria-label={`Elimina la tasca: ${tasca.text}`}
        className="text-sm py-1 px-3"
      >
        Elimina
      </Boto>
    </li>
  )
}

export default Tasca