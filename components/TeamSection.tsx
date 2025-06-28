"use client";
import styled from "styled-components";
import { Linkedin, Mail, X } from "lucide-react";
import React, { useState } from "react";

const TeamSectionContainer = styled.section`
  background: #2F2F31;
  padding: 0 0 60px 0;
`;

const HeroSection = styled.section`
  padding: 80px 20px 0 20px;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  margin-bottom: 60px;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 24px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.25rem;
  color: #E0E0E0;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 500;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  max-width: 1200px;
  margin: 60px auto 0 auto;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

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
`;

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
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 8px;
  text-align: center;
`;

const MemberTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: #64B5F6;
  margin-bottom: 16px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const MemberDescription = styled.p`
  font-size: 0.95rem;
  color: #E0E0E0;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 24px;
`;

const SocialButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

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
`;

// Modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.45);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: #fff;
  color: #222;
  border-radius: 28px;
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
    padding: 32px 10px;
  }
`;

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
`;

const ModalInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

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
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

const ModalSubtitle = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1976D2;
  margin-bottom: 18px;
`;

const ModalText = styled.p`
  font-size: 1rem;
  margin-bottom: 18px;
  color: #222;
`;

const ModalList = styled.ul`
  margin-bottom: 12px;
  padding-left: 18px;
  color: #222;
  li {
    margin-bottom: 6px;
    font-size: 1rem;
  }
`;

const ModalLabel = styled.div`
  font-weight: 600;
  margin-top: 12px;
  margin-bottom: 2px;
  color: #1976D2;
`;

const employeesData = [
  // ... aynı şekilde kopyalanacak ...
];

export default function TeamSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <TeamSectionContainer id="team-section">
      <HeroSection>
        <HeroTitle>Ekibimiz</HeroTitle>
        <HeroDescription>
          AOREN Legal Services; her biri kendi uzmanlık alanında derin bilgiye ve uluslararası deneyime sahip avukatlardan oluşan seçkin bir ekiple hizmet sunar.
        </HeroDescription>
      </HeroSection>
      <TeamGrid>
        {employeesData.map((member, index) => (
          <TeamCard key={index} onClick={() => setSelected(index)}>
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
      {selected !== null && (
        <ModalOverlay onClick={() => setSelected(null)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <ModalPhoto>
              <img src={employeesData[selected].image} alt={employeesData[selected].name} />
            </ModalPhoto>
            <ModalInfo>
              <ModalClose onClick={() => setSelected(null)}><X size={28} /></ModalClose>
              <ModalTitle>{employeesData[selected].name}</ModalTitle>
              <ModalSubtitle>{employeesData[selected].title}</ModalSubtitle>
              <ModalText style={{whiteSpace:'pre-line'}}>{employeesData[selected].details.about}</ModalText>
              <ModalLabel>Uzmanlık Alanları:</ModalLabel>
              <ModalList>
                {employeesData[selected].details.expertise.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ModalList>
              <ModalLabel>Konuştuğu Diller:</ModalLabel>
              <ModalText>{employeesData[selected].details.languages}</ModalText>
            </ModalInfo>
          </ModalContent>
        </ModalOverlay>
      )}
    </TeamSectionContainer>
  );
} 