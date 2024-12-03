import { Link } from '@/i18n/routing'
import { getTranslations } from 'next-intl/server'
import { setRequestLocale } from 'next-intl/server'

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  // Enable static rendering
  setRequestLocale(locale)
  const t = await getTranslations('HomePage')

  return (
    <div>
      <Link href='/about'>
        <h3>{t('about')}</h3>
      </Link>
      {/* <NavBar /> */}
    </div>
  )
}
