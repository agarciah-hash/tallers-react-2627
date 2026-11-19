import Boto from './Boto.jsx'
import Missatge from './Missatge.jsx'

const accions = [
  { id: 'incrementa', text: 'Incrementa', variant: 'primari' },
  { id: 'decrementa', text: 'Decrementa', variant: 'secundari' },
  { id: 'reinicia', text: 'Reinicia', variant: 'perill' },
]

function Comptador({ valor, missatge, tipus, pas = 1, onCanvia, onReinicia }) {
  function executaAccio(id) {
    if (id === 'incrementa') onCanvia(pas)
    else if (id === 'decrementa') onCanvia(-pas)
    else if (id === 'reinicia') onReinicia()
  }

  return (
    <div className="space-y-6">
      <div className="bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 space-y-1">
        <p className="text-lg text-slate-700">
          Has fet clic <span className="font-bold text-indigo-600">{valor}</span> vegades.
        </p>
        <Missatge text={missatge} tipus={tipus} />
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {accions.map(({ id, text, variant }) => (
          <Boto
            key={id}
            variant={variant}
            onClick={() => executaAccio(id)}
            disabled={id === 'reinicia' && valor === 0}
            className="w-full sm:w-auto"
          >
            {text}
          </Boto>
        ))}
      </div>
    </div>
  )
}

export default Comptador