/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing, Link } from '@/i18n/routing'
import '@/app/globals.css'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className='min-h-40'>{children}</div>
          <div className='flex gap-3'>
            <Link href='/' locale='en'>
              English
            </Link>
            <Link href='/' locale='de'>
              German
            </Link>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
