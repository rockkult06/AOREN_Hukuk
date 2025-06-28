"use client"

import Header from "@/components/header"
import Footer from "@/components/Footer"
import styled from "styled-components"
import { Linkedin, Mail, ArrowUp } from "lucide-react"

const PageContainer = styled.main`
  min-height: 100vh;
  background: #2F2F31;
  padding-top: 80px;
`

const HeroSection = styled.section`
  padding: 80px 20px;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  margin-bottom: 60px;
`

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 24px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const HeroDescription = styled.p`
  font-size: 1.25rem;
  color: #E0E0E0;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 500;
`

const TeamSection = styled.section`
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
`

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  margin-top: 60px;
  
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
  width: 100%;
  height: 280px;
  border-radius: 16px;
  margin: 0 auto 24px auto;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  
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
  color: #64B5F6;
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

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`

const employeesData = [
  {
    name: "Av. Abdullah ÖREN",
    title: "Kurucu Ortak | Ticaret ve Uluslararası Yatırım Hukuku Uzmanı",
    description: "BRAO 206 kapsamında yetkilendirilmiş deneyimiyle, stratejik danışmanlık yaklaşımının hukukla kesiştiği noktada liderlik eder.",
    image: "/1.png",
  },
  {
    name: "Av. Ekin Tuncel",
    title: "Ceza Hukuku ve İtibar Yönetimi Uzmanı",
    description: "Basın hukuku ve beyaz yaka suçları alanındaki etkin savunma stratejileriyle tanınır.",
    image: "/2.png",
  },
  {
    name: "Av. Melis Bayraktar",
    title: "Aile Hukuku ve Uluslararası Miras Hukuku Uzmanı",
    description: "Karmaşık kişisel ilişki dosyalarında empatiyle yaklaşırken, yüksek hassasiyetle çözüm üretir.",
    image: "/4.png",
  },
  {
    name: "Av. Kerem Yıldız",
    title: "İş Hukuku ve Kurumsal Uyum Danışmanı",
    description: "Şirket içi insan kaynakları süreçleri, risk yönetimi ve etik uyum konularında uzmanlaşmıştır.",
    image: "/3.png",
  },
]

export default function EmployeesPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Header />
      <PageContainer>
        <HeroSection>
          <HeroTitle>Ekibimiz</HeroTitle>
          <HeroDescription>
            AOREN Legal Services; her biri kendi uzmanlık alanında derin bilgiye ve uluslararası deneyime sahip avukatlardan oluşan seçkin bir ekiple hizmet sunar.
          </HeroDescription>
        </HeroSection>
        
        <TeamSection>
          <TeamGrid>
            {employeesData.map((member, index) => (
              <TeamCard key={index}>
                <ProfileImage>
                  <img 
                    src={member.image || "/placeholder-user.jpg"} 
                    alt={member.name}
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder-user.jpg"
                    }}
                  />
                </ProfileImage>
                <MemberName>{member.name}</MemberName>
                <MemberTitle>{member.title}</MemberTitle>
                <MemberDescription>{member.description}</MemberDescription>
                <SocialButtons>
                  <SocialButton>
                    <Linkedin size={18} />
                  </SocialButton>
                  <SocialButton>
                    <Mail size={18} />
                  </SocialButton>
                </SocialButtons>
              </TeamCard>
            ))}
          </TeamGrid>
        </TeamSection>
        
        <ScrollToTopButton onClick={scrollToTop}>
          <ArrowUp size={20} />
        </ScrollToTopButton>
      </PageContainer>
      <Footer />
    </>
  )
}
