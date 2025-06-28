"use client";
import React, { useEffect, useRef } from "react";
import Head from "next/head"
import Header from "@/components/header"
import HeroSection from "@/components/HeroSection"
import TeamSection from "@/components/TeamSection"
import Footer from "@/components/Footer"
import BackgroundVideo from "@/components/BackgroundVideo"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      // Eğer kullanıcı yukarıya scroll yapıyorsa ve sayfanın üstüne yaklaşıyorsa, hero section'a smooth scroll
      if (currentY < window.innerHeight * 0.5 && lastScrollY.current > currentY) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      lastScrollY.current = currentY;
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      // Kullanıcı hero section'dan aşağıya kaydırınca yönlendir
      if (window.scrollY > window.innerHeight * 0.3) {
        router.push("/employees")
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
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
      <TeamSection />
      <Footer />
    </>
  )
}
