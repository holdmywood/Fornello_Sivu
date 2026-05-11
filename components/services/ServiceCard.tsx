import { CheckCircle2, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/lib/navigation'

interface ServiceCardProps {
  title: string
  body: string
  features: string[]
  href: '/services/roundwood' | '/services/software' | '/services/consulting'
}

export function ServiceCard({ title, body, features, href }: ServiceCardProps) {
  const tc = useTranslations('common')

  return (
    <div className="bg-white rounded-xl border-l-4 border-forest-600 shadow-sm p-8">
      <h3 className="font-bold text-bark-900 text-2xl mb-4">{title}</h3>
      <p className="text-bark-600 leading-relaxed mb-8">{body}</p>
      <ul className="space-y-3 mb-8">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-bark-700">
            <CheckCircle2 className="h-5 w-5 text-forest-600 shrink-0 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-600 hover:text-forest-700 transition-colors group"
      >
        {tc('learn_more')}
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  )
}
