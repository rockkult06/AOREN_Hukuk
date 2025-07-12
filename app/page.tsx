"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head"
import Header from "@/components/header"
import HeroSection from "@/components/HeroSection"
import Footer from "@/components/Footer"
import BackgroundVideo from "@/components/BackgroundVideo"
import styled from "styled-components"
import { Linkedin, Mail, X, Building, Globe, Handshake, Network, Users, Laptop, MapPin, MapPinned, Phone, GraduationCap, Scale, Leaf, Target, Briefcase, Upload, Send, LayoutDashboard, CheckCircle, FileSignature, MessageSquare, GitBranch, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

const TeamSection = styled.section`
  padding: 80px 20px;
  min-height: 100vh;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/team.jpg');
    background-size: cover;
    background-position: center;
    filter: brightness(0.3);
    z-index: 0;
  }
`

const TeamTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 24px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const TeamDescription = styled.p`
  font-size: 1.25rem;
  color: #E0E0E0;
  max-width: 800px;
  margin: 0 auto 60px auto;
  line-height: 1.6;
  font-weight: 500;
  text-align: center;
`

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

const TeamCard = styled.div`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 40px 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
    background: rgba(255, 255, 255, 0.12);
  }
`

const ProfileImage = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 32px;
  margin: 0 auto 24px auto;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`

const MemberName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 8px;
  text-align: center;
`

const MemberTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #DEA582;
  margin-bottom: 16px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const MemberDescription = styled.p`
  font-size: 0.95rem;
  color: #E0E0E0;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 24px;
`

const SocialButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`

const SocialButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
`

// Modal Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.45);
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalContent = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  color: #222;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 48px rgba(0,0,0,0.18);
  max-width: 800px;
  width: 95vw;
  display: flex;
  flex-direction: row;
  gap: 36px;
  padding: 48px 36px;
  position: relative;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 24px;
    padding: 32px 20px;
  }
`

const ModalPhoto = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 32px;
  overflow: hidden;
  flex-shrink: 0;
  background: #eee;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ModalInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ModalClose = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  background: none;
  border: none;
  color: #222;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
  &:hover {
    color: #888;
  }
`

const ModalTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 8px;
`

const ModalSubtitle = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1976D2;
  margin-bottom: 18px;
`

const ModalText = styled.p`
  font-size: 1rem;
  margin-bottom: 18px;
  color: #222;
`

const ModalList = styled.ul`
  margin-bottom: 12px;
  padding-left: 18px;
  color: #222;
  li {
    margin-bottom: 6px;
    font-size: 1rem;
  }
`

const ModalLabel = styled.div`
  font-weight: 600;
  margin-top: 12px;
  margin-bottom: 2px;
  color: #1976D2;
`

// Çalışan verileri - çeviri anahtarları ile
const getEmployeesData = (t: any) => [
  {
    name: "Av. Abdullah ÖREN",
    title: t('team.members.abdullah.title'),
    description: t('team.members.abdullah.description'),
    image: "/1.png",
    details: {
      about: t('team.members.abdullah.about'),
      expertise: [
        t('team.members.abdullah.expertise.1'),
        t('team.members.abdullah.expertise.2'),
        t('team.members.abdullah.expertise.3'),
        t('team.members.abdullah.expertise.4')
      ],
      languages: t('team.members.abdullah.languages')
    }
  },
  {
    name: "Av. Ekin Tuncel",
    title: t('team.members.ekin.title'),
    description: t('team.members.ekin.description'),
    image: "/2.png",
    details: {
      about: t('team.members.ekin.about'),
      expertise: [
        t('team.members.ekin.expertise.1'),
        t('team.members.ekin.expertise.2'),
        t('team.members.ekin.expertise.3'),
        t('team.members.ekin.expertise.4')
      ],
      languages: t('team.members.ekin.languages')
    }
  },
  {
    name: "Av. Melis Bayraktar",
    title: t('team.members.melis.title'),
    description: t('team.members.melis.description'),
    image: "/4.png",
    details: {
      about: t('team.members.melis.about'),
      expertise: [
        t('team.members.melis.expertise.1'),
        t('team.members.melis.expertise.2'),
        t('team.members.melis.expertise.3'),
        t('team.members.melis.expertise.4')
      ],
      languages: t('team.members.melis.languages')
    }
  },
  {
    name: "Av. Kerem Yıldız",
    title: t('team.members.kerem.title'),
    description: t('team.members.kerem.description'),
    image: "/3.png",
    details: {
      about: t('team.members.kerem.about'),
      expertise: [
        t('team.members.kerem.expertise.1'),
        t('team.members.kerem.expertise.2'),
        t('team.members.kerem.expertise.3'),
        t('team.members.kerem.expertise.4')
      ],
      languages: t('team.members.kerem.languages')
    }
  },
]

