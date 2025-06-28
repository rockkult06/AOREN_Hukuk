"use client"

import type React from "react"
import styled from "styled-components"
// Import `useRef` from React
import { useRef, useEffect } from "react"

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
padding: 32px 22px;
border-radius: 20px;
cursor: pointer;
transition: all 0.3s ease;
width: 320px;
min-height: 170px;
display: flex;
flex-direction: column;
justify-content: center;
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

h2 {
  font-size: 1em;
  margin-bottom: 20px;
  color: white;
  font-weight: 600;
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

p {
  font-size: 0.9em;
  opacity: 0.9;
  color: white;
  margin: 0;
  font-weight: 500;
}

@media (max-width: 768px) {
  width: 100%;
  padding: 24px 14px;
  min-height: auto;
  border-radius: 18px;
  
  &:hover {
    border-radius: 22px;
  }
}
`

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  return (
    <HeroContainer>
      <BoxContainer>
        <InfoBox>
          <h2>TÜRKİYE'NİN ÖNDE GELEN HUKUK BÜROLARINDAN BİRİ</h2>
          <p>Tüm ekibi görün</p>
        </InfoBox>
        <InfoBox>
          <h2>MÜVEKKİLLERİMİZE TÜM OFİSLERİMİZDE HİZMET VERİYORUZ</h2>
          <p>Ofislerimizi görün</p>
        </InfoBox>
        <InfoBox>
          <h2>TÜM HUKUKİ UZMANLIK ALANLARINDA HİZMET VERİYORUZ</h2>
          <p>Uzmanlık alanlarımızı görün</p>
        </InfoBox>
      </BoxContainer>
    </HeroContainer>
  )
}

export default HeroSection
