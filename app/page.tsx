"use client";
import React from "react";
import Head from "next/head"
import Header from "@/components/header"
import HeroSection from "@/components/HeroSection"
import Footer from "@/components/Footer"
import BackgroundVideo from "@/components/BackgroundVideo"
import styled from "styled-components"
import { Linkedin, Mail, X } from "lucide-react"
import { useState } from "react"

const TeamSection = styled.section`
  padding: 80px 20px;
  background: #2F2F31;
  min-height: 100vh;
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

const employeesData = [
  {
    name: "Av. Abdullah ÖREN",
    title: "Kurucu Ortak | Ticaret ve Uluslararası Yatırım Hukuku Uzmanı",
    description: "BRAO 206 kapsamında yetkilendirilmiş deneyimiyle, stratejik danışmanlık yaklaşımının hukukla kesiştiği noktada liderlik eder.",
    image: "/1.png",
    details: {
      about: `AOREN'in kurucu ortağı olan Av. Abdullah ÖREN, özellikle ticaret hukuku, uluslararası yatırım süreçleri ve şirket birleşmeleri alanlarında BRAO 206 kapsamında tanınan yetkinliğiyle öne çıkar. Stratejik vizyonu sayesinde, yalnızca hukuki çözümler sunmakla kalmaz; müvekkillerinin iş hedeflerine doğrudan katkı sağlayan danışmanlıklar geliştirir.\n\nKariyeri boyunca yüzlerce yerli ve yabancı şirketin hukuki yapılanmasında aktif rol almış, sınır ötesi işlemlerde edindiği tecrübeyle Avrupa-Türkiye hattında güçlü bir köprü oluşturmuştur.`,
      expertise: [
        "Uluslararası Ticaret ve Sözleşmeler",
        "Şirketler Hukuku ve Kurumsal Yapılandırma",
        "Yatırım Fonları ve Girişim Sermayesi",
        "Birleşme ve Devralmalar"
      ],
      languages: "Türkçe, İngilizce, Almanca"
    }
  },
  {
    name: "Av. Ekin Tuncel",
    title: "Ceza Hukuku ve İtibar Yönetimi Uzmanı",
    description: "Basın hukuku ve beyaz yaka suçları alanındaki etkin savunma stratejileriyle tanınır.",
    image: "/2.png",
    details: {
      about: `Ceza yargılamalarının karmaşık doğasında güvenilir bir rehber olan Av. Ekin Tuncel, özellikle beyaz yaka suçları, basın özgürlüğü ihlalleri ve siber güvenlik odaklı davalarda müvekkillerini etkili şekilde temsil eder.\n\nKamuoyu ile doğrudan ilişki içinde olan bireyler ve şirketler için kriz dönemlerinde medya iletişimi ve itibar savunusu alanlarında güçlü stratejiler geliştirmiştir. Adli ve önleyici danışmanlık alanındaki başarısı, hem bireysel hem kurumsal müvekkiller tarafından takdir görmektedir.`,
      expertise: [
        "Ekonomik Suçlar ve Ceza Soruşturmaları",
        "Basın ve Sosyal Medya Hukuku",
        "Dijital Güvenlik ve Kişisel Verilerin Korunması",
        "İtibar Yönetimi ve Acil Hukuki Müdahale"
      ],
      languages: "Türkçe, İngilizce"
    }
  },
  {
    name: "Av. Melis Bayraktar",
    title: "Aile Hukuku ve Uluslararası Miras Hukuku Uzmanı",
    description: "Karmaşık kişisel ilişki dosyalarında empatiyle yaklaşırken, yüksek hassasiyetle çözüm üretir.",
    image: "/4.png",
    details: {
      about: `Av. Melis Bayraktar, karmaşık aile yapıları, mal rejimi düzenlemeleri ve çok uluslu miras dosyalarında derin uzmanlığa sahip bir uzmandır. Duygusal olarak hassas dosyalarda gösterdiği etik yaklaşım ve çözüm odaklı iletişim tarzıyla dikkat çeker.\n\nTürkiye'de yaşayan yabancı uyruklu bireyler ile yurtdışında yaşayan Türk kökenli vatandaşların ailevi ve miras işlemlerinde güvenle danıştığı bir isimdir. Varlık planlaması, vasiyetname düzenlemeleri ve kuşaklar arası geçişlerde sürdürülebilir yapılandırmalar geliştirmektedir.`,
      expertise: [
        "Boşanma ve Mal Paylaşımı",
        "Evlilik Sözleşmeleri",
        "Uluslararası Miras Planlaması",
        "Aile Şirketi Hukuku"
      ],
      languages: "Türkçe, İngilizce, Fransızca"
    }
  },
  {
    name: "Av. Kerem Yıldız",
    title: "İş Hukuku ve Kurumsal Uyum Danışmanı",
    description: "Şirket içi insan kaynakları süreçleri, risk yönetimi ve etik uyum konularında uzmanlaşmıştır.",
    image: "/3.png",
    details: {
      about: `Şirket içi insan kaynakları süreçlerinin hukuki boyutunu en ince ayrıntısına kadar planlayan Av. Kerem Yıldız, iş hukuku uygulamalarını sadece sözleşme temelli değil, aynı zamanda etik ve sürdürülebilir kurumsal yapı perspektifinden ele alır.\n\nÇok uluslu şirketlerdeki iç denetim sistemleri, KVKK/GDPR uyumu ve iş dünyası & insan hakları arasındaki ilişki konusunda da aktif rol üstlenmiştir. Proaktif danışmanlık anlayışı sayesinde, kurumların hukuki risklerini daha ortaya çıkmadan kontrol altına alır.`,
      expertise: [
        "İş Hukuku ve Yönetici Sözleşmeleri",
        "Kurumsal Etik & Risk Yönetimi",
        "KVKK & GDPR Uyum Danışmanlığı",
        "Çalışma Hayatı ve İnsan Hakları"
      ],
      languages: "Türkçe, İngilizce"
    }
  },
]

export default function Home() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null)

  return (
    <>
      <Head>
        <title>Aoren - Yüksek Etki Yaratan Hukuk Bürosu</title>
        <meta name="description" content="Aoren Hukuk Bürosu" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      <BackgroundVideo />
      <Header />
      <HeroSection />
      
      <TeamSection id="ekibimiz">
        <TeamTitle>Ekibimiz</TeamTitle>
        <TeamDescription>
          AOREN Legal Services; her biri kendi uzmanlık alanında derin bilgiye ve uluslararası deneyime sahip avukatlardan oluşan seçkin bir ekiple hizmet sunar.
        </TeamDescription>
        
        <TeamGrid>
          {employeesData.map((member, index) => (
            <TeamCard key={index} onClick={() => setSelectedMember(index)}>
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
