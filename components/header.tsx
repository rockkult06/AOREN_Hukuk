"use client"

import { useState, useEffect } from "react"
import { Menu, Search, User, Lock, Users, Scale, Info, Building, Newspaper, Computer, Heart, Briefcase, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full transition-all duration-300 z-50 ${
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
                  className={`px-8 py-3 text-lg font-medium ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}
                >
                  <Menu className="h-6 w-6 mr-3" />
                  Menu
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="left"
                className="border-none bg-transparent p-0 shadow-none mt-16 absolute transition-all duration-500 ease-in-out opacity-0 data-[state=open]:opacity-100 data-[state=closed]:opacity-0"
              >
                {/* Buzlu Cam Menu Kartı */}
                <div className="m-6 bg-white/15 backdrop-blur-[10px] rounded-[20px] border border-white/20 shadow-2xl p-6 w-80 transition-all duration-300">
                  {/* Menu Header */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">Menu</h2>
                    <div className="w-12 h-0.5 bg-blue-500"></div>
                  </div>

                  {/* Menu Items */}
                  <div className="space-y-1">
                    {[
                      { name: "Ekibimiz", href: "/employees", icon: Users },
                      { name: "Uzmanlık Alanlarımız", href: "/uzmanlik-alanlari", icon: Scale },
                      { name: "Hakkımızda", href: "/hakkimizda", icon: Info },
                      { name: "Ofislerimiz", href: "/ofislerimiz", icon: Building },
                      { name: "Haberler", href: "/haberler", icon: Newspaper },
                      { name: "AOREN Dijital Hizmetleri", href: "/dijital-hizmetler", icon: Computer },
                      { name: "Kurumsal Sosyal Sorumluluk", href: "/sosyal-sorumluluk", icon: Heart },
                      { name: "AOREN'de Kariyer", href: "/kariyer", icon: Briefcase },
                      { name: "İletişim", href: "/iletisim", icon: Mail },
                    ].map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="group relative block py-3 px-4 rounded-[16px] transition-all duration-300 ease-in-out hover:bg-white/30 hover:backdrop-blur-[12px] hover:rounded-[24px] focus:outline-none focus:ring-0"
                          style={{ 
                            animationDelay: `${index * 50}ms`,
                            animation: 'slideInLeft 0.6s ease-out forwards',
                            textDecoration: 'none',
                            borderBottom: 'none'
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <IconComponent className="w-5 h-5 text-white group-hover:text-white transition-colors duration-200" />
                            <span className="text-white text-base font-medium group-hover:text-white group-hover:text-lg transition-all duration-200" style={{textDecoration: 'none', borderBottom: 'none'}}>
                              {item.name}
                            </span>
                          </div>
                        </Link>
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
                placeholder="Search for lawyers, articles, practice areas ..."
                className={`pl-10 w-64 ${
                  isScrolled 
                    ? 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-500' 
                    : 'bg-white/10 border-white/20 text-white placeholder:text-white/70'
                }`}
              />
            </div>

            {/* User Login - Kurumsal */}
            <Button variant="ghost" className={`${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              <Lock className="h-5 w-5 mr-2" />
              <span className="font-medium">Kurumsal</span>
            </Button>

            {/* Language Selector */}
            <Select defaultValue="tr">
              <SelectTrigger className={`w-20 border-none bg-transparent ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tr">TR</SelectItem>
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="de">DE</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </header>
  )
}
