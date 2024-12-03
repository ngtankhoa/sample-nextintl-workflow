import { Link } from '@/i18n/routing'
import { getTranslations } from 'next-intl/server'
import { setRequestLocale } from 'next-intl/server'
import NavBar from './_components/nav-bar/nav-bar'

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  // Enable static rendering
  setRequestLocale(locale)
  const t = await getTranslations('HomePage')

  return (
    <div>
      <h1>{t('about')}</h1>
      <Link href='/about'>{t('about')}</Link>
      <NavBar />
    </div>
  )
}
