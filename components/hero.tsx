import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Users, Award } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Hukuki Haklarınızı
            <span className="text-blue-400 block">Koruyoruz</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Aoren Hukuk, yasal danışmanlık ve arabuluculuk hizmetlerinde uzman kadrosuyla müvekkillerinin haklarını en
            iyi şekilde savunur.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              Ücretsiz Danışmanlık Alın
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4"
            >
              Hizmetlerimizi İnceleyin
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Shield className="h-8 w-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-gray-300">Başarılı Dava</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Users className="h-8 w-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">1000+</div>
              <div className="text-gray-300">Memnun Müvekkil</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Award className="h-8 w-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">15+</div>
              <div className="text-gray-300">Yıllık Deneyim</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
