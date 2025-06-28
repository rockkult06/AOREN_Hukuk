"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head"
import Header from "@/components/header"
import HeroSection from "@/components/HeroSection"
import Footer from "@/components/Footer"
import BackgroundVideo from "@/components/BackgroundVideo"
import styled from "styled-components"
import { Linkedin, Mail, X, Building, Globe, Handshake, Network, Users, Laptop, MapPin, MapPinned, Phone, GraduationCap, Scale, Leaf, Target, Briefcase, Upload, Send, LayoutDashboard, CheckCircle, FileSignature, MessageSquare, GitBranch, Clock } from "lucide-react"

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
      <section id="expertise" className="min-h-screen bg-[#949393] py-20">
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

      {/* Hakkımızda Bölümü */}
      <section id="about" className="min-h-screen bg-[#2F2F31] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Hakkımızda</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Building className="w-8 h-8 text-blue-400 mr-4" />
                <h3 className="text-2xl font-semibold text-white">AOREN Legal Services</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                AOREN Legal Services, klasik hukuk bürosu anlayışının ötesine geçerek, müvekkillerine yalnızca hukuki temsil değil, iş stratejileriyle entegre çözümler sunan bir danışmanlık ekosistemi olarak faaliyet gösterir. Her bir dava, yalnızca yasal bir süreç değil; iş hedeflerinize ve yaşam kalitenize doğrudan etki eden stratejik bir alandır.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-blue-400 mr-4" />
                <h3 className="text-2xl font-semibold text-white">Uluslararası Varlık</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Kurucu ortaklarımızın vizyonuyla temelleri Ankara'da atılan AOREN, kısa sürede ulusal sınırları aşarak Stuttgart, İstanbul ve Ankara'daki ofisleriyle uluslararası ölçekte hizmet sunan güvenilir bir hukuk markası haline gelmiştir.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Handshake className="w-8 h-8 text-blue-400 mr-4" />
                <h3 className="text-2xl font-semibold text-white">Stratejik Ortaklık Yaklaşımımız</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                AOREN, her müvekkiliyle uzun vadeli, güvene dayalı ilişkiler kurmayı hedefler. Hukuki çözümleri, yalnızca mevzuata uygunluk düzeyinde değil; işinizin sürdürülebilir büyümesini destekleyecek şekilde tasarlarız. Karmaşık problemler karşısında, farklı disiplinleri bir araya getirerek uygulanabilir, riskleri azaltan ve zaman kazandıran çözümler üretiriz.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Network className="w-8 h-8 text-blue-400 mr-4" />
                <h3 className="text-2xl font-semibold text-white">Uluslararası Yetenek & Yerel Derinlik</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Türkiye'deki güçlü hukuki ve akademik altyapımızı, Avrupa'daki stratejik ortaklıklarımızla tamamlıyoruz. Avrupa pazarındaki yatırımlardan Türkiye'deki aile şirketi yapılandırmalarına, çok dilli ve çok hukuklu sorunlara kadar, hem bireysel hem de kurumsal müvekkillerimize çok katmanlı bir temsil gücü sunuyoruz.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-blue-400 mr-4" />
                <h3 className="text-2xl font-semibold text-white">Disiplinlerarası Uzmanlık Ağı</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                AOREN çatısı altında yalnızca avukatlar değil; vergi uzmanları, siber güvenlik danışmanları, yeminli tercümanlar, finans analistleri ve akademik danışmanlar da görev alır. Böylece bir davaya yalnızca hukuki değil, ekonomik, teknolojik ve toplumsal perspektiflerle de bakarız.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Laptop className="w-8 h-8 text-blue-400 mr-4" />
                <h3 className="text-2xl font-semibold text-white">Dijital Dönüşüm ve Şeffaflık</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Hizmetlerimizi teknolojiyle güçlendirerek, şeffaf ve erişilebilir hale getiriyoruz. AOREN'e özel geliştirilen dijital müvekkil portalı sayesinde belgelerinize, dava süreçlerine ve danışmanlık raporlarına 7/24 erişebilirsiniz. Bu sayede, sizinle açık iletişimi sadece sözde değil, sistemsel olarak da sürdürüyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ofislerimiz Bölümü */}
      <section id="offices" className="min-h-screen bg-[#2F2F31] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Ofislerimiz</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              AOREN Legal Services olarak, Almanya ve Türkiye'deki üç stratejik merkez ofisimizle, müvekkillerimize yerel yakınlıkla birlikte küresel standartlarda hizmet sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Stuttgart Ofisi */}
            <div className="bg-black/30 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/40 transition-all duration-300 shadow-lg">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-blue-600 mr-4" />
                <h3 className="text-2xl font-semibold text-white">Stuttgart</h3>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Avrupa Operasyon Merkezi</h4>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Stratejik konumu sayesinde, sınır ötesi ticari işlemlerinizde güçlü bir üs niteliğindedir. Almanya'daki Türk girişimciler, Avrupa'ya açılmak isteyen şirketler ve diaspora toplulukları için özel çözümler geliştiriyoruz.
                </p>
              </div>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-start">
                  <MapPinned className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" />
                  <p>Neckarstraße 155, 70190 Stuttgart, Almanya</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-2" />
                  <p>+49 (0)711 123 45 67</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-2" />
                  <p>stuttgart@aorenlegal.com</p>
                </div>
              </div>
            </div>

            {/* İstanbul Ofisi */}
            <div className="bg-black/30 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/40 transition-all duration-300 shadow-lg">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-blue-600 mr-4" />
                <h3 className="text-2xl font-semibold text-white">İstanbul</h3>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Ticaret ve Finans Merkezi</h4>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Türkiye'nin ekonomik merkezinde yer alan İstanbul ofisimiz, yatırım, finans ve gayrimenkul işlemleriniz için uzman kadrosuyla hizmet verir. Anadolu ve Avrupa yakalarında ayrı danışman ekipleri ile hızlı ve kapsamlı çözümler sunar.
                </p>
              </div>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-start">
                  <MapPinned className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" />
                  <p>Büyükdere Caddesi No:233, Nurol Plaza, Kat:11, Levent, 34394 Şişli / İstanbul</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-2" />
                  <p>+90 (212) 345 67 89</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-2" />
                  <p>istanbul@aorenlegal.com</p>
                </div>
              </div>
            </div>

            {/* Ankara Ofisi */}
            <div className="bg-black/30 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/40 transition-all duration-300 shadow-lg">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-blue-600 mr-4" />
                <h3 className="text-2xl font-semibold text-white">Ankara</h3>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Koordinasyon ve Kamu İlişkileri Merkezi</h4>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Başkentteki ofisimiz, kamu kurumlarıyla etkili iletişim gerektiren dosyalar ve ülke çapındaki operasyonlarımızın koordinasyonu için özel bir merkezdir. Ayrıca, akademik iş birlikleri ve mevzuat takibi konusunda da destek sağlamaktadır.
                </p>
              </div>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-start">
                  <MapPinned className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" />
                  <p>Mustafa Kemal Mah. 2151. Cad. No:15, Kat:4, Çankaya / Ankara</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-2" />
                  <p>+90 (312) 456 78 90</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-2" />
                  <p>ankara@aorenlegal.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kurumsal Sosyal Sorumluluk Bölümü */}
      <section id="social-responsibility" className="min-h-screen bg-[#949393] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Kurumsal Sosyal Sorumluluk</h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed italic">
              Adalet sadece mahkeme salonlarında değil, toplumun her alanında inşa edilir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Hukuk Eğitimi */}
            <div className="bg-black/20 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/30 transition-all duration-300">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-12 h-12 text-blue-400 mr-4" />
                <h3 className="text-2xl font-semibold text-white">Hukuk Eğitimi</h3>
              </div>
              <p className="text-gray-100 leading-relaxed">
                Genç hukukçuların yetişmesine katkı sağlıyor, üniversitelerde mentorluk programları düzenliyor ve staj imkanları sunuyoruz.
              </p>
            </div>

            {/* Kadınların Adalete Erişimi */}
            <div className="bg-black/20 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/30 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Scale className="w-12 h-12 text-blue-400 mr-4" />
                <h3 className="text-2xl font-semibold text-white">Kadınların Adalete Erişimi</h3>
              </div>
              <p className="text-gray-100 leading-relaxed">
                Kadınların hukuki haklarını öğrenmeleri ve adalete erişimlerini kolaylaştırmak için ücretsiz danışmanlık hizmetleri sunuyoruz.
              </p>
            </div>

            {/* Çevresel Farkındalık */}
            <div className="bg-black/20 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/30 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Leaf className="w-12 h-12 text-blue-400 mr-4" />
                <h3 className="text-2xl font-semibold text-white">Çevresel Farkındalık</h3>
              </div>
              <p className="text-gray-100 leading-relaxed">
                Çevre hukuku alanında pro bono davalar üstleniyor ve sürdürülebilirlik projelerine hukuki destek sağlıyoruz.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-black/20 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/30 transition-all duration-300 max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Target className="w-12 h-12 text-blue-400 mr-4" />
                <h3 className="text-2xl font-semibold text-white">BM Sürdürülebilir Kalkınma Hedefleri</h3>
              </div>
              <p className="text-gray-100 leading-relaxed">
                AOREN olarak, BM Sürdürülebilir Kalkınma Hedefleri doğrultusunda hukuk eğitimi, kadınların adalete erişimi ve çevresel farkındalık projelerine destek veriyoruz.
              </p>
              <p className="text-2xl font-semibold text-white mt-6 italic">
                Toplum için, hukukla dönüşüm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AOREN'de Kariyer Bölümü */}
      <section id="career" className="min-h-screen bg-[#2F2F31] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">AOREN'de Kariyer</h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed italic mb-4">
              Kariyerinizde sıradan değil, stratejik bir adım atmak ister misiniz?
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-2">
              AOREN, sadece çalışılacak bir yer değil; gelişilecek, katkı sağlanacak ve birlikte üretilecek bir ekosistemdir.
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Stajyerden ortaklığa giden bu yolda sizi destekleyecek bir kariyer modeli sunuyoruz.
            </p>
          </div>

          {/* Kariyer Başvuru Formu */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-black/20 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8">
              <div className="flex items-center mb-8">
                <Briefcase className="w-8 h-8 text-blue-400 mr-4" />
                <h3 className="text-2xl font-semibold text-white">Kariyer Başvuru Formu</h3>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium">Ad</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Adınız"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium">Soyad</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Soyadınız"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">E-posta</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="E-posta adresiniz"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">Telefon</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Telefon numaranız"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">Başvurmak İstediğiniz Pozisyon</label>
                  <select className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="" className="bg-[#2F2F31]">Seçiniz</option>
                    <option value="stajyer" className="bg-[#2F2F31]">Stajyer Avukat</option>
                    <option value="junior" className="bg-[#2F2F31]">Junior Avukat</option>
                    <option value="senior" className="bg-[#2F2F31]">Senior Avukat</option>
                    <option value="uzman" className="bg-[#2F2F31]">Uzman</option>
                    <option value="diger" className="bg-[#2F2F31]">Diğer</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">Özgeçmiş (CV)</label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-white/20 border-dashed rounded-lg cursor-pointer bg-white/5 hover:bg-white/10">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 text-blue-400 mb-2" />
                        <p className="text-sm text-gray-300">PDF veya Word dosyası yükleyin</p>
                      </div>
                      <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">Mesajınız</label>
                  <textarea
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                    placeholder="Kendinizi tanıtın ve neden AOREN'de çalışmak istediğinizi belirtin"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Başvuruyu Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* AOREN Dijital Hizmetleri Bölümü */}
      <section id="digital-services" className="min-h-screen relative py-20">
        {/* Arkaplan Görseli */}
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: 'url(/digital.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px) brightness(0.3)',
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">AOREN Dijital Hizmetleri</h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed italic">
              Teknoloji, bizim için sadece bir araç değil, hizmetimizin ayrılmaz bir parçasıdır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Müvekkil Portalı */}
            <div className="bg-black/30 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <LayoutDashboard className="w-12 h-12 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">Müvekkil Portalı</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Dosyalarınıza 7/24 erişim imkanı sağlayan özel portalımız ile tüm hukuki süreçlerinizi tek bir platformdan takip edebilirsiniz.
              </p>
                              <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#DEA582] mr-2" />
                    Anlık dosya durumu takibi
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#DEA582] mr-2" />
                    Belge arşivine kolay erişim
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#DEA582] mr-2" />
                    Duruşma takvimi entegrasyonu
                  </li>
                </ul>
            </div>

            {/* Dijital İmza ve Belge Takibi */}
            <div className="bg-black/30 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <FileSignature className="w-12 h-12 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">Dijital İmza ve Belge Takibi</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Güvenli elektronik imza sistemi ile belge onay süreçlerinizi hızlandırın, kağıt israfını önleyin.
              </p>
                              <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#DEA582] mr-2" />
                    E-imza entegrasyonu
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#DEA582] mr-2" />
                    Otomatik versiyon kontrolü
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#DEA582] mr-2" />
                    Gelişmiş belge güvenliği
                  </li>
                </ul>
            </div>

            {/* Güvenli Mesajlaşma Sistemi */}
            <div className="bg-black/30 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <MessageSquare className="w-12 h-12 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">Güvenli Mesajlaşma Sistemi</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Uçtan uca şifrelenmiş mesajlaşma sistemi ile güvenli iletişim sağlayın.
              </p>
                              <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#DEA582] mr-2" />
                    Anlık bildirimler
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#DEA582] mr-2" />
                    Dosya paylaşımı
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#DEA582] mr-2" />
                    Görüntülü görüşme desteği
                  </li>
                </ul>
            </div>

            {/* Proaktif Süreç Yönetimi */}
            <div className="bg-black/30 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <GitBranch className="w-12 h-12 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">Proaktif Süreç Yönetimi</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Yapay zeka destekli süreç yönetimi ile olası riskleri önceden tespit edin.
              </p>
                              <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#DEA582] mr-2" />
                    Otomatik risk analizi
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#DEA582] mr-2" />
                    Vade takip sistemi
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#DEA582] mr-2" />
                    Akıllı hatırlatmalar
                  </li>
                </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed italic">
              Hukuki süreçlerinizi dijitalleştirirken, insan dokunuşundan ödün vermiyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* İletişim Bölümü */}
      <section id="contact" className="min-h-screen relative py-20">
        {/* Arkaplan Görseli */}
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: 'url(/contact.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px) brightness(0.3)',
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">İletişim</h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed italic mb-2">
              Bize ulaşmanız yeterli.
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-2">
              İster bir ilk danışma, ister kapsamlı bir iş birliği…
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Tüm sorularınız ve işbirliği talepleriniz için buradayız.
            </p>
          </div>

          {/* Ofis Bilgileri */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Stuttgart Ofisi */}
            <div className="bg-black/30 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">Stuttgart</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start text-gray-300">
                  <MapPinned className="w-5 h-5 text-[#D29F91] mr-2 mt-1" />
                  <p>Neckarstraße 155, 70190 Stuttgart, Almanya</p>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 text-[#D29F91] mr-2" />
                  <p>+49 (0)711 123 45 67</p>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 text-[#D29F91] mr-2" />
                  <p>stuttgart@aorenlegal.com</p>
                </div>
              </div>
            </div>

            {/* İstanbul Ofisi */}
            <div className="bg-black/30 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">İstanbul</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start text-gray-300">
                  <MapPinned className="w-5 h-5 text-[#D29F91] mr-2 mt-1" />
                  <p>Büyükdere Caddesi No:233, Nurol Plaza, Kat:11, Levent, 34394 Şişli / İstanbul</p>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 text-[#D29F91] mr-2" />
                  <p>+90 (212) 345 67 89</p>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 text-[#D29F91] mr-2" />
                  <p>istanbul@aorenlegal.com</p>
                </div>
              </div>
            </div>

            {/* Ankara Ofisi */}
            <div className="bg-black/30 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 hover:bg-black/40 transition-all duration-300">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">Ankara</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start text-gray-300">
                  <MapPinned className="w-5 h-5 text-[#D29F91] mr-2 mt-1" />
                  <p>Mustafa Kemal Mah. 2151. Cad. No:15, Kat:4, Çankaya / Ankara</p>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 text-[#D29F91] mr-2" />
                  <p>+90 (312) 456 78 90</p>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 text-[#D29F91] mr-2" />
                  <p>ankara@aorenlegal.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* İletişim Notu */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-[#DEA582] mr-3" />
              <p className="text-xl text-white/90">
                Telefon, e-posta ve müvekkil portalı üzerinden iletişim kanallarımız 7/24 açıktır.
              </p>
            </div>
          </div>

          {/* İletişim Formu */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-black/30 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8">
              <div className="flex items-center mb-8">
                <MessageSquare className="w-8 h-8 text-[#DEA582] mr-4" />
                <h3 className="text-2xl font-semibold text-white">İletişim Formu</h3>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium">Ad</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DEA582]"
                      placeholder="Adınız"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium">Soyad</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DEA582]"
                      placeholder="Soyadınız"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">E-posta</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DEA582]"
                    placeholder="E-posta adresiniz"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">Konu</label>
                  <select className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#DEA582]">
                    <option value="" className="bg-[#2F2F31]">Seçiniz</option>
                    <option value="danisma" className="bg-[#2F2F31]">İlk Danışma Talebi</option>
                    <option value="isbirligi" className="bg-[#2F2F31]">İş Birliği Talebi</option>
                    <option value="randevu" className="bg-[#2F2F31]">Randevu Talebi</option>
                    <option value="diger" className="bg-[#2F2F31]">Diğer</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">Mesajınız</label>
                  <textarea
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DEA582] h-32 resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#DEA582] hover:bg-[#D29F91] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Mesajı Gönder
                </button>
              </form>
            </div>
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
