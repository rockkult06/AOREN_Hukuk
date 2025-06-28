"use client"

import type React from "react"
import styled from "styled-components"
import { useRouter } from "next/navigation"

const MainContentContainer = styled.div`
  padding: 120px 40px 80px 40px;
  background: linear-gradient(135deg, #B7BABE 0%, #A8ACB0 50%, #9BA0A4 100%);
  backdrop-filter: blur(2px);
  color: #333;

  @media (max-width: 768px) {
    padding: 100px 20px 40px 20px;
  }
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
  color: #2C3E50;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const AboutSection = styled.section`
  max-width: 900px;
  margin: 0 auto 80px auto;
  text-align: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  padding: 40px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  p {
    font-size: 1.25rem;
    line-height: 1.8;
    margin-bottom: 30px;
    color: #34495E;
    font-weight: 500;
  }

  button {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: #2C3E50;
    padding: 15px 30px;
    border-radius: 12px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    text-transform: uppercase;
    letter-spacing: 0.5px;

    &:hover {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2));
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
  }
`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`

const NewsCard = styled.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 0.2);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .card-content {
    padding: 30px;
  }

  .card-date {
    font-size: 0.9rem;
    color: #3498DB;
    margin-bottom: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 20px;
    line-height: 1.4;
    color: #2C3E50;
    font-weight: 700;
  }

  .read-more {
    color: #3498DB;
    font-size: 0.95rem;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
      color: #2980B9;
      transform: translateX(5px);
    }
  }
`

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto 80px auto;
`

const TeamMember = styled.div`
  text-align: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 0.2);
  }
  
  .profile-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 auto 20px auto;
    background-color: #ddd;
    background-image: url('/placeholder-user.jpg');
    background-size: cover;
    background-position: center;
    border: 3px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
  
  h4 {
    font-size: 1.2rem;
    margin-bottom: 8px;
    color: #2C3E50;
    font-weight: 700;
  }
  
  p {
    font-size: 1rem;
    color: #3498DB;
    margin: 0;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`

interface Area {
  title: string;
  subtitle: string;
}

interface TeamSection {
  title: string;
  description: string;
}

interface ExpertiseSection {
  title: string;
  description: string;
  subtitle: string;
  areas: Area[];
}

interface MainContentProps {
  teamSection: TeamSection;
  expertiseSection: ExpertiseSection;
}

const MainContent: React.FC<MainContentProps> = ({ teamSection, expertiseSection }) => {
  const router = useRouter()

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
    { name: "Av. Abdullah ÖREN", title: "Kurucu Ortak" },
    { name: "Av. Ekin Tuncel", title: "Ceza Hukuku Uzmanı" },
    { name: "Av. Melis Bayraktar", title: "Aile Hukuku Uzmanı" },
    { name: "Av. Kerem Yıldız", title: "İş Hukuku Uzmanı" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navigateToPage = (path: string) => {
    router.push(path)
  }

  return (
    <MainContentContainer>
      <AboutSection>
        <p>
          AOREN, yüksek etki yaratan hukuk kadrosuyla 220'den fazla çalışanı ile hizmet vermektedir.
        </p>
        <button onClick={() => navigateToPage('/hakkimizda')}>Daha fazla bilgi</button>
      </AboutSection>

      <SectionTitle>Ekibimizden Öne Çıkanlar</SectionTitle>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} onClick={() => navigateToPage('/employees')}>
            <div className="profile-image"></div>
            <h4>{member.name}</h4>
            <p>{member.title}</p>
          </TeamMember>
        ))}
      </TeamGrid>

      <SectionTitle>AOREN'den Son Haberler</SectionTitle>
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

      <SectionTitle>Yaklaşan Seminerler</SectionTitle>
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
