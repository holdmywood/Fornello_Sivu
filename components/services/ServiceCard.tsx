import { CheckCircle2 } from 'lucide-react'

interface ServiceCardProps {
  title: string
  body: string
  features: string[]
}

export function ServiceCard({ title, body, features }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl border-l-4 border-forest-600 shadow-sm p-8">
      <h3 className="font-bold text-bark-900 text-2xl mb-4">{title}</h3>
      <p className="text-bark-600 leading-relaxed mb-8">{body}</p>
      <ul className="space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-bark-700">
            <CheckCircle2 className="h-5 w-5 text-forest-600 shrink-0 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
