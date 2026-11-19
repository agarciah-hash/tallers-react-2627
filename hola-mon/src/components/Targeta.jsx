function Targeta({ titol, children }) {
  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg max-w-xl mx-auto">
      <h2 className="text-xl font-bold text-slate-800 mb-4">{titol}</h2>
      {children}
    </section>
  )
}

export default Targeta