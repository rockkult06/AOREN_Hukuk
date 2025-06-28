"use client"

import { useState, useEffect } from "react"
import { Menu, Search, User, Lock, Users, Scale, Info, Building, Newspaper, Computer, Heart, Briefcase, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import Image from "next/image"
import { useRouter, usePathname } from 'next/navigation'
import { LanguageSwitcher } from './LanguageSwitcher'
import { getTranslation } from '@/lib/i18n'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const t = getTranslation('tr')

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false)
    
    if (href === '/employees') {
      // Ana sayfadaki ekibimiz bölümüne scroll yap
      const teamSection = document.getElementById('team')
      if (teamSection) {
        teamSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (href === '/uzmanlik-alanlari') {
      // Ana sayfadaki uzmanlık alanları bölümüne scroll yap
      const expertiseSection = document.getElementById('expertise')
      if (expertiseSection) {
        expertiseSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (href === '/hakkimizda') {
      // Ana sayfadaki hakkımızda bölümüne scroll yap
      const aboutSection = document.getElementById('about')
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (href === '/ofislerimiz') {
      // Ana sayfadaki ofislerimiz bölümüne scroll yap
      const officesSection = document.getElementById('offices')
      if (officesSection) {
        officesSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (href === '/sosyal-sorumluluk') {
      // Ana sayfadaki kurumsal sosyal sorumluluk bölümüne scroll yap
      const socialSection = document.getElementById('social-responsibility')
      if (socialSection) {
        socialSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (href === '/kariyer') {
      // Ana sayfadaki kariyer bölümüne scroll yap
      const careerSection = document.getElementById('career')
      if (careerSection) {
        careerSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (href === '/dijital-hizmetler') {
      // Ana sayfadaki dijital hizmetler bölümüne scroll yap
      const digitalSection = document.getElementById('digital-services')
      if (digitalSection) {
        digitalSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Diğer sayfalar için normal navigasyon
      window.location.href = href
    }
  }

  const menuItems = [
    { href: '/team', label: t.header.menuItems.team },
    { href: '/expertise', label: t.header.menuItems.expertise },
    { href: '/about', label: t.header.menuItems.about },
    { href: '/offices', label: t.header.menuItems.offices },
    { href: '/news', label: t.header.menuItems.news },
    { href: '/digital-services', label: t.header.menuItems.digitalServices },
    { href: '/social-responsibility', label: t.header.menuItems.socialResponsibility },
    { href: '/career', label: t.header.menuItems.career },
    { href: '/contact', label: t.header.menuItems.contact },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/aoren-logo.png"
              alt="AOREN Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder={t.header.search}
                className="pl-10 w-64 bg-gray-50"
              />
            </div>

            <nav className="flex items-center space-x-6">
              <Button variant="ghost" asChild>
                <Link href="/corporate">
                  {t.header.corporate}
                </Link>
              </Button>
              <LanguageSwitcher />
            </nav>
          </div>

          <div className="lg:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">{t.header.menu}</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <nav className="flex flex-col space-y-4 mt-6">
                  <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      type="search"
                      placeholder={t.header.search}
                      className="pl-10 w-full bg-gray-50"
                    />
                  </div>
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-4">
                    <LanguageSwitcher />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
