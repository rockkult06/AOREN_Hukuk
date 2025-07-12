"use client"

import { useState, useEffect } from "react"
import { Menu, Search, User, Lock, Users, Scale, Info, Building, Newspaper, Computer, Heart, Briefcase, Mail, Globe, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { useRouter } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const router = useRouter()

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
      const teamSection = document.getElementById('team')
      if (teamSection) {
        teamSection.scrollIntoView({ behavior: 'smooth' })
      } else {
        router.push('/')
        setTimeout(() => {
          const el = document.getElementById('team')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 500)
      }
    } else if (href === '/uzmanlik-alanlari') {
      const expertiseSection = document.getElementById('expertise')
      if (expertiseSection) {
        expertiseSection.scrollIntoView({ behavior: 'smooth' })
      } else {
        router.push('/')
        setTimeout(() => {
          const el = document.getElementById('expertise')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 500)
      }
    } else if (href === '/hakkimizda') {
      const aboutSection = document.getElementById('about')
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' })
      } else {
        router.push('/')
        setTimeout(() => {
          const el = document.getElementById('about')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 500)
      }
    } else if (href === '/ofislerimiz') {
      const officesSection = document.getElementById('offices')
      if (officesSection) {
        officesSection.scrollIntoView({ behavior: 'smooth' })
      } else {
        router.push('/')
        setTimeout(() => {
          const el = document.getElementById('offices')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 500)
      }
    } else if (href === '/sosyal-sorumluluk') {
      const socialSection = document.getElementById('responsibility')
      if (socialSection) {
        socialSection.scrollIntoView({ behavior: 'smooth' })
      } else {
        router.push('/')
        setTimeout(() => {
          const el = document.getElementById('responsibility')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 500)
      }
    } else if (href === '/kariyer') {
      const careerSection = document.getElementById('careers')
      if (careerSection) {
        careerSection.scrollIntoView({ behavior: 'smooth' })
      } else {
        router.push('/')
        setTimeout(() => {
          const el = document.getElementById('careers')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 500)
      }
    } else if (href === '/dijital-hizmetler') {
      const digitalSection = document.getElementById('digital-services')
      if (digitalSection) {
        digitalSection.scrollIntoView({ behavior: 'smooth' })
      } else {
        router.push('/')
        setTimeout(() => {
          const el = document.getElementById('digital-services')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 500)
      }
    } else if (href === '/iletisim') {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      } else {
        router.push('/')
        setTimeout(() => {
          const el = document.getElementById('contact')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 500)
      }
    } else if (href === '/impressum') {
      router.push('/impressum')
    } else {
      router.push(href)
    }
  }

  const menuItems = [
    { name: t('header.team'), href: "/employees", icon: Users },
    { name: t('header.expertise'), href: "/uzmanlik-alanlari", icon: Scale },
    { name: t('header.about'), href: "/hakkimizda", icon: Info },
    { name: t('header.offices'), href: "/ofislerimiz", icon: Building },
    { name: t('header.digital'), href: "/dijital-hizmetler", icon: Computer },
    { name: t('header.responsibility'), href: "/sosyal-sorumluluk", icon: Heart },
    { name: t('header.careers'), href: "/kariyer", icon: Briefcase },
    { name: t('header.contact'), href: "/iletisim", icon: Mail },
    ...(language === 'de' ? [{ name: 'Impressum', href: "/impressum", icon: FileText }] : []),
  ]

  return (
    <header
      className={`fixed top-0 w-full transition-all duration-300 z-[9999] ${
        isScrolled
          ? 'bg-white/95 shadow-md border-b border-gray-200'
          : 'bg-white/90 shadow-md border-b border-white/20'
      }`}
      style={{ position: 'sticky' }}
    >
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 md:h-16 gap-2 md:gap-0">
          {/* Sol: Logo */}
          <Link href="/" className="flex items-center min-w-[90px]">
            <div className="relative h-8 w-auto md:h-12">
              <Image
                src={isScrolled ? "/aoren-logo1.png" : "/aoren-logo.png"}
                alt="AOREN Logo"
                width={90}
                height={32}
                className="h-8 w-auto object-contain transition-all duration-300 md:h-12"
                priority
              />
            </div>
          </Link>
          {/* Orta: Menü Butonu */}
          <div className="flex-1 flex items-center justify-start md:justify-center">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className={`px-3 py-2 text-base font-medium z-[110] relative ${
                    isScrolled ? 'text-gray-700 hover:text-[#DEA582]' : 'text-gray-700 hover:text-[#D29F91]'
                  } md:mt-0 mt-0`}
                  style={{ minWidth: 44 }}
                >
                  <Menu className="h-6 w-6 mr-1" />
                  <span className="hidden xs:inline">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="left"
                className="border-none bg-transparent p-0 shadow-none fixed top-0 left-0 transition-all duration-500 ease-in-out opacity-0 data-[state=open]:opacity-100 data-[state=closed]:opacity-0 z-[120] h-screen w-full"
                style={{ zIndex: 120 }}
              >
                {/* Buzlu Cam Menu Kartı */}
                <div className="m-6 bg-white/15 backdrop-blur-[10px] rounded-[20px] border border-white/20 shadow-2xl p-6 w-80 transition-all duration-300 mt-20">
                  {/* Menu Header */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">Menu</h2>
                    <div className="w-12 h-0.5 bg-blue-500"></div>
                  </div>

                  {/* Menu Items */}
                  <div className="space-y-1">
                    {menuItems.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <button
                          key={item.name}
                          onClick={() => handleMenuClick(item.href)}
                          className="group relative block py-3 px-4 rounded-[16px] transition-all duration-300 ease-in-out hover:bg-white/30 hover:backdrop-blur-[12px] hover:rounded-[24px] focus:outline-none focus:ring-0 w-full text-left"
                          style={{ 
                            animationDelay: `${index * 50}ms`,
                            animation: 'slideInLeft 0.6s ease-out forwards',
                            textDecoration: 'none',
                            borderBottom: 'none',
                            border: 'none',
                            background: 'transparent'
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <IconComponent className="w-5 h-5 text-white group-hover:text-white transition-colors duration-200" />
                            <span className="text-white text-base font-medium group-hover:text-white group-hover:text-lg transition-all duration-200" style={{textDecoration: 'none', borderBottom: 'none'}}>
                              {item.name}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Animation Keyframes */}
                <style jsx>{`
                  @keyframes slideInLeft {
                    from {
                      opacity: 0;
                      transform: translateX(-20px);
                    }
                    to {
                      opacity: 1;
                      transform: translateX(0);
                    }
                  }
                `}</style>
              </SheetContent>
            </Sheet>
          </div>
          {/* Sağ: Kurumsal ve Dil Seçici */}
          <div className="flex items-center space-x-1 md:space-x-4">
            <Button variant="ghost" className={`${isScrolled ? 'text-gray-700' : 'text-gray-700'} px-2 py-2 text-base`} style={{ minWidth: 44 }}>
              <Lock className="h-5 w-5 mr-1" />
              <span className="hidden xs:inline font-medium">Kurumsal</span>
            </Button>
            <div className="flex items-center relative">
              <Globe className={`h-4 w-4 mr-1 ${isScrolled ? 'text-gray-700' : 'text-gray-700'}`} />
              <Select value={language} onValueChange={(value: 'tr' | 'en' | 'de') => setLanguage(value)}>
                <SelectTrigger className={`w-12 border-none bg-transparent ${isScrolled ? 'text-gray-700' : 'text-gray-700'} text-base`}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent
                  position="popper"
                  side="bottom"
                  align="end"
                  className="min-w-[90px]"
                >
                  <SelectItem value="tr">TR</SelectItem>
                  <SelectItem value="en">EN</SelectItem>
                  <SelectItem value="de">DE</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
