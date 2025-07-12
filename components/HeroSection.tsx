"use client"

import type React from "react"
import styled from "styled-components"
// Import `useRef` from React
import { useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/contexts/LanguageContext"

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
    gap: 32px;
    margin-top: 40px;
    padding: 0 8px;
  }
`

const InfoBox = styled.div`
  background-color: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(12px);
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
    padding: 28px 10px 32px 10px;
    min-height: auto;
    border-radius: 16px;
    margin: 0 auto;
    box-shadow: 0 4px 16px rgba(0,0,0,0.10);
    &:hover {
      border-radius: 18px;
    }
  }
`

const SloganTitle = styled.h2`
  font-size: 1.3em;
  margin-bottom: 16px;
  color: white;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.1em;
    margin-bottom: 10px;
    letter-spacing: 0.5px;
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
    font-size: 0.98em;
    margin-bottom: 16px;
  }
`

const ActionButton = styled.button`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.12));
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 16px 0;
  border-radius: 14px;
  font-size: 1.05em;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  width: 100%;
  margin-top: 10px;

  &:hover {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2));
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 14px 0;
    font-size: 1em;
    border-radius: 12px;
    margin-top: 8px;
  }
`

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const router = useRouter()
  const { t } = useLanguage()

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  const handleNavigation = (path: string) => {
    if (path === '/employees') {
      // Ana sayfadaki ekibimiz bölümüne scroll yap
      const teamSection = document.getElementById('team')
      if (teamSection) {
        teamSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (path === '/uzmanlik-alanlari') {
      // Ana sayfadaki uzmanlık alanları bölümüne scroll yap
      const expertiseSection = document.getElementById('expertise')
      if (expertiseSection) {
        expertiseSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (path === '/ofislerimiz') {
      // Ana sayfadaki ofislerimiz bölümüne scroll yap
      const officesSection = document.getElementById('offices')
      if (officesSection) {
        officesSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      router.push(path)
    }
  }

  return (
    <HeroContainer>
      <BoxContainer>
        <InfoBox>
          <div>
            <SloganTitle>{t('hero.team.title')}</SloganTitle>
            <SloganSubtitle>{t('hero.team.subtitle')}</SloganSubtitle>
          </div>
          <ActionButton onClick={() => handleNavigation('/employees')}>{t('header.team')}</ActionButton>
        </InfoBox>
        <InfoBox>
          <div>
            <SloganTitle>{t('hero.offices.title')}</SloganTitle>
            <SloganSubtitle>{t('hero.offices.subtitle')}</SloganSubtitle>
          </div>
          <ActionButton onClick={() => handleNavigation('/ofislerimiz')}>{t('header.offices')}</ActionButton>
        </InfoBox>
        <InfoBox>
          <div>
            <SloganTitle>{t('hero.expertise.title')}</SloganTitle>
            <SloganSubtitle>{t('hero.expertise.subtitle')}</SloganSubtitle>
          </div>
          <ActionButton onClick={() => handleNavigation('/uzmanlik-alanlari')}>{t('header.expertise')}</ActionButton>
        </InfoBox>
      </BoxContainer>
    </HeroContainer>
  )
}

export default HeroSection
