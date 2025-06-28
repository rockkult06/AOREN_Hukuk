"use client"

import { useRef, useEffect } from "react"

const BackgroundVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleVideoEnd = () => {
      // Video bittiğinde baştan başlat
      video.currentTime = 0
      video.play().catch(console.error)
    }

    const handleCanPlay = () => {
      video.play().catch(console.error)
    }

    const handleError = () => {
      console.error("Video yükleme hatası: bgvideo_1_2.mp4")
    }

    // Event listener'ları ekle
    video.addEventListener('ended', handleVideoEnd)
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('error', handleError)
    
    // Video kaynağını yükle
    video.load()
    
    return () => {
      video.removeEventListener('ended', handleVideoEnd)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('error', handleError)
    }
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
        loop
      >
        <source src="/bgvideo_1_2.mp4" type="video/mp4" />
        Tarayıcınız video elementini desteklemiyor.
      </video>
      
      {/* Koyu filtre overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-10"></div>
    </div>
  )
}

export default BackgroundVideo 