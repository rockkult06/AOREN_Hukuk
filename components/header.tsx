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

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false);

    // Eğer Impressum sayfasındayken başka bir bölüme tıklanırsa ana sayfaya yönlendir
    if (typeof window !== 'undefined' && window.location.pathname === '/impressum' && href.startsWith('/')) {
      if (href === '/employees') window.location.href = '/#team';
      else if (href === '/uzmanlik-alanlari') window.location.href = '/#expertise';
      else if (href === '/hakkimizda') window.location.href = '/#about';
      else if (href === '/ofislerimiz') window.location.href = '/#offices';
      else if (href === '/dijital-hizmetler') window.location.href = '/#digital-services';
      else if (href === '/sosyal-sorumluluk') window.location.href = '/#responsibility';
      else if (href === '/kariyer') window.location.href = '/#careers';
      else if (href === '/iletisim') window.location.href = '/#contact';
      else window.location.href = '/';
      return;
    }

    // Eğer ana sayfadaysa menüden bir bölüme tıklanınca Sheet kapandıktan sonra scroll yap
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      let sectionId = '';
      if (href === '/employees') sectionId = 'team';
      else if (href === '/uzmanlik-alanlari') sectionId = 'expertise';
      else if (href === '/hakkimizda') sectionId = 'about';
      else if (href === '/ofislerimiz') sectionId = 'offices';
      else if (href === '/dijital-hizmetler') sectionId = 'digital-services';
      else if (href === '/sosyal-sorumluluk') sectionId = 'responsibility';
      else if (href === '/kariyer') sectionId = 'careers';
      else if (href === '/iletisim') sectionId = 'contact';
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 350); // Sheet kapanma animasyonu için gecikme
        return;
      }
    }

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
      const socialSection = document.getElementById('responsibility')
      if (socialSection) {
        socialSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (href === '/kariyer') {
      // Ana sayfadaki kariyer bölümüne scroll yap
      const careerSection = document.getElementById('careers')
      if (careerSection) {
        careerSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (href === '/dijital-hizmetler') {
      // Ana sayfadaki dijital hizmetler bölümüne scroll yap
      const digitalSection = document.getElementById('digital-services')
      if (digitalSection) {
        digitalSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (href === '/iletisim') {
      // Ana sayfadaki iletişim bölümüne scroll yap
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (href === '/impressum') {
      // Impressum sayfasına git
      window.location.href = href
    } else {
      // Diğer sayfalar için normal navigasyon
      window.location.href = href
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
    <header className={`fixed top-0 w-full transition-all duration-300 z-[9999] ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md border-b border-gray-200' 
        : 'bg-transparent border-b border-white/20'
    }`} style={{position:'sticky'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16 flex-col md:flex-row md:gap-0 gap-2 pt-2 md:pt-0">
          {/* Left - Logo */}
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity md:mb-0 mb-2">
            <div className="relative h-10 w-auto md:h-12">
              <Image
                src={isScrolled ? "/aoren-logo1.png" : "/aoren-logo.png"}
                alt="AOREN Logo"
                width={120}
                height={40}
                className="h-10 w-auto object-contain transition-all duration-300 md:h-12"
                priority
              />
            </div>
          </Link>

          {/* Center - Menu Button (Büyük) */}
          <div className="flex-1 flex justify-center md:justify-center w-full md:w-auto">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`px-8 py-3 text-lg font-medium z-[110] relative ${isScrolled ? 'text-gray-700 hover:text-[#DEA582]' : 'text-white hover:text-[#D29F91]'} md:mt-0 mt-1`}
                >
                  <Menu className="h-6 w-6 mr-3" />
                  Menu
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

          {/* Right Side - Search, User, Language */}
          <div className="flex items-center space-x-2 md:space-x-4 w-full md:w-auto justify-end md:justify-end mt-2 md:mt-0">
            {/* Search Bar */}
            <div className="hidden lg:flex items-center relative">
              <Search className={`absolute left-3 h-4 w-4 ${isScrolled ? 'text-gray-400' : 'text-white/60'}`} />
              <Input
                type="search"
                placeholder={t('header.search')}
                className={`pl-10 w-64 ${
                  isScrolled 
                    ? 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-500' 
                    : 'bg-white/10 border-white/20 text-white placeholder:text-white/70'
                }`}
              />
            </div>

            {/* User Login - Kurumsal */}
            <Button variant="ghost" className={`${isScrolled ? 'text-gray-700' : 'text-white'} md:mt-0 mt-1`}>
              <Lock className="h-5 w-5 mr-2" />
              <span className="font-medium">Kurumsal</span>
            </Button>

            {/* Language Selector */}
            <div className="flex items-center relative md:mt-0 mt-1">
              <Globe className={`h-4 w-4 mr-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
              <Select value={language} onValueChange={(value: 'tr' | 'en' | 'de') => setLanguage(value)}>
                <SelectTrigger className={`w-16 border-none bg-transparent ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent 
                  position="popper" 
                  side="bottom" 
                  align="end"
                  className="min-w-[120px]"
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
