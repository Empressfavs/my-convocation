
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";




export default function Home() {
    const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Music could not play:", error);
      }
    }
  };
  return (
    <main className="min-h-screen bg-[#F8F6F0] text-[#173D30]">
      <audio
  ref={audioRef}
  src="/Music/background.mp3"
  autoPlay
  loop
  preload="auto"
  onPlay={() => setIsPlaying(true)}
  onPause={() => setIsPlaying(false)}
/>
<button
  onClick={toggleMusic}
  className="fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full bg-[#173D30] text-[#D9BD83] shadow-xl border border-[#D9BD83] flex items-center justify-center hover:scale-110 transition-transform"
  aria-label={isPlaying ? "Pause music" : "Play music"}
>
  {isPlaying ? "Ⅱ" : "♫"}
</button>
      <nav className="sticky top-0 z-50 bg-[#F8F5ED]/95 backdrop-blur-md border-b border-[#D9BD83]/40 px-6 py-5">
  <div className="max-w-6xl mx-auto flex justify-center items-center gap-3 md:gap-10 flex-nowrap">
    <a href="#" className="text-[#173D30] text-xs hover:text-[#A8874A] transition-colors">Home</a>
    <a href="#journey" className="text-[#173D30] text-xs hover:text-[#A8874A] transition-colors">My Journey</a>
    <a href="#achievement" className="text-[#173D30] text-xs hover:text-[#A8874A] transition-colors">Achievement</a>
    <a href="#gallery" className="text-[#173D30] text-xs hover:text-[#A8874A] transition-colors">Gallery</a>
    <a href="#gratitude" className="text-[#173D30] text-xs hover:text-[#A8874A] transition-colors">Gratitude</a>
  </div>
</nav>
      <nav className="flex items-center justify-between px-6 md:px-16 py-7">
        <h2 className="font-serif text-xl tracking-wide">
          My Journey.
        </h2>

        <a
          href="#journey"
          className="text-sm border-b border-[#173D30] pb-1"
        >
          Explore My Story ↓
        </a>
      </nav>

      <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="uppercase tracking-[0.35em] text-xs mb-8 text-[#A8874A]"
        >
          A new chapter begins
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="font-serif text-5xl md:text-8xl leading-tight"
        >
         AVWOPIABRO
<br />
FAVOUR ADA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
          className="mt-8 text-sm md:text-base max-w-md leading-7 text-gray-600"
        >
          A journey of faith, growth, determination
          and beautiful new beginnings.
          Today, I celebrate how far I've come.
        </motion.p>

        <motion.a
          href="#journey"
          initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1, delay: 3.6, ease: "easeOut" }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="mt-10 bg-[#173D30] text-white px-9 py-4 rounded-full text-sm"
        >
          A Moment Worth Celebrating ✨
        </motion.a>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 text-xs tracking-widest text-[#A8874A]"
        >
          SCROLL TO EXPLORE ↓
        </motion.div>


<motion.div
  initial={{ opacity: 0, y: 40, scale: 0.96 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1.2, delay: 2.3, ease: "easeOut" }}
  className="relative mt-12 w-full max-w-md"
>
  {Array.from({ length: 8 }).map((_, strand) => (
    <motion.div
      key={strand}
      initial={{ y: 0, opacity: 0 }}
      animate={{
        y: -520,
        x: [0, strand % 2 === 0 ? 12 : -12, 0],
        opacity: [0, 0.9, 0.9, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 10 + (strand % 4) * 2,
        repeat: Infinity,
        delay: strand * 1.3,
        ease: "linear",
      }}
      className="absolute z-20 pointer-events-none"
      style={{
        left: strand % 2 === 0
          ? `${4 + (strand % 4) * 3}%`
          : `${84 + (strand % 4) * 3}%`,
        bottom: "-8%",
        width: "16px",
        height: "42px",
      }}
    >
      <svg viewBox="0 0 16 42" width="16" height="42">
        <defs>
          <linearGradient
            id={`gold-gradient-${strand}`}
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop offset="0%" stopColor="#996515" />
            <stop offset="35%" stopColor="#FFD700" />
            <stop offset="55%" stopColor="#FFF4C2" />
            <stop offset="80%" stopColor="#D4A017" />
            <stop offset="100%" stopColor="#996515" />
          </linearGradient>
        </defs>

        <path
          d="M8 0 C-2 5 18 10 8 15 C-2 20 18 25 8 30 C2 34 4 39 8 42"
          fill="none"
          stroke={`url(#gold-gradient-${strand})`}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  ))}

  <Image
    src="/images/convo1.JPG"
    alt="Avwopiabro Favour Ada's graduation portrait"
    width={800}
    height={1000}
    priority
    className="w-full h-auto rounded-2xl shadow-xl"
  />
</motion.div>

      </section>

      
<section
  id="journey"
  className="py-28 px-6 md:px-20 bg-[#F1EEE5]"
>
  <div className="max-w-4xl mx-auto">

    <p className="text-[#A8874A] uppercase tracking-[0.3em] text-xs text-center">
      The road that brought me here
    </p>

    <h2 className="font-serif text-4xl md:text-6xl text-center mt-6 mb-20">
      My Academic Journey.
    </h2>

    <div className="relative border-l-2 border-[#C5A15B] ml-3 md:ml-10 space-y-16 pl-8 md:pl-14">

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="absolute -left-[9px] w-4 h-4 rounded-full bg-[#173D30]" />

        <p className="text-[#A8874A] tracking-widest text-sm">
          2019 — 2022
        </p>

        <h3 className="font-serif text-3xl mt-3">
          The Beginning.
        </h3>

        <p className="mt-4 text-gray-600 leading-8">
  Ordinary National Diploma (OND)
  <br />
  Science Laboratory Technology
  <br />
  Yaba College of Technology.
</p>

<p className="mt-5 text-gray-500 leading-8 text-sm md:text-base">
  Every great journey has a beginning, and mine started with a difficult season. I had almost given up on furthering my education until my brother stepped in with encouragement and support, giving me a reason to try again. What seemed like a little push became a blessing in disguise. I enrolled in a part-time Science Laboratory Technology programme, unknowingly taking the first step towards the woman I am becoming today.
</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="absolute -left-[9px] w-4 h-4 rounded-full bg-[#173D30]" />

        <p className="text-[#A8874A] tracking-widest text-sm">
          2024 — 2026
        </p>

        <h3 className="font-serif text-3xl mt-3">
          Growing Further.
        </h3>

        <p className="mt-4 text-gray-600 leading-8">
  Higher National Diploma (HND)
  <br />
  Physics with Electronics
  <br />
  Yaba College of Technology.
</p>

<p className="mt-5 text-gray-500 leading-8 text-sm md:text-base">
  But I didn't stop at the beginning. I chose to keep growing, keep learning, and push beyond my previous achievements, with the constant support of my loved ones. My journey through Physics with Electronics became another chapter of growth, determination, and self-discovery, shaping not just my academic path but the woman I am continually becoming.
</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="absolute -left-[9px] w-4 h-4 rounded-full bg-[#A8874A]" />

        <p className="text-[#A8874A] tracking-widest text-sm">
          CLASS OF 2025
        </p>

        <h3 className="font-serif text-3xl mt-3">
          A Moment Worth Celebrating.
        </h3>

        <p className="mt-4 text-gray-600 leading-8">
         Today, I celebrate more than a certificate. I celebrate every lesson, every challenge overcome, every prayer answered, every achievement, and every victory that shaped my journey and brought me to this beautiful moment.
        </p>
      </motion.div>

    </div>
  </div>
</section>

<section
  id="achievement"
  className="py-32 px-6 text-center bg-[#173D30] text-[#F8F5ED]"
>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="max-w-3xl mx-auto"
  >
    <p className="text-[#D9BD83] uppercase tracking-[0.3em] text-xs">
      A milestone achieved
    </p>

    <h2 className="font-serif text-5xl md:text-7xl mt-8 leading-tight">
      More Than
      <br />
      A Certificate.
    </h2>

    <div className="w-20 h-px bg-[#D9BD83] mx-auto my-10" />

    <p className="text-lg leading-9 text-[#F1EEE5]">
      This moment means more to me than words can express.
      Behind this achievement are years of learning,
      moments of uncertainty, quiet sacrifices, prayers,
      determination and the courage to keep going.
      There were lessons beyond the classroom and
      experiences that shaped the person I am becoming.
      Today, I look back with pride, grateful for how far
      I have come and excited for all that lies ahead.
    </p>

    <p className="font-serif text-3xl text-[#D9BD83] mt-12">
      Class of 2025
    </p>

    <p className="text-sm tracking-widest mt-3 uppercase">
      Yaba College of Technology
    </p>

    <div className="w-12 h-px bg-[#D9BD83] mx-auto mt-10" />

    <p className="font-serif italic text-xl text-[#D9BD83] mt-8">
      The journey continues...
    </p>
  </motion.div>
</section>

<section
  id="gallery"
  className="py-28 px-6 md:px-16 bg-[#F8F5ED]"
>
  <div className="max-w-6xl mx-auto">

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-center text-[#A8874A] uppercase tracking-[0.3em] text-xs">
        Moments to remember
      </p>

      <h2 className="font-serif text-4xl md:text-6xl text-center mt-6 mb-5 text-[#173D30]">
        A Day to Remember.
      </h2>

      <p className="text-center text-gray-600 mb-16">
        Every picture tells a part of my story.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {[1, 2, 3, 4, 5, 6].map((photo, index) => (
        <motion.div
          key={photo}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: index * 0.12 }}
          className={`group relative overflow-hidden rounded-2xl bg-[#E8E1D3] shadow-md ${
           index === 0 ? "sm:col-span-2" : ""
          }`}
        >
          <Image
            src={`/images/convo${photo}.JPG`}
            alt={`Convocation memory ${photo}`}
            width={1000}
            height={1200}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        </motion.div>
      ))}

    </div>

    <p className="text-center font-serif italic text-[#A8874A] text-xl mt-14">
      Little moments. Beautiful memories. A lifetime of gratitude.
    </p>

  </div>
</section>

<section
  id="gratitude"
  className="py-32 px-6 bg-[#F1EEE5] text-center"
>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="max-w-3xl mx-auto"
  >
    <p className="text-[#A8874A] uppercase tracking-[0.3em] text-xs">
      A heart full of gratitude
    </p>

    <h2 className="font-serif text-5xl md:text-7xl mt-8 text-[#173D30]">
      It Took Grace.
    </h2>

    <div className="w-20 h-px bg-[#C5A15B] mx-auto my-10" />

    <p className="text-lg leading-9 text-gray-600">
  And here I am, giving all the glory to God, who has brought me this far.
  Thank You, Lord, for Your endless mercy and grace that have sustained me
  throughout this journey.
</p>

<p className="text-lg leading-9 text-gray-600 mt-7">
  To my late parents, Sunday and Julie Evuasia, you may not be here to witness
  this beautiful moment, but here is your little girl, saying a big thank you
  for being such an important part of her life and journey. I wish you could
  see this day, but I carry you both in my heart, always.
</p>

<p className="text-lg leading-9 text-gray-600 mt-7">
  To my lovely brothers, Lucky and Prosper, you already know the drill.
  This success is our success! Thank you for always having my back and
  standing by me. I couldn't have asked for better brothers.
</p>

<p className="text-lg leading-9 text-gray-600 mt-7">
  To my amazing friends who never give up on me, I may not be able to mention
  you all, but please know that I appreciate every one of you. And to my
  baby girl, Morayo, thank you so much for being part of my journey.
</p>

<p className="text-lg leading-9 text-gray-600 mt-7">
  Oh my! Where do I even begin with my dear Victor? Thank you so much for all
  that you do, for your love, support, and for always showing up. I appreciate
  you more than words can say.
</p>

<p className="text-lg leading-9 text-gray-600 mt-7">
  To my fantastic family, I may not be the most outspoken, but I will forever
  cherish the moments we share. Thank you for making Physics such a fun course
  to study. You made the journey even more memorable!
</p>

<p className="text-lg leading-9 text-gray-600 mt-7">
  And finally, to my supervisor, Mr. Oba, and my wonderful lecturers, of course,
  you are not forgotten! Thank you for your guidance, knowledge, and
  contributions to this journey. A big shout-out to you all!
</p>

    <div className="w-16 h-px bg-[#C5A15B] mx-auto my-10" />

    <p className="font-serif text-2xl md:text-3xl text-[#173D30] italic leading-relaxed">
      Every step, every lesson, every prayer
      and every victory has been a gift.
    </p>

    <p className="text-[#A8874A] uppercase tracking-[0.3em] text-xs mt-12">
      Forever grateful.
    </p>
  </motion.div>
</section>

<section
  id="closing"
  className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-28 text-center bg-[#173D30] text-[#F8F5ED]"
>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2 }}
    className="max-w-3xl mx-auto"
  >
    <p className="text-[#D9BD83] uppercase tracking-[0.3em] text-xs">
      One chapter ends. Another begins.
    </p>

    <h2 className="font-serif text-5xl md:text-7xl mt-8 leading-tight">
      And So, A New
      <br />
      Chapter Begins.
    </h2>

    <div className="w-20 h-px bg-[#D9BD83] mx-auto my-10" />

    <p className="text-lg leading-9 text-[#F1EEE5]">
      This is not the end of my journey. It is a celebration
      of how far I have come, the lessons I have learned,
      the grace that has carried me, and the beautiful
      possibilities that lie ahead. My story continues,
      and I cannot wait to see what comes next.
    </p>

    <p className="font-serif text-3xl md:text-4xl text-[#D9BD83] mt-12">
      Avwopiabro Favour Ada
    </p>

    <p className="mt-4 text-[#F1EEE5] tracking-wide">
      HND Physics with Electronics
    </p>

    <p className="mt-8 text-sm text-[#F1EEE5]/80">
      Class of 2025 · Yaba College of Technology
    </p>

    <div className="w-16 h-px bg-[#D9BD83] mx-auto my-10" />

    <p className="font-serif italic text-xl text-[#D9BD83]">
      The best is yet to come. ✨
    </p>

    <p className="mt-12 text-xs tracking-[0.3em] uppercase text-[#D9BD83]">
      Made with gratitude.
    </p>
  </motion.div>
</section>


      <footer className="text-center py-10 text-xs text-gray-500">
        Made with gratitude ♡
      </footer>
    </main>
  );
}