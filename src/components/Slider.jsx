"use client"
import React from 'react'
import Image from 'next/image'

const Slider = () => {

    const logos = [
        "https://i.postimg.cc/qqbR0qnL/Mongo-DB-512.png",
        "https://i.postimg.cc/gcNr3S5Z/nodejs-512.png",
        "https://i.postimg.cc/Hk7xDpLw/tailwind-512.png",
        "https://i.postimg.cc/XqqJNhF5/java.png",
        "https://i.postimg.cc/y60Bc76N/spring-boot.png",
        "https://i.postimg.cc/qqbR0qnL/Mongo-DB-512.png",
        "https://i.postimg.cc/gcNr3S5Z/nodejs-512.png",
        "https://i.postimg.cc/Hk7xDpLw/tailwind-512.png",
        "https://i.postimg.cc/XqqJNhF5/java.png",
        "https://i.postimg.cc/y60Bc76N/spring-boot.png",
        "https://i.postimg.cc/qqbR0qnL/Mongo-DB-512.png",
        "https://i.postimg.cc/gcNr3S5Z/nodejs-512.png",
        "https://i.postimg.cc/Hk7xDpLw/tailwind-512.png",
        "https://i.postimg.cc/XqqJNhF5/java.png",
        "https://i.postimg.cc/y60Bc76N/spring-boot.png",
        "https://i.postimg.cc/qqbR0qnL/Mongo-DB-512.png",
        "https://i.postimg.cc/gcNr3S5Z/nodejs-512.png",
        "https://i.postimg.cc/Hk7xDpLw/tailwind-512.png",
        "https://i.postimg.cc/XqqJNhF5/java.png",
        "https://i.postimg.cc/y60Bc76N/spring-boot.png",
        "https://i.postimg.cc/qqbR0qnL/Mongo-DB-512.png",
        "https://i.postimg.cc/gcNr3S5Z/nodejs-512.png",
        "https://i.postimg.cc/Hk7xDpLw/tailwind-512.png",
        "https://i.postimg.cc/XqqJNhF5/java.png",
        "https://i.postimg.cc/y60Bc76N/spring-boot.png",
      ]

  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full mb-8">
      <div className="flex items-center space-x-10 animate-marquee ">
        {logos.map((logo, index) => (
          <Image key={index} src={logo} alt={`Logo ${index}`} width={120} height={60} />
        ))}
        {logos.map((logo, index) => (
          <Image key={`duplicate-${index}`} src={logo} alt={`Logo ${index}`} width={120} height={60} />
        ))}
      </div>
    </div>
  )
}

export default Slider