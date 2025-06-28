"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head"
import Header from "@/components/header"
import HeroSection from "@/components/HeroSection"
import Footer from "@/components/Footer"
import BackgroundVideo from "@/components/BackgroundVideo"
import styled from "styled-components"
import { Linkedin, Mail, X } from "lucide-react"

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
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  color: #222;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.3);
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

// Uzmanlık alanları verileri
const expertiseData = [
  {
    title: "Aile Hukuku & Uluslararası Miras",
    subtitle: "Her aile biriciktir; hukuki ihtiyaçları da öyle.",
    description: "AOREN, karmaşık ailevi yapılar ve çok uluslu miras işlemlerinde, duygusal hassasiyetleri gözeterek etkili ve sürdürülebilir çözümler sunar. Boşanma, mal paylaşımı, evlilik sözleşmeleri, velayet düzenlemeleri gibi konularda yalnızca hukuki değil, stratejik danışmanlık da sağlarız.\n\nUluslararası miras planlamasında, farklı hukuk sistemleri ve vatandaşlık durumlarını göz önünde bulundurarak, varlıklarınızın nesiller arası aktarımını hukuki güvence altına alırız.",
    services: [
      "Mal rejimi ve boşanma protokolleri",
      "Varlık planlaması ve vasiyet düzenlemeleri", 
      "Uluslararası miras davaları",
      "Aile şirketi geçiş süreçleri"
    ]
  },
  {
    title: "Ticaret ve Şirketler Hukuku",
    subtitle: "Modern iş dünyasında hukuki alt yapı, stratejik başarı için temel unsurdur.",
    description: "AOREN, her ölçekten şirketin ticari yaşam döngüsüne eşlik eder. Kuruluş süreçlerinden birleşme ve devralmalara, pay sahipliği sözleşmelerinden yönetişim yapılarının yeniden tasarlanmasına kadar tüm aşamalarda yanınızdayız.\n\nYerli ve yabancı yatırımların hukuki yapılandırmalarında, sözleşme tasarımlarından rekabet hukukuna kadar geniş bir yelpazede destek sunarız.",
    services: [
      "Şirket kuruluşu ve genel kurul süreçleri",
      "Ortaklık sözleşmeleri ve hissedar yapıları",
      "Birleşme, bölünme ve devralmalar",
      "Ticaret sözleşmeleri ve uluslararası işlemler"
    ]
  },
  {
    title: "Gayrimenkul ve Yatırım Hukuku", 
    subtitle: "Yatırımlarınızın değeri, sağlam bir hukuki zemine dayanır.",
    description: "AOREN, prestijli gayrimenkul projeleri ve büyük ölçekli arsa yatırımları için kapsamlı hukuki destek sunar. Arsa geliştirme, tapu işlemleri, kentsel dönüşüm projeleri ve yatırım portföylerinin hukuki yönetimi konusunda uzmanız.\n\nPropTech alanındaki girişimlerden karma kullanım projelerine kadar, gayrimenkul alanında dijitalleşme ve sürdürülebilirlik eksenli çözümler geliştiriyoruz.",
    services: [
      "Alım-satım, kira ve tapu işlemleri",
      "İmar hukuku ve proje geliştirme danışmanlığı",
      "Arsa ortaklık sözleşmeleri",
      "Gayrimenkul yatırım fonları"
    ]
  },
  {
    title: "Ceza Hukuku ve Dijital Güvenlik",
    subtitle: "Savunmanız sadece hukuki değil, stratejik da olmalı.",
    description: "AOREN, ceza hukukunun en karmaşık alanlarında, özellikle beyaz yaka suçları, vergi kaçakçılığı, kara para aklama ve siber suçlar gibi konularda güçlü ve proaktif savunma stratejileri geliştirir.\n\nDijital güvenlik konularında, kişisel verilerin korunması, siber saldırı sonrası yasal müdahaleler ve itibar yönetimi süreçlerinde uzman desteği sağlıyoruz.",
    services: [
      "Ekonomik ve mali suçlar",
      "Siber suçlar ve veri güvenliği",
      "Basın ve sosyal medya hukuku",
      "Kişisel güvenlik ve tehdit yönetimi"
    ]
  },
  {
    title: "Uyum ve Risk Yönetimi",
    subtitle: "Yasal uyum, yalnızca bir zorunluluk değil; rekabet avantajıdır.",
    description: "AOREN, kurumsal yapılar için etik uyum politikaları, iç denetim sistemleri, KVKK ve GDPR süreçleri, harici bildirim mekanizmaları ve yolsuzlukla mücadele protokollerini içeren bütüncül çözümler geliştirir.\n\nRiskleri önceden tespit edip önleyici hukuki çerçeve sunarak, şirketinizin sürdürülebilirliğini destekliyoruz.",
    services: [
      "KVKK ve GDPR uyum denetimleri",
      "Etik politika ve işyeri iç tüzükleri",
      "Harici bildirim/whistleblower sistemleri",
      "Regülasyon takibi ve kriz yönetimi"
    ]
  },
  {
    title: "Kurumsal Finansman ve Girişim Sermayesi",
    subtitle: "Finansal kararların hukuki boyutu, yatırımınızın geleceğini belirler.",
    description: "AOREN, özel sermaye yatırımları, girişim sermayesi fonları, halka arzlar ve uluslararası yatırım süreçlerinde kapsamlı hukuki danışmanlık sunar.\n\nYatırımcı sözleşmelerinden ortaklık yapılandırmalarına, banka teminat sistemlerinden sermaye piyasası regülasyonlarına kadar tüm süreçleri iş stratejinizle uyumlu hale getiririz.",
    services: [
      "Girişim sermayesi ve yatırım turu danışmanlığı",
      "Bankacılık sözleşmeleri ve teminat yapıları",
      "Halka arz ve Borsa İstanbul işlemleri",
      "Finansal yeniden yapılandırma"
    ]
  }
]