// Uzmanlık alanları verileri - çeviri anahtarları ile
const getExpertiseData = (t: any) => [
  {
    title: t('expertise.areas.international.title'),
    subtitle: t('expertise.areas.international.subtitle'),
    description: t('expertise.areas.international.description'),
    services: [
      t('expertise.areas.international.services.1'),
      t('expertise.areas.international.services.2'),
      t('expertise.areas.international.services.3'),
      t('expertise.areas.international.services.4')
    ]
  },
  {
    title: t('expertise.areas.commercial2.title'),
    subtitle: t('expertise.areas.commercial2.subtitle'),
    description: t('expertise.areas.commercial2.description'),
    services: [
      t('expertise.areas.commercial2.services.1'),
      t('expertise.areas.commercial2.services.2'),
      t('expertise.areas.commercial2.services.3'),
      t('expertise.areas.commercial2.services.4')
    ]
  },
  {
    title: t('expertise.areas.realEstate.title'),
    subtitle: t('expertise.areas.realEstate.subtitle'),
    description: t('expertise.areas.realEstate.description'),
    services: [
      t('expertise.areas.realEstate.services.1'),
      t('expertise.areas.realEstate.services.2'),
      t('expertise.areas.realEstate.services.3'),
      t('expertise.areas.realEstate.services.4')
    ]
  },
  {
    title: t('expertise.areas.criminal2.title'),
    subtitle: t('expertise.areas.criminal2.subtitle'),
    description: t('expertise.areas.criminal2.description'),
    services: [
      t('expertise.areas.criminal2.services.1'),
      t('expertise.areas.criminal2.services.2'),
      t('expertise.areas.criminal2.services.3'),
      t('expertise.areas.criminal2.services.4')
    ]
  },
  {
    title: t('expertise.areas.health.title'),
    subtitle: t('expertise.areas.health.subtitle'),
    description: t('expertise.areas.health.description'),
    services: [
      t('expertise.areas.health.services.1'),
      t('expertise.areas.health.services.2'),
      t('expertise.areas.health.services.3'),
      t('expertise.areas.health.services.4')
    ]
  },
  {
    title: t('expertise.areas.documents.title'),
    subtitle: t('expertise.areas.documents.subtitle'),
    description: t('expertise.areas.documents.description'),
    services: [
      t('expertise.areas.documents.services.1'),
      t('expertise.areas.documents.services.2'),
      t('expertise.areas.documents.services.3'),
      t('expertise.areas.documents.services.4')
    ]
  }
]

