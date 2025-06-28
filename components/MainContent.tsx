"use client"

import type React from "react"
import styled from "styled-components"

const MainContentContainer = styled.div`
  padding: 120px 40px 80px 40px;
  background: rgba(249, 249, 249, 0.9);
  backdrop-filter: blur(2px);
  color: #333;

  @media (max-width: 768px) {
    padding: 100px 20px 40px 20px;
  }
`

const SectionTitle = styled.h2`
  font-size: 2.2em;
  text-align: center;
  margin-bottom: 50px;
  color: #222;
  font-weight: 600;
`

const AboutSection = styled.section`
  max-width: 900px;
  margin: 0 auto 80px auto;
  text-align: center;

  p {
    font-size: 1.15em;
    line-height: 1.8;
    margin-bottom: 20px;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`

const NewsCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .card-content {
    padding: 20px;
  }

  .card-date {
    font-size: 0.85em;
    color: #666;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.3em;
    margin-bottom: 15px;
    line-height: 1.4;
    color: #333;
  }

  .read-more {
    color: #007bff;
    font-size: 0.9em;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto 80px auto;
`

const TeamMember = styled.div`
  text-align: center;
  
  .profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto 15px auto;
    background-color: #ddd;
    background-image: url('/placeholder.svg?height=150&width=150');
    background-size: cover;
    background-position: center;
  }
  
  h4 {
    font-size: 1.1em;
    margin-bottom: 5px;
    color: #333;
  }
  
  p {
    font-size: 0.9em;
    color: #666;
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
    { name: "Av. Mehmet Aoren", title: "Kurucu Ortak" },
    { name: "Av. Ayşe Kaya", title: "Ortak" },
    { name: "Av. Can Demir", title: "Kıdemli Avukat" },
    { name: "Av. Zeynep Öz", title: "Avukat" },
    { name: "Av. Ali Yılmaz", title: "Avukat" },
    { name: "Av. Fatma Şen", title: "Avukat" },
  ]

  return (
    <MainContentContainer>
      <AboutSection>
        <p>
          AOREN, Türkiye'nin önde gelen hukuk bürolarından biri olarak 220'den fazla çalışanı ile hizmet vermektedir.
        </p>
        <button>Daha fazla bilgi</button>
      </AboutSection>

      <SectionTitle>Her zaman yetenekli çalışanlar arıyoruz:</SectionTitle>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamMember key={index}>
            <div className="profile-image"></div>
            <h4>{member.name}</h4>
            <p>{member.title}</p>
          </TeamMember>
        ))}
      </TeamGrid>

      <SectionTitle>AOREN'den son haberler</SectionTitle>
      <CardGrid>
        {newsItems.map((item) => (
          <NewsCard key={item.id}>
            <img src={item.image || "/placeholder.svg"} alt={item.title} />
            <div className="card-content">
              <div className="card-date">{item.date}</div>
              <h3>{item.title}</h3>
              <a href="#" className="read-more">
                → Devamını oku
              </a>
            </div>
          </NewsCard>
        ))}
      </CardGrid>

      <SectionTitle>Yaklaşan seminerler</SectionTitle>
      <CardGrid>
        <NewsCard>
          <img src="/placeholder.svg?height=200&width=300" alt="Seminer" />
          <div className="card-content">
            <div className="card-date">15.12.2024</div>
            <h3>Ticaret Hukuku Semineri</h3>
            <a href="#" className="read-more">
              → Detaylar
            </a>
          </div>
        </NewsCard>
        <NewsCard>
          <img src="/placeholder.svg?height=200&width=300" alt="Seminer" />
          <div className="card-content">
            <div className="card-date">20.12.2024</div>
            <h3>İş Hukuku Workshop'u</h3>
            <a href="#" className="read-more">
              → Detaylar
            </a>
          </div>
        </NewsCard>
      </CardGrid>
    </MainContentContainer>
  )
}

export default MainContent
