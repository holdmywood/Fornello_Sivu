'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { CheckCircle2, AlertCircle } from 'lucide-react'

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
})

type FormData = z.infer<typeof schema>

export function ContactForm() {
  const t = useTranslations('contact')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormData) {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-lg border border-moss-200 bg-white px-4 py-3 text-bark-900 text-sm placeholder:text-bark-600/60 focus:outline-none focus:ring-2 focus:ring-forest-600/40 focus:border-forest-600 transition-colors'
  const errorClass = 'mt-1 text-xs text-red-600'

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-bark-900 mb-1.5">
          {t('form.name')} <span className="text-red-500">*</span>
        </label>
        <input
          {...register('name')}
          placeholder={t('form.name_placeholder')}
          className={inputClass}
        />
        {errors.name && <p className={errorClass}>{t('common.required_field')}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-bark-900 mb-1.5">
          {t('form.email')} <span className="text-red-500">*</span>
        </label>
        <input
          {...register('email')}
          type="email"
          placeholder={t('form.email_placeholder')}
          className={inputClass}
        />
        {errors.email && <p className={errorClass}>{t('common.required_field')}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-bark-900 mb-1.5">
          {t('form.company')}
        </label>
        <input
          {...register('company')}
          placeholder={t('form.company_placeholder')}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-bark-900 mb-1.5">
          {t('form.message')} <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register('message')}
          rows={5}
          placeholder={t('form.message_placeholder')}
          className={inputClass}
        />
        {errors.message && <p className={errorClass}>{t('common.required_field')}</p>}
      </div>

      {status === 'success' && (
        <div className="flex items-center gap-2 rounded-lg bg-forest-600/10 px-4 py-3 text-forest-700 text-sm">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          {t('form.success')}
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-red-700 text-sm">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {t('form.error')}
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-forest-600 hover:bg-forest-700 text-white font-semibold py-3"
      >
        {isSubmitting ? t('common.loading') : t('form.submit')}
      </Button>
    </form>
  )
}
