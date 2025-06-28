"use client"

import Header from "@/components/header"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"

const employeesData = [
  {
    name: "Av. Mehmet Aoren",
    title: "Kurucu Ortak",
    specialization: "Ticaret Hukuku, Kurumsal Hukuk",
    image: "/images/employee-1.png",
    experience: "20+ yıl deneyim",
  },
  {
    name: "Av. Ayşe Kaya",
    title: "Ortak Avukat",
    specialization: "Aile Hukuku, Miras Hukuku",
    image: "/images/employee-2.png",
    experience: "15+ yıl deneyim",
  },
  {
    name: "Av. Can Demir",
    title: "Kıdemli Avukat",
    specialization: "Ceza Hukuku, İcra İflas",
    image: "/images/employee-3.png",
    experience: "12+ yıl deneyim",
  },
  {
    name: "Av. Zeynep Öz",
    title: "Avukat",
    specialization: "İş Hukuku, Sosyal Güvenlik",
    image: "/images/employee-4.png",
    experience: "8+ yıl deneyim",
  },
  {
    name: "Av. Ali Yılmaz",
    title: "Avukat",
    specialization: "Gayrimenkul Hukuku",
    image: "/images/employee-5.png",
    experience: "7+ yıl deneyim",
  },
  {
    name: "Av. Fatma Şen",
    title: "Avukat",
    specialization: "Tüketici Hukuku",
    image: "/images/employee-6.png",
    experience: "6+ yıl deneyim",
  },
  {
    name: "Av. Burak Can",
    title: "Avukat",
    specialization: "Bilişim Hukuku",
    image: "/images/employee-7.png",
    experience: "5+ yıl deneyim",
  },
  {
    name: "Av. Elif Su",
    title: "Avukat",
    specialization: "Fikri Mülkiyet Hukuku",
    image: "/images/employee-8.png",
    experience: "4+ yıl deneyim",
  },
]

export default function EmployeesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-20">
        {" "}
        {/* Added pt-20 to account for fixed header */}
        <section id="team-page-hero" className="py-16 bg-white text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Ekibimiz</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alanında uzman, deneyimli avukatlarımızla hukuki sorunlarınıza en iyi çözümleri sunuyoruz.
            </p>
          </div>
        </section>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {employeesData.map((member, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{member.title}</p>
                    <p className="text-sm text-gray-600 mb-3">{member.specialization}</p>
                    <p className="text-xs text-gray-500 mb-4">{member.experience}</p>

                    <div className="flex justify-center space-x-3">
                      <button className="p-2 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full transition-colors duration-200">
                        <Linkedin className="h-4 w-4" />
                      </button>
                      <button className="p-2 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full transition-colors duration-200">
                        <Mail className="h-4 w-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
