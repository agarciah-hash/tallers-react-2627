import Boto from './Boto.jsx'

const FILTRES = [
  { id: 'totes', etiqueta: 'Totes' },
  { id: 'pendents', etiqueta: 'Pendents' },
  { id: 'fetes', etiqueta: 'Fetes' },
]

function FiltreTasques({ filtre, onCanviaFiltre }) {
  return (
    <div className="flex flex-wrap gap-2">
      {FILTRES.map(({ id, etiqueta }) => (
        <Boto
          key={id}
          variant={filtre === id ? 'primari' : 'perill'}
          onClick={() => onCanviaFiltre(id)}
          aria-pressed={filtre === id}
          className="text-sm py-1 px-3"
        >
          {etiqueta}
        </Boto>
      ))}
    </div>
  )
}

export default FiltreTasques