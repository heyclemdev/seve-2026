import './Ambiance.css'

const panels = [
  { bg: 'bg-1', label: 'La salle' },
  { bg: 'bg-2', label: 'Les produits' },
  { bg: 'bg-3', label: 'La cave' },
  { bg: 'bg-4', label: 'La terrasse' },
]

export default function Ambiance() {
  return (
    <div className="ambiance">
      {panels.map(p => (
        <div className="ambiance-panel" key={p.label}>
          <div className={`bg ${p.bg}`}></div>
          <span className="ambiance-label">{p.label}</span>
        </div>
      ))}
    </div>
  )
}
