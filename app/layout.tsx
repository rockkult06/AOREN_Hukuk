import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import StyledComponentsRegistry from "@/lib/styled-components-registry"
import GlobalStyle from "@/styles/globals"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Aoren - Türkiye'nin Önde Gelen Hukuk Bürosu",
  description: "Aoren Hukuk Bürosu - Hukuki danışmanlık, arabuluculuk ve yasal destek hizmetleri",
    generator: 'v0.dev'
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
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}


import './globals.css'