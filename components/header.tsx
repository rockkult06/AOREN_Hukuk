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
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isSearchOpen, setIsSearchOpen] = useState(false)
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

  // Arama fonksiyonu
  const handleSearch = (query: string) => {
    setSearchQuery(query)
    
    if (query.trim().length < 2) {
      setSearchResults([])
      setIsSearchOpen(false)
      return
    }

    const results = menuItems.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase())
    )

    setSearchResults(results)
    setIsSearchOpen(results.length > 0)
  }

  const handleSearchResultClick = (href: string) => {
    setIsSearchOpen(false)
    setSearchQuery("")
    handleMenuClick(href)
  }

  return (
    <header className={`fixed top-0 w-full transition-all duration-300 z-[100] ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md border-b border-gray-200' 
        : 'bg-transparent border-b border-white/20'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left - Logo */}
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <div className="relative h-12 w-auto">
              <Image
                src={isScrolled ? "/aoren-logo1.png" : "/aoren-logo.png"}
                alt="AOREN Logo"
                width={150}
                height={48}
                className="h-12 w-auto object-contain transition-all duration-300"
                priority
              />
            </div>
          </Link>

          {/* Center - Menu Button (Büyük) */}
          <div className="flex-1 flex justify-center">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`px-8 py-3 text-lg font-medium z-[110] relative ${isScrolled ? 'text-gray-700 hover:text-[#DEA582]' : 'text-white hover:text-[#D29F91]'}`}
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

                  {/* Mobil Arama */}
                  <div className="mb-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
                      <Input
                        type="search"
                        placeholder={t('header.search')}
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                      />
                    </div>
                    
                    {/* Mobil Arama Sonuçları */}
                    {isSearchOpen && searchResults.length > 0 && (
                      <div className="mt-2 bg-white/95 backdrop-blur-md rounded-lg border border-white/20 shadow-lg max-h-40 overflow-y-auto">
                        {searchResults.map((result, index) => {
                          const IconComponent = result.icon;
                          return (
                            <button
                              key={index}
                              onClick={() => handleSearchResultClick(result.href)}
                              className="w-full px-4 py-2 text-left hover:bg-white/20 flex items-center gap-3 transition-colors duration-200"
                            >
                              <IconComponent className="w-4 h-4 text-white" />
                              <span className="text-white font-medium">{result.name}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
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
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden lg:flex items-center relative">
              <Search className={`absolute left-3 h-4 w-4 ${isScrolled ? 'text-gray-400' : 'text-white/60'}`} />
              <Input
                type="search"
                placeholder={t('header.search')}
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => searchQuery.trim().length >= 2 && setIsSearchOpen(true)}
                onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
                className={`pl-10 w-64 ${
                  isScrolled 
                    ? 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-500' 
                    : 'bg-white/10 border-white/20 text-white placeholder:text-white/70'
                }`}
              />
              
              {/* Arama Sonuçları */}
              {isSearchOpen && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-lg border border-gray-200 shadow-lg z-50 max-h-60 overflow-y-auto">
                  {searchResults.map((result, index) => {
                    const IconComponent = result.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => handleSearchResultClick(result.href)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 transition-colors duration-200"
                      >
                        <IconComponent className="w-4 h-4 text-gray-600" />
                        <span className="text-gray-800 font-medium">{result.name}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* User Login - Kurumsal */}
            <Button variant="ghost" className={`${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              <Lock className="h-5 w-5 mr-2" />
              <span className="font-medium">Kurumsal</span>
            </Button>

            {/* Language Selector */}
            <div className="flex items-center relative">
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
