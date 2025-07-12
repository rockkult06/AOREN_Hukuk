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
    gap: 24px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    margin-top: 32px;
    padding: 0 4px;
  }
`

const InfoBox = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  padding: 18px 8px 20px 8px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 340px;
  max-width: 95vw;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

  &:hover {
    background-color: rgba(255, 255, 255, 0.22);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.10);
    border-radius: 14px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 95vw;
    padding: 12px 4px 14px 4px;
    min-height: 80px;
    border-radius: 10px;
    margin: 0 auto;
    box-shadow: 0 2px 8px rgba(0,0,0,0.07);
    &:hover {
      border-radius: 12px;
    }
  }
`

const SloganTitle = styled.h2`
  font-size: 1.05em;
  margin-bottom: 8px;
  color: white;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);

  @media (max-width: 768px) {
    font-size: 0.98em;
    margin-bottom: 6px;
    letter-spacing: 0.3px;
  }
`

const SloganSubtitle = styled.p`
  font-size: 0.92em;
  opacity: 0.92;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 10px 0;
  font-weight: 500;
  line-height: 1.4;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 0.89em;
    margin-bottom: 8px;
  }
`

const ActionButton = styled.button`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.09));
  border: 1px solid rgba(255, 255, 255, 0.22);
  color: white;
  padding: 8px 0;
  border-radius: 8px;
  font-size: 0.98em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  text-transform: uppercase;
  letter-spacing: 0.3px;
  width: 100%;
  margin-top: 6px;

  &:hover {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.13));
    border-color: rgba(255, 255, 255, 0.32);
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.10);
  }

  @media (max-width: 768px) {
    padding: 7px 0;
    font-size: 0.93em;
    border-radius: 7px;
    margin-top: 5px;
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
