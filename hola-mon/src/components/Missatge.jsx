const ESTILS = {
  info: 'text-slate-500',
  exit: 'text-emerald-600 font-medium',
  error: 'text-rose-600 font-medium',
}

function Missatge({ text, tipus = 'info' }) {
  const estil = ESTILS[tipus] ?? ESTILS.info

  return <p className={`text-sm ${estil}`}>{text}</p>
}

export default Missatge