"use client"

import type React from "react"
import styled from "styled-components"
// Import `useRef` from React
import { useRef, useEffect } from "react"
import { useRouter } from "next/navigation"

const HeroContainer = styled.section`
position: relative;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
text-align: center;
overflow: hidden;
background: transparent;
`

const BoxContainer = styled.div`
display: flex;
gap: 40px;
z-index: 2;
margin-top: 80px;

@media (max-width: 1024px) {
  gap: 30px;
}

@media (max-width: 768px) {
  flex-direction: column;
  gap: 25px;
  margin-top: 60px;
  padding: 0 20px;
}
`

const InfoBox = styled.div`
background-color: rgba(255, 255, 255, 0.15);
backdrop-filter: blur(10px);
padding: 40px 24px;
border-radius: 20px;
cursor: pointer;
transition: all 0.3s ease;
width: 360px;
min-height: 220px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
text-align: center;
border: 1px solid rgba(255, 255, 255, 0.2);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

&:hover {
  background-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
}

@media (max-width: 768px) {
  width: 100%;
  padding: 32px 20px;
  min-height: auto;
  border-radius: 18px;
  
  &:hover {
    border-radius: 22px;
  }
}
`

const SloganTitle = styled.h2`
font-size: 1.4em;
margin-bottom: 16px;
color: white;
font-weight: 700;
line-height: 1.3;
text-transform: uppercase;
letter-spacing: 0.8px;
text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

@media (max-width: 768px) {
  font-size: 1.2em;
  letter-spacing: 0.6px;
}
`

const SloganSubtitle = styled.p`
font-size: 1em;
opacity: 0.95;
color: rgba(255, 255, 255, 0.9);
margin: 0 0 24px 0;
font-weight: 500;
line-height: 1.5;
font-style: italic;

@media (max-width: 768px) {
  font-size: 0.95em;
  margin-bottom: 20px;
}
`

const ActionButton = styled.button`
background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
border: 1px solid rgba(255, 255, 255, 0.3);
color: white;
padding: 12px 24px;
border-radius: 12px;
font-size: 0.9em;
font-weight: 600;
cursor: pointer;
transition: all 0.3s ease;
backdrop-filter: blur(10px);
text-transform: uppercase;
letter-spacing: 0.5px;

&:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2));
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  padding: 10px 20px;
  font-size: 0.85em;
}
`

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  return (
    <HeroContainer>
      <BoxContainer>
        <InfoBox>
          <div>
            <SloganTitle>YÜKSEK ETKİ YARATAN HUKUK KADROMUZLA TANIŞIN</SloganTitle>
            <SloganSubtitle>"Stratejik Düşünen Avukatlar. Disiplinlerarası Yaklaşım"</SloganSubtitle>
          </div>
          <ActionButton onClick={() => handleNavigation('/employees')}>Ekibimizi Görün</ActionButton>
        </InfoBox>
        <InfoBox>
          <div>
            <SloganTitle>BÖLGESEL DEĞİL, ULUSLARARASI DÜZEYDE HİZMET SUNUYORUZ</SloganTitle>
            <SloganSubtitle>"Aynı Değerler, Farklı Şehirlerde"</SloganSubtitle>
          </div>
          <ActionButton onClick={() => handleNavigation('/ofislerimiz')}>Ofislerimizi Keşfedin</ActionButton>
        </InfoBox>
        <InfoBox>
          <div>
            <SloganTitle>KAPSAMLI HUKUKİ ÇÖZÜM ALANLARIMIZI İNCELEYİN</SloganTitle>
            <SloganSubtitle>"Hukukun Tüm Alanlarında Yetkin Kadro, Bütünleşik Yaklaşım"</SloganSubtitle>
          </div>
          <ActionButton onClick={() => handleNavigation('/uzmanlik-alanlari')}>Uzmanlık Alanları</ActionButton>
        </InfoBox>
      </BoxContainer>
    </HeroContainer>
  )
}

export default HeroSection