export default function Home() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null)
  const [selectedExpertise, setSelectedExpertise] = useState<number | null>(null)
  const { t } = useLanguage()
  
  // Çeviri fonksiyonunu kullanarak verileri al
  const employeesData = getEmployeesData(t)
  const expertiseData = getExpertiseData(t)

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Head>
        <title>Aoren - Yüksek Etki Yaratan Hukuk Bürosu</title>
        <meta name="description" content="Aoren Hukuk Bürosu" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      <div className="relative">
        <BackgroundVideo />
        <Header />
        <HeroSection />
      </div>
      
      {/* Ekibimiz Bölümü */}
      <section id="team" className="min-h-screen bg-[#2F2F31] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">{t('team.title')}</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t('team.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* İlk satır - 2 kişi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:col-span-2">
              {employeesData.slice(0, 2).map((member, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-[20px] border border-white/20 shadow-lg p-8 hover:shadow-xl hover:bg-white/15 transition-all duration-300 cursor-pointer hover:scale-105"
                  onClick={() => setSelectedMember(index)}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-[220px] h-[220px] rounded-[20px] overflow-hidden mb-6 bg-gray-200">
                      <img 
                        src={member.image || "/placeholder-user.jpg"} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder-user.jpg"
                        }}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-[#DEA582] font-semibold mb-4 text-center">{member.title}</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">{member.description}</p>
                    <div className="flex gap-3">
                      <button className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                        <Linkedin size={18} />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                        <Mail size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* İkinci satır - 2 kişi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:col-span-2">
              {employeesData.slice(2, 4).map((member, index) => (
                <div 
                  key={index + 2}
                  className="bg-white/10 backdrop-blur-sm rounded-[20px] border border-white/20 shadow-lg p-8 hover:shadow-xl hover:bg-white/15 transition-all duration-300 cursor-pointer hover:scale-105"
                  onClick={() => setSelectedMember(index + 2)}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-[220px] h-[220px] rounded-[20px] overflow-hidden mb-6 bg-gray-200">
                      <img 
                        src={member.image || "/placeholder-user.jpg"} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder-user.jpg"
                        }}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-[#DEA582] font-semibold mb-4 text-center">{member.title}</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">{member.description}</p>
                    <div className="flex gap-3">
                      <button className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                        <Linkedin size={18} />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                        <Mail size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Uzmanlık Alanlarımız Bölümü */}
      <section id="expertise" className="min-h-screen relative py-20 bg-[#2F2F31]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">{t('expertise.title')}</h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              {t('expertise.description')}
            </p>
            <p className="text-lg text-white/80 font-medium">
              {t('expertise.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {expertiseData.map((expertise, index) => (
              <div 
                key={index}
                className="bg-white/15 backdrop-blur-[10px] rounded-[20px] border border-white/20 shadow-2xl p-8 hover:shadow-xl hover:bg-white/25 transition-all duration-300 hover:scale-105 cursor-pointer min-h-[220px] flex flex-col justify-between"
                onClick={() => setSelectedExpertise(index)}
              >
                <div>
                                  <h3 className="text-xl font-bold text-white mb-4 text-center leading-tight">
                  {expertise.title}
                </h3>
                <p className="text-white/80 text-sm text-center leading-relaxed font-medium italic">
                  {expertise.subtitle}
                </p>
                </div>
                <div className="mt-6 text-center">
                  <button className="bg-gradient-to-r from-white/20 to-white/10 text-white px-6 py-2 rounded-[12px] font-semibold text-sm hover:from-white/30 hover:to-white/20 transition-all duration-300 hover:scale-105 border border-white/30 backdrop-blur-sm">
                    {t('common.viewDetails')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hakkımızda Bölümü */}
      <section id="about" className="min-h-screen relative py-20 bg-[#2F2F31]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">{t('about.title')}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Building className="w-8 h-8 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">{t('about.legalServices.title')}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {t('about.legalServices.description')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">{t('about.international.title')}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {t('about.international.description')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Handshake className="w-8 h-8 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">{t('about.partnership.title')}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {t('about.partnership.description')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Network className="w-8 h-8 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">{t('about.talent.title')}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {t('about.talent.description')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">{t('about.interdisciplinary.title')}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {t('about.interdisciplinary.description')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Laptop className="w-8 h-8 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">{t('about.digitalTransformation.title')}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {t('about.digitalTransformation.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ofislerimiz Bölümü */}
      <section id="offices" className="min-h-screen relative py-20 bg-[#2F2F31]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">{t('offices.title')}</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t('offices.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Stuttgart Ofisi */}
            <div className="bg-black/30 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/40 transition-all duration-300 shadow-lg">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">Stuttgart</h3>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-[#DEA582] mb-3">{t('offices.locations.stuttgart.subtitle')}</h4>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {t('offices.locations.stuttgart.description')}
                </p>
              </div>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-start">
                  <MapPinned className="w-5 h-5 text-[#D29F91] mr-2 mt-1 flex-shrink-0" />
                  <p>{t('offices.locations.stuttgart.address')}</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-[#D29F91] mr-2" />
                  <p>{t('offices.locations.stuttgart.phone')}</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-[#D29F91] mr-2" />
                  <p>{t('offices.locations.stuttgart.email')}</p>
                </div>
              </div>
            </div>

            {/* İstanbul Ofisi */}
            <div className="bg-black/30 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/40 transition-all duration-300 shadow-lg">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">İstanbul</h3>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-[#DEA582] mb-3">{t('offices.locations.istanbul.subtitle')}</h4>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {t('offices.locations.istanbul.description')}
                </p>
              </div>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-start">
                  <MapPinned className="w-5 h-5 text-[#D29F91] mr-2 mt-1 flex-shrink-0" />
                  <p>{t('offices.locations.istanbul.address')}</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-[#D29F91] mr-2" />
                  <p>{t('offices.locations.istanbul.phone')}</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-[#D29F91] mr-2" />
                  <p>{t('offices.locations.istanbul.email')}</p>
                </div>
              </div>
            </div>

            {/* Ankara Ofisi */}
            <div className="bg-black/30 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/40 transition-all duration-300 shadow-lg">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">Ankara</h3>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-[#DEA582] mb-3">{t('offices.locations.ankara.subtitle')}</h4>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {t('offices.locations.ankara.description')}
                </p>
              </div>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-start">
                  <MapPinned className="w-5 h-5 text-[#D29F91] mr-2 mt-1 flex-shrink-0" />
                  <p>{t('offices.locations.ankara.address')}</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-[#D29F91] mr-2" />
                  <p>{t('offices.locations.ankara.phone')}</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-[#D29F91] mr-2" />
                  <p>{t('offices.locations.ankara.email')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kurumsal Sosyal Sorumluluk Bölümü */}
      <section id="responsibility" className="min-h-screen relative py-20 bg-[#2F2F31]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">{t('responsibility.title')}</h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed italic">
              {t('responsibility.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Hukuk Eğitimi */}
            <div className="bg-black/20 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/30 transition-all duration-300">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-12 h-12 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">{t('responsibility.areas.education.title')}</h3>
              </div>
              <p className="text-gray-100 leading-relaxed">
                {t('responsibility.areas.education.description')}
              </p>
            </div>

            {/* Kadınların Adalete Erişimi */}
            <div className="bg-black/20 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/30 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Scale className="w-12 h-12 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">{t('responsibility.areas.womensRights.title')}</h3>
              </div>
              <p className="text-gray-100 leading-relaxed">
                {t('responsibility.areas.womensRights.description')}
              </p>
            </div>

            {/* Çevresel Farkındalık */}
            <div className="bg-black/20 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/30 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Leaf className="w-12 h-12 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">{t('responsibility.areas.environment.title')}</h3>
              </div>
              <p className="text-gray-100 leading-relaxed">
                {t('responsibility.areas.environment.description')}
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-black/20 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/30 transition-all duration-300 max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Target className="w-12 h-12 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">{t('responsibility.areas.sustainability.title')}</h3>
              </div>
              <p className="text-gray-100 leading-relaxed">
                {t('responsibility.areas.sustainability.description')}
              </p>
              <p className="text-2xl font-semibold text-white mt-6 italic">
                {t('responsibility.quote')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AOREN'de Kariyer Bölümü */}
      <section id="careers" className="min-h-screen relative py-20 bg-[#2F2F31]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">{t('careers.title')}</h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed italic mb-4">
              {t('careers.subtitle')}
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t('careers.description')}
            </p>
          </div>

          {/* Kariyer Başvuru Formu */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-black/20 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8">
              <div className="flex items-center mb-8">
                <Briefcase className="w-8 h-8 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">{t('careers.form.title')}</h3>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium">{t('careers.form.firstName')}</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={t('careers.form.firstName')}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium">{t('careers.form.lastName')}</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={t('careers.form.lastName')}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">{t('careers.form.email')}</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('careers.form.email')}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">{t('careers.form.phone')}</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('careers.form.phone')}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">{t('careers.form.position')}</label>
                  <select className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="" className="bg-[#2F2F31]">Seçiniz</option>
                    <option value="stajyer" className="bg-[#2F2F31]">Stajyer Avukat</option>
                    <option value="junior" className="bg-[#2F2F31]">Junior Avukat</option>
                    <option value="senior" className="bg-[#2F2F31]">Senior Avukat</option>
                    <option value="uzman" className="bg-[#2F2F31]">Uzman</option>
                    <option value="diger" className="bg-[#2F2F31]">Diğer</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">{t('careers.form.cv')}</label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-white/20 border-dashed rounded-lg cursor-pointer bg-white/5 hover:bg-white/10">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 text-[#DEA582] mb-2" />
                        <p className="text-sm text-gray-300">PDF veya Word dosyası yükleyin</p>
                      </div>
                      <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">{t('careers.form.coverLetter')}</label>
                  <textarea
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                    placeholder="Kendinizi tanıtın ve neden AOREN'de çalışmak istediğinizi belirtin"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {t('careers.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* AOREN Dijital Hizmetleri Bölümü */}
      <section id="digital-services" className="min-h-screen relative py-20 bg-[#2F2F31]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">{t('digital.title')}</h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed italic">
              {t('digital.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Müvekkil Portalı */}
            <div className="bg-black/30 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <LayoutDashboard className="w-12 h-12 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">{t('digital.services.portal.title')}</h3>
              </div>
              <p className="text-gray-100 leading-relaxed mb-6">
                {t('digital.services.portal.description')}
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#DEA582] mr-3" />
                  <span>{t('digital.services.portal.features.caseTracking')}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#DEA582] mr-3" />
                  <span>{t('digital.services.portal.features.documentUpload')}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#DEA582] mr-3" />
                  <span>{t('digital.services.portal.features.communication')}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#DEA582] mr-3" />
                  <span>{t('digital.services.portal.features.payment')}</span>
                </div>
              </div>
            </div>

            {/* E-İmza Hizmeti */}
            <div className="bg-black/30 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <FileSignature className="w-12 h-12 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">{t('digital.services.eSignature.title')}</h3>
              </div>
              <p className="text-gray-100 leading-relaxed mb-6">
                {t('digital.services.eSignature.description')}
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#DEA582] mr-3" />
                  <span>{t('digital.services.eSignature.features.legallyValid')}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#DEA582] mr-3" />
                  <span>{t('digital.services.eSignature.features.secure')}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#DEA582] mr-3" />
                  <span>{t('digital.services.eSignature.features.fast')}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#DEA582] mr-3" />
                  <span>{t('digital.services.eSignature.features.trackable')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Online Danışmanlık */}
            <div className="bg-black/30 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <MessageSquare className="w-12 h-12 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">{t('digital.services.consultation.title')}</h3>
              </div>
              <p className="text-gray-100 leading-relaxed mb-6">
                {t('digital.services.consultation.description')}
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#DEA582] mr-3" />
                  <span>{t('digital.services.consultation.features.videoCall')}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#DEA582] mr-3" />
                  <span>{t('digital.services.consultation.features.secure')}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#DEA582] mr-3" />
                  <span>{t('digital.services.consultation.features.flexible')}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#DEA582] mr-3" />
                  <span>{t('digital.services.consultation.features.recorded')}</span>
                </div>
              </div>
            </div>

            {/* Dijital Dönüşüm Danışmanlığı */}
            <div className="bg-black/30 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <GitBranch className="w-12 h-12 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">{t('digital.services.transformation.title')}</h3>
              </div>
              <p className="text-gray-100 leading-relaxed mb-6">
                {t('digital.services.transformation.description')}
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#DEA582] mr-3" />
                  <span>{t('digital.services.transformation.features.strategy')}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#DEA582] mr-3" />
                  <span>{t('digital.services.transformation.features.implementation')}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#DEA582] mr-3" />
                  <span>{t('digital.services.transformation.features.training')}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#DEA582] mr-3" />
                  <span>{t('digital.services.transformation.features.support')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim Bölümü */}
      <section id="contact" className="min-h-screen relative py-20 bg-[#2F2F31]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">{t('contact.title')}</h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed italic mb-2">
              {t('contact.subtitle')}
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t('contact.description')}
            </p>
          </div>

          {/* Ofis Bilgileri */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Stuttgart Ofisi */}
            <div className="bg-black/30 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">Stuttgart</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start text-gray-300">
                  <MapPinned className="w-5 h-5 text-[#D29F91] mr-2 mt-1" />
                  <p>Neckarstraße 155, 70190 Stuttgart, Almanya</p>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 text-[#D29F91] mr-2" />
                  <p>+49 (0)711 123 45 67</p>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 text-[#D29F91] mr-2" />
                  <p>stuttgart@aorenlegal.com</p>
                </div>
              </div>
            </div>

            {/* İstanbul Ofisi */}
            <div className="bg-black/30 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">İstanbul</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start text-gray-300">
                  <MapPinned className="w-5 h-5 text-[#D29F91] mr-2 mt-1" />
                  <p>Büyükdere Caddesi No:233, Nurol Plaza, Kat:11, Levent, 34394 Şişli / İstanbul</p>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 text-[#D29F91] mr-2" />
                  <p>+90 (212) 345 67 89</p>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 text-[#D29F91] mr-2" />
                  <p>istanbul@aorenlegal.com</p>
                </div>
              </div>
            </div>

            {/* Ankara Ofisi */}
            <div className="bg-black/30 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">Ankara</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start text-gray-300">
                  <MapPinned className="w-5 h-5 text-[#D29F91] mr-2 mt-1" />
                  <p>Mustafa Kemal Mah. 2151. Cad. No:15, Kat:4, Çankaya / Ankara</p>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 text-[#D29F91] mr-2" />
                  <p>+90 (312) 456 78 90</p>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 text-[#D29F91] mr-2" />
                  <p>ankara@aorenlegal.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* İletişim Notu */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-[#DEA582] mr-3" />
              <p className="text-xl text-white/90">
                Telefon, e-posta ve müvekkil portalı üzerinden iletişim kanallarımız 7/24 açıktır.
              </p>
            </div>
          </div>

          {/* İletişim Formu */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-black/30 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8">
              <div className="flex items-center mb-8">
                <MessageSquare className="w-8 h-8 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">İletişim Formu</h3>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium">Ad</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DEA582]"
                      placeholder="Adınız"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium">Soyad</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DEA582]"
                      placeholder="Soyadınız"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">E-posta</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DEA582]"
                    placeholder="E-posta adresiniz"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">Konu</label>
                  <select className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#DEA582]">
                    <option value="" className="bg-[#2F2F31]">Seçiniz</option>
                    <option value="danisma" className="bg-[#2F2F31]">İlk Danışma Talebi</option>
                    <option value="isbirligi" className="bg-[#2F2F31]">İş Birliği Talebi</option>
                    <option value="randevu" className="bg-[#2F2F31]">Randevu Talebi</option>
                    <option value="diger" className="bg-[#2F2F31]">Diğer</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">Mesajınız</label>
                  <textarea
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DEA582] h-32 resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#DEA582] hover:bg-[#D29F91] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Mesajı Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Uzmanlık Alanları Modal */}
      {selectedExpertise !== null && (
        <ModalOverlay onClick={() => setSelectedExpertise(null)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <ModalClose onClick={() => setSelectedExpertise(null)}><X size={28} /></ModalClose>
            <div className="w-full">
              <ModalTitle>{expertiseData[selectedExpertise].title}</ModalTitle>
              <ModalSubtitle>{expertiseData[selectedExpertise].subtitle}</ModalSubtitle>
              <ModalText style={{whiteSpace:'pre-line'}}>{expertiseData[selectedExpertise].description}</ModalText>
              <ModalLabel>Hizmet Başlıklarımız:</ModalLabel>
              <ModalList>
                {expertiseData[selectedExpertise].services.map((service, i) => (
                  <li key={i}>{service}</li>
                ))}
              </ModalList>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Ekibimiz Modal */}
      {selectedMember !== null && (
        <ModalOverlay onClick={() => setSelectedMember(null)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <ModalPhoto>
              <img src={employeesData[selectedMember].image} alt={employeesData[selectedMember].name} />
            </ModalPhoto>
            <ModalInfo>
              <ModalClose onClick={() => setSelectedMember(null)}><X size={28} /></ModalClose>
              <ModalTitle>{employeesData[selectedMember].name}</ModalTitle>
              <ModalSubtitle>{employeesData[selectedMember].title}</ModalSubtitle>
              <ModalText style={{whiteSpace:'pre-line'}}>{employeesData[selectedMember].details.about}</ModalText>
              <ModalLabel>Uzmanlık Alanları:</ModalLabel>
              <ModalList>
                {employeesData[selectedMember].details.expertise.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ModalList>
              <ModalLabel>Konuştuğu Diller:</ModalLabel>
              <ModalText>{employeesData[selectedMember].details.languages}</ModalText>
            </ModalInfo>
          </ModalContent>
        </ModalOverlay>
      )}
      
      <Footer />
    </>
  )
}
