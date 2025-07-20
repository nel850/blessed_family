import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Blessed adult family home',
  description: 'blessed adult family home',
  generator: 'Blessed adult family home',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
