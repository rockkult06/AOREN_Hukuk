"use client"

import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/Footer'
import { Building, Mail, Phone, Globe, Shield, FileText, Scale } from 'lucide-react'

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#2F2F31]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-[#2F2F31] via-[#3A3A3C] to-[#2F2F31]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Impressum</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Angaben gemäß § 5 TMG (Telemediengesetz)
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white/10 backdrop-blur-[10px] rounded-[20px] border border-white/20 p-8 space-y-8">
            
            {/* Firmen Angaben */}
            <div className="border-b border-white/20 pb-8">
              <div className="flex items-center mb-6">
                <Building className="w-8 h-8 text-[#DEA582] mr-4" />
                <h2 className="text-3xl font-bold text-white">Firmenangaben</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">AOREN Legal Services</h3>
                  <p>Rechtsanwaltskanzlei für internationales Wirtschaftsrecht</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Vertretungsberechtigter Geschäftsführer:</h4>
                  <p>Rechtsanwalt Abdullah ÖREN</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Anschrift der Hauptniederlassung:</h4>
                  <p>Friedrichstraße 15, 70174 Stuttgart, Almanya</p>
                </div>
              </div>
            </div>

            {/* Kontakt */}
            <div className="border-b border-white/20 pb-8">
              <div className="flex items-center mb-6">
                <Mail className="w-8 h-8 text-[#DEA582] mr-4" />
                <h2 className="text-3xl font-bold text-white">Kontakt</h2>
              </div>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-[#DEA582] mr-3" />
                  <span>Telefon: +49 1511</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-[#DEA582] mr-3" />
                  <span>E-Mail: info@aoren.eu</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-[#DEA582] mr-3" />
                  <span>Website: www.aoren.eu</span>
                </div>
              </div>
            </div>

            {/* Umsatzsteuer */}
            <div className="border-b border-white/20 pb-8">
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-[#DEA582] mr-4" />
                <h2 className="text-3xl font-bold text-white">Umsatzsteuer-ID</h2>
              </div>
              <p className="text-gray-300">
                Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: <span className="text-white font-semibold">DE123456789</span>
              </p>
            </div>

            {/* Aufsichtsbehörde */}
            <div className="border-b border-white/20 pb-8">
              <div className="flex items-center mb-6">
                <Scale className="w-8 h-8 text-[#DEA582] mr-4" />
                <h2 className="text-3xl font-bold text-white">Zuständige Aufsichtsbehörde</h2>
              </div>
              <div className="text-gray-300">
                <p className="font-semibold text-white">Rechtsanwaltskammer Stuttgart</p>
                <p>Königstraße 14<br />70173 Stuttgart</p>
                <a href="https://www.rak-stuttgart.de" target="_blank" rel="noopener noreferrer" 
                   className="text-[#DEA582] hover:text-[#D29F91] transition-colors">
                  www.rak-stuttgart.de
                </a>
              </div>
            </div>

            {/* Berufsbezeichnung */}
            <div className="border-b border-white/20 pb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Berufsbezeichnung</h2>
              <p className="text-gray-300">
                Rechtsanwalt (verliehen in der Bundesrepublik Deutschland)
              </p>
            </div>

            {/* Berufsrechtliche Regelungen */}
            <div className="border-b border-white/20 pb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Berufsrechtliche Regelungen</h2>
              <p className="text-gray-300 mb-4">Die maßgeblichen berufsrechtlichen Regelungen sind:</p>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Bundesrechtsanwaltsordnung (BRAO)</li>
                <li>Berufsordnung für Rechtsanwälte (BORA)</li>
                <li>Fachanwaltsordnung (FAO)</li>
                <li>Rechtsanwaltsvergütungsgesetz (RVG)</li>
                <li>Berufsregeln der Rechtsanwälte der Europäischen Union (CCBE)</li>
              </ul>
              <p className="text-gray-300 mt-4">
                Diese Regelungen sind einsehbar unter: 
                <a href="https://www.brak.de" target="_blank" rel="noopener noreferrer" 
                   className="text-[#DEA582] hover:text-[#D29F91] transition-colors ml-2">
                  www.brak.de
                </a>
              </p>
            </div>

            {/* Berufshaftpflichtversicherung */}
            <div className="border-b border-white/20 pb-8">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-[#DEA582] mr-4" />
                <h2 className="text-3xl font-bold text-white">Berufshaftpflichtversicherung</h2>
              </div>
              <div className="text-gray-300">
                <p className="font-semibold text-white">HDI Versicherung AG</p>
                <p>HDI-Platz 1, 30659 Hannover</p>
                <p className="mt-2">
                  <span className="font-semibold text-white">Räumlicher Geltungsbereich:</span> 
                  Europaweit für Kanzleitätigkeiten im Rahmen des europäischen Rechts.
                </p>
              </div>
            </div>

            {/* Haftungsausschluss */}
            <div className="border-b border-white/20 pb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Haftungsausschluss</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Haftung für Inhalte:</h3>
                  <p className="text-gray-300">
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                    Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Haftung für Links:</h3>
                  <p className="text-gray-300">
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir 
                    keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir keine Gewähr.
                  </p>
                </div>
              </div>
            </div>

            {/* Urheberrecht */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Urheberrecht</h2>
              <p className="text-gray-300">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung und Verbreitung außerhalb der 
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung von AOREN Legal Services.
              </p>
            </div>

            {/* Letzte Aktualisierung */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-sm text-gray-400 text-center">
                Letzte Aktualisierung: {new Date().toLocaleDateString('de-DE')}
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 