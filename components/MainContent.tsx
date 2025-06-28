"use client"

import type React from "react"
import styled from "styled-components"
import Link from "next/link"

const MainContentContainer = styled.div`
  padding: 120px 40px 80px 40px;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 58, 138, 0.95));
  backdrop-filter: blur(10px);
  color: white;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 100px 20px 40px 20px;
  }
`

const SectionTitle = styled.h2`
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 60px;
  color: white;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2em;
    margin-bottom: 40px;
  }
`

const AboutSection = styled.section`
  max-width: 900px;
  margin: 0 auto 80px auto;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  p {
    font-size: 1.2em;
    line-height: 1.8;
    margin-bottom: 30px;
    color: rgba(255, 255, 255, 0.9);
  }

  button {
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 12px;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
    }
  }
`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`

const NewsCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .card-content {
    padding: 24px;
  }

  .card-date {
    font-size: 0.9em;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 12px;
    font-weight: 500;
  }

  h3 {
    font-size: 1.3em;
    margin-bottom: 16px;
    line-height: 1.4;
    color: white;
    font-weight: 600;
  }

  .read-more {
    color: #60a5fa;
    font-size: 0.95em;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;

    &:hover {
      color: #93c5fd;
    }
  }
`

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto 80px auto;
`

const TeamMember = styled.div`
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 30px 20px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
  }
  
  .profile-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 auto 20px auto;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2em;
    font-weight: bold;
  }
  
  h4 {
    font-size: 1.2em;
    margin-bottom: 8px;
    color: white;
    font-weight: 600;
  }
  
  p {
    font-size: 1em;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
  }
`

const MainContent: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      date: "10.12.2024",
      title: "Ticaret Hukukunda Yeni Düzenlemeler",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      date: "08.12.2024",
      title: "Aile Hukukunda Güncel Gelişmeler",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      date: "05.12.2024",
      title: "İş Hukuku Uygulamaları",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      date: "02.12.2024",
      title: "Ceza Hukukunda Yenilikler",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const teamMembers = [
    { name: "Av. Abdullah ÖREN", title: "Kurucu Ortak", initial: "A" },
    { name: "Av. Ekin Tuncel", title: "Ceza Hukuku Uzmanı", initial: "E" },
    { name: "Av. Melis Bayraktar", title: "Aile Hukuku Uzmanı", initial: "M" },
    { name: "Av. Kerem Yıldız", title: "İş Hukuku Danışmanı", initial: "K" },
    { name: "Av. Derya Aksoy", title: "Gayrimenkul Hukuku Uzmanı", initial: "D" },
  ]

  return (
    <MainContentContainer>
      <section id="about">
        <AboutSection>
          <p>
            AOREN, yüksek etki yaratan hukuk kadrosuyla 220'den fazla çalışanı ile hizmet vermektedir.
          </p>
          <Link href="/hakkimizda">
            <button>Daha fazla bilgi</button>
          </Link>
        </AboutSection>
      </section>

      <section id="team">
        <SectionTitle>Ekibimizden Seçkin Avukatlar</SectionTitle>
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamMember key={index}>
              <div className="profile-image">{member.initial}</div>
              <h4>{member.name}</h4>
              <p>{member.title}</p>
            </TeamMember>
          ))}
        </TeamGrid>
      </section>

      <section id="news">
        <SectionTitle>AOREN'den Son Haberler</SectionTitle>
        <CardGrid>
          {newsItems.map((item) => (
            <NewsCard key={item.id}>
              <img src={item.image || "/placeholder.svg"} alt={item.title} />
              <div className="card-content">
                <div className="card-date">{item.date}</div>
                <h3>{item.title}</h3>
                <Link href="#" className="read-more">
                  → Devamını oku
                </Link>
              </div>
            </NewsCard>
          ))}
        </CardGrid>
      </section>

      <section id="seminars">
        <SectionTitle>Yaklaşan Seminerler</SectionTitle>
        <CardGrid>
          <NewsCard>
            <img src="/placeholder.svg?height=200&width=300" alt="Seminer" />
            <div className="card-content">
              <div className="card-date">15.12.2024</div>
              <h3>Ticaret Hukuku Semineri</h3>
              <Link href="#" className="read-more">
                → Detaylar
              </Link>
            </div>
          </NewsCard>
          <NewsCard>
            <img src="/placeholder.svg?height=200&width=300" alt="Seminer" />
            <div className="card-content">
              <div className="card-date">20.12.2024</div>
              <h3>İş Hukuku Workshop'u</h3>
              <Link href="#" className="read-more">
                → Detaylar
              </Link>
            </div>
          </NewsCard>
        </CardGrid>
      </section>
    </MainContentContainer>
  )
}

export default MainContent
