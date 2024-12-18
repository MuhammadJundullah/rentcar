import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer"; // Import hook intersection observer
import { useSpring, animated } from "@react-spring/web";

function Carousel() {
  const [inView, setInView] = useState(false);

  // Intersection Observer hook untuk mendeteksi elemen yang masuk viewport
  const { ref, inView: isInView } = useInView({
    triggerOnce: true, // Animasi hanya dijalankan sekali
    threshold: 0.3, // Elemen dianggap masuk viewport ketika 30% terlihat
  });

  // React Spring animasi untuk gambar
  const imgAnimation = useSpring({
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translateY(0)" : "translateY(20px)",
    config: { tension: 280, friction: 60 },
  });

  // React Spring animasi untuk heading
  const h1Animation = useSpring({
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translateY(0)" : "translateY(-20px)",
    config: { tension: 280, friction: 60 },
  });

  return (
    <div className="hero bg-base-200 min-h-screen relative">
      {/* Video sebagai latar belakang */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/media/videoplayback.webm"
        autoPlay
        loop
        muted></video>

      {/* Konten di atas video */}
      <div className="hero-content text-center relatives py-32">
        <div className="flex py-20 items-center justify-center flex-col ">
          <animated.img
            ref={ref} // Menambahkan ref agar terdeteksi oleh Intersection Observer
            className="max-w-md rounded-full  w-1/2 sm:w-full mx-20 sm:mx-0"
            src="/media/logo.png"
            alt="Logo"
            style={imgAnimation} // Mengaplikasikan animasi pada gambar
          />
          <animated.h1
            style={h1Animation} // Mengaplikasikan animasi pada h1
            className="sm:text-5xl font-light text-white text-2xl w-full ">
            Pilih Paket Tour Favorit anda.
          </animated.h1>
          <p className="py-6 text-gray-200">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
