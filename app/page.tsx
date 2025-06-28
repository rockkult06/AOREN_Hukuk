import Head from "next/head"
import Header from "@/components/header"
import HeroSection from "@/components/HeroSection"
import Footer from "@/components/Footer"
import BackgroundVideo from "@/components/BackgroundVideo"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      // Kullanıcı hero section'dan aşağıya kaydırınca yönlendir
      if (window.scrollY > window.innerHeight * 0.5) {
        router.push("/employees")
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [router])

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
      <Footer />
    </>
  )
}
