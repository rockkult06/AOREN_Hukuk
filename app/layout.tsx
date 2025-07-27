import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import StyledComponentsRegistry from "@/lib/styled-components-registry"
import GlobalStyle from "@/styles/globals"
import { LanguageProvider } from "@/contexts/LanguageContext"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Aoren - Yüksek Etki Yaratan Hukuk Bürosu",
  description: "Aoren Hukuk Bürosu - Hukuki danışmanlık, arabuluculuk ve yasal destek hizmetleri",
  generator: 'v0.dev',
  other: {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${plusJakartaSans.variable}`}>
      <body className={`${plusJakartaSans.className} antialiased`}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

import './globals.css'