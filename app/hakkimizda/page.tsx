"use client"

import { motion } from "framer-motion"
import styled from "styled-components"
import { Building, Users, Globe, Brain, Monitor, HandshakeIcon } from "lucide-react"
import Footer from "@/components/Footer"

const PageContainer = styled.div`
  min-height: 100vh;
  background: #2F2F31;
  color: white;
`

const HeroSection = styled.section`
  position: relative;
  padding: 120px 0 60px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.4));
  text-align: center;
`

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #fff 0%, #64B5F6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Section = styled.section`
  padding: 80px 0;
  position: relative;
  overflow: hidden;

  &:nth-child(odd) {
    background: rgba(255,255,255,0.02);
  }
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  color: #64B5F6;
`

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: rgba(255,255,255,0.9);
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`

const Card = styled(motion.div)`
  background: rgba(255,255,255,0.05);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #64B5F6;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  p {
    color: rgba(255,255,255,0.8);
    line-height: 1.6;
  }
`

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function HakkimizdaPage() {
  return (
    <PageContainer>
      <HeroSection>
        <MainContent>
          <Title>Hakkımızda</Title>
          <Text>
            AOREN Legal Services, klasik hukuk bürosu anlayışının ötesine geçerek, müvekkillerine yalnızca hukuki temsil değil, 
            iş stratejileriyle entegre çözümler sunan bir danışmanlık ekosistemi olarak faaliyet gösterir. Her bir dava, yalnızca yasal bir süreç değil; 
            iş hedeflerinize ve yaşam kalitenize doğrudan etki eden stratejik bir alandır.
          </Text>
          <Text>
            Kurucu ortaklarımızın vizyonuyla temelleri Ankara'da atılan AOREN, kısa sürede ulusal sınırları aşarak Stuttgart, İstanbul ve Ankara'daki 
            ofisleriyle uluslararası ölçekte hizmet sunan güvenilir bir hukuk markası haline gelmiştir.
          </Text>
        </MainContent>
      </HeroSection>

      <Section>
        <MainContent>
          <SectionTitle>Stratejik Ortaklık Yaklaşımımız</SectionTitle>
          <Text>
            AOREN, her müvekkiliyle uzun vadeli, güvene dayalı ilişkiler kurmayı hedefler. Hukuki çözümleri, yalnızca mevzuata uygunluk düzeyinde değil; 
            işinizin sürdürülebilir büyümesini destekleyecek şekilde tasarlarız. Karmaşık problemler karşısında, farklı disiplinleri bir araya getirerek 
            uygulanabilir, riskleri azaltan ve zaman kazandıran çözümler üretiriz.
          </Text>
        </MainContent>
      </Section>

      <Section>
        <MainContent>
          <SectionTitle>Uluslararası Yetenek & Yerel Derinlik</SectionTitle>
          <Text>
            Türkiye'deki güçlü hukuki ve akademik altyapımızı, Avrupa'daki stratejik ortaklıklarımızla tamamlıyoruz. Avrupa pazarındaki yatırımlardan 
            Türkiye'deki aile şirketi yapılandırmalarına, çok dilli ve çok hukuklu sorunlara kadar, hem bireysel hem de kurumsal müvekkillerimize çok 
            katmanlı bir temsil gücü sunuyoruz.
          </Text>
        </MainContent>
      </Section>

      <Section>
        <MainContent>
          <SectionTitle>Disiplinlerarası Uzmanlık Ağı</SectionTitle>
          <Text>
            AOREN çatısı altında yalnızca avukatlar değil; vergi uzmanları, siber güvenlik danışmanları, yeminli tercümanlar, finans analistleri ve 
            akademik danışmanlar da görev alır. Böylece bir davaya yalnızca hukuki değil, ekonomik, teknolojik ve toplumsal perspektiflerle de bakarız.
          </Text>
        </MainContent>
      </Section>

      <Section>
        <MainContent>
          <SectionTitle>Dijital Dönüşüm ve Şeffaflık</SectionTitle>
          <Text>
            Hizmetlerimizi teknolojiyle güçlendirerek, şeffaf ve erişilebilir hale getiriyoruz. AOREN'e özel geliştirilen dijital müvekkil portalı 
            sayesinde belgelerinize, dava süreçlerine ve danışmanlık raporlarına 7/24 erişebilirsiniz. Bu sayede, sizinle açık iletişimi sadece sözde 
            değil, sistemsel olarak da sürdürüyoruz.
          </Text>
        </MainContent>
      </Section>

      <Section>
        <MainContent>
          <SectionTitle>Bizimle Çalıştığınızda</SectionTitle>
          <Grid>
            <Card
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3><HandshakeIcon size={24} /> Güvenilir Süreç</h3>
              <p>Her aşaması danışılmış, öngörülmüş ve açıklanmış bir hukuki sürece dahil olursunuz.</p>
            </Card>

            <Card
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3><Building size={24} /> Sürdürülebilir Çözümler</h3>
              <p>Kısa vadeli başarılar yerine, sürdürülebilir ve bütüncül çözümler elde edersiniz.</p>
            </Card>

            <Card
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3><Globe size={24} /> Uluslararası Standartlar</h3>
              <p>Uluslararası standartlarda hizmet veren, yerel duyarlılığı güçlü bir ekipten destek alırsınız.</p>
            </Card>

            <Card
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3><Users size={24} /> Uzman Ağı</h3>
              <p>Yalnızca bir avukata değil; çözüm odaklı düşünen, disiplinler arası bir uzmanlar ağına erişirsiniz.</p>
            </Card>
          </Grid>
        </MainContent>
      </Section>

      <Footer />
    </PageContainer>
  )
} 