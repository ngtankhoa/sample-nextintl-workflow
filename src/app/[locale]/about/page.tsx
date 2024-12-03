import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export default function AboutPage() {
  const t = useTranslations('AboutPage')
  return (
    <div>
      <Link href='/'>{t('mad_formal_mayfly_clip')}</Link>
      <div>{t('early_drab_gull_fetch')}</div>
    </div>
  )
}