export default function Home() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null)
  const [selectedExpertise, setSelectedExpertise] = useState<number | null>(null)

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      
      // Bu scroll event'i kaldırıyoruz çünkü otomatik scroll istemiyoruz
      // Kullanıcı manuel olarak scroll yapabilir
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      
      {/* Ekibimiz Bölümü */}
      <section id="team" className="min-h-screen bg-[#2F2F31] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Ekibimiz</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              AOREN Legal Services; her biri kendi uzmanlık alanında derin bilgiye ve uluslararası 
              deneyime sahip avukatlardan oluşan seçkin bir ekiple hizmet sunar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* İlk satır - 2 kişi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:col-span-2">
              {employeesData.slice(0, 2).map((member, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-[20px] border border-white/20 shadow-lg p-8 hover:shadow-xl hover:bg-white/15 transition-all duration-300 cursor-pointer hover:scale-105"
                  onClick={() => setSelectedMember(index)}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-[220px] h-[220px] rounded-[20px] overflow-hidden mb-6 bg-gray-200">
                      <img 
                        src={member.image || "/placeholder-user.jpg"} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder-user.jpg"
                        }}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-blue-300 font-semibold mb-4 text-center">{member.title}</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">{member.description}</p>
                    <div className="flex gap-3">
                      <button className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                        <Linkedin size={18} />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                        <Mail size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* İkinci satır - 2 kişi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:col-span-2">
              {employeesData.slice(2, 4).map((member, index) => (
                <div 
                  key={index + 2}
                  className="bg-white/10 backdrop-blur-sm rounded-[20px] border border-white/20 shadow-lg p-8 hover:shadow-xl hover:bg-white/15 transition-all duration-300 cursor-pointer hover:scale-105"
                  onClick={() => setSelectedMember(index + 2)}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-[220px] h-[220px] rounded-[20px] overflow-hidden mb-6 bg-gray-200">
                      <img 
                        src={member.image || "/placeholder-user.jpg"} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder-user.jpg"
                        }}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-blue-300 font-semibold mb-4 text-center">{member.title}</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">{member.description}</p>
                    <div className="flex gap-3">
                      <button className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                        <Linkedin size={18} />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                        <Mail size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Uzmanlık Alanlarımız Bölümü */}
      <section id="expertise" className="min-h-screen bg-[#462119] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#2F2F31] mb-6">Uzmanlık Alanlarımız</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              AOREN, hem bireysel hem kurumsal müvekkillerine geniş bir yelpazede hukuki destek sunar.
            </p>
            <p className="text-lg text-gray-600 font-medium">
              Uzmanlıklarımızdan bazıları:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {expertiseData.map((expertise, index) => (
              <div 
                key={index}
                className="bg-white/15 backdrop-blur-[10px] rounded-[20px] border border-white/20 shadow-2xl p-8 hover:shadow-xl hover:bg-white/25 transition-all duration-300 hover:scale-105 cursor-pointer min-h-[220px] flex flex-col justify-between"
                onClick={() => setSelectedExpertise(index)}
              >
                <div>
                  <h3 className="text-xl font-bold text-black mb-4 text-center leading-tight">
                    {expertise.title}
                  </h3>
                  <p className="text-black text-sm text-center leading-relaxed font-medium italic">
                    {expertise.subtitle}
                  </p>
                </div>
                <div className="mt-6 text-center">
                  <button className="bg-gradient-to-r from-white/20 to-white/10 text-white px-6 py-2 rounded-[12px] font-semibold text-sm hover:from-white/30 hover:to-white/20 transition-all duration-300 hover:scale-105 border border-white/30 backdrop-blur-sm">
                    Detayları Görün
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uzmanlık Alanları Modal */}
      {selectedExpertise !== null && (
        <ModalOverlay onClick={() => setSelectedExpertise(null)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <ModalClose onClick={() => setSelectedExpertise(null)}><X size={28} /></ModalClose>
            <div className="w-full">
              <ModalTitle>{expertiseData[selectedExpertise].title}</ModalTitle>
              <ModalSubtitle>{expertiseData[selectedExpertise].subtitle}</ModalSubtitle>
              <ModalText style={{whiteSpace:'pre-line'}}>{expertiseData[selectedExpertise].description}</ModalText>
              <ModalLabel>Hizmet Başlıklarımız:</ModalLabel>
              <ModalList>
                {expertiseData[selectedExpertise].services.map((service, i) => (
                  <li key={i}>{service}</li>
                ))}
              </ModalList>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Ekibimiz Modal */}
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
