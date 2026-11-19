const ESTILS = {
  primari: 'bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:outline-indigo-600',
  secundari: 'bg-rose-600 text-white hover:bg-rose-700 focus-visible:outline-rose-600',
  perill: 'bg-slate-200 text-slate-800 hover:bg-slate-300 focus-visible:outline-slate-500',
}

function Boto({ variant = 'primari', className = '', children, ...props }) {
  const estilVariant = ESTILS[variant] ?? ESTILS.primari

  return (
    <button
      type="button"
      className={`font-medium py-2.5 px-4 rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${estilVariant} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Boto