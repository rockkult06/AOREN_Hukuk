"use client"

import Header from "@/components/header"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail, ArrowRight } from "lucide-react"

const employeesData = [
  {
    name: "Av. Abdullah ÖREN",
    title: "Kurucu Ortak",
    specialization: "Ticaret ve Uluslararası Yatırım Hukuku Uzmanı",
    description: "BRAO 206 kapsamında yetkilendirilmiş deneyimiyle, stratejik danışmanlık yaklaşımının hukukla kesiştiği noktada liderlik eder.",
    image: "/1.jpg",
    experience: "20+ yıl deneyim",
  },
  {
    name: "Av. Ekin Tuncel",
    title: "Ceza Hukuku ve İtibar Yönetimi Uzmanı",
    specialization: "Basın hukuku ve beyaz yaka suçları",
    description: "Basın hukuku ve beyaz yaka suçları alanındaki etkin savunma stratejileriyle tanınır.",
    image: "/2.jpg",
    experience: "15+ yıl deneyim",
  },
  {
    name: "Av. Melis Bayraktar",
    title: "Aile Hukuku ve Uluslararası Miras Hukuku Uzmanı",
    specialization: "Karmaşık kişisel ilişki dosyaları",
    description: "Karmaşık kişisel ilişki dosyalarında empatiyle yaklaşırken, yüksek hassasiyetle çözüm üretir.",
    image: "/4.jpg",
    experience: "12+ yıl deneyim",
  },
  {
    name: "Av. Kerem Yıldız",
    title: "İş Hukuku ve Kurumsal Uyum Danışmanı",
    specialization: "Şirket içi insan kaynakları süreçleri",
    description: "Şirket içi insan kaynakları süreçleri, risk yönetimi ve etik uyum konularında uzmanlaşmıştır.",
    image: "/3.jpg",
    experience: "10+ yıl deneyim",
  },
  {
    name: "Av. Derya Aksoy",
    title: "Gayrimenkul ve PropTech Hukuku Uzmanı",
    specialization: "Yüksek ölçekli projeler",
    description: "Yüksek ölçekli projelerde yatırım yapılandırması ve sözleşme yönetimi konularında stratejik çözümler geliştirir.",
    image: "/placeholder-user.jpg",
    experience: "8+ yıl deneyim",
  },
]

export default function EmployeesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-20">
        {/* Hero Section */}
        <section id="team-page-hero" className="py-20 text-center relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ekibimiz
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              AOREN Legal Services; her biri kendi uzmanlık alanında derin bilgiye ve uluslararası deneyime sahip avukatlardan oluşan seçkin bir ekiple hizmet sunar.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {employeesData.map((member, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105">
                    {/* Profile Image */}
                    <div className="relative mb-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
                        <img
                          src={member.image || "/placeholder-user.jpg"}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {member.experience}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-blue-300 font-semibold mb-3 text-sm">
                        {member.title}
                      </p>
                      <p className="text-gray-300 text-sm mb-4 font-medium">
                        {member.specialization}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {member.description}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex justify-center space-x-3 mb-4">
                        <button className="p-3 bg-white/10 hover:bg-blue-500 hover:text-white rounded-full transition-all duration-300 border border-white/20 hover:border-blue-500">
                          <Linkedin className="h-4 w-4" />
                        </button>
                        <button className="p-3 bg-white/10 hover:bg-blue-500 hover:text-white rounded-full transition-all duration-300 border border-white/20 hover:border-blue-500">
                          <Mail className="h-4 w-4" />
                        </button>
                      </div>

                      {/* View Profile Button */}
                      <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg">
                        <span>Profili Görüntüle</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ekibimizle Tanışın
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Uzman avukatlarımızla hukuki sorunlarınızı çözmek için hazırız. 
                Ücretsiz danışmanlık için hemen iletişime geçin.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                İletişime Geçin
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
