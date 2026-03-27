"use client";

import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import {
  DiJavascript1,
  DiGit,
  DiNodejsSmall,
  DiReact
} from "react-icons/di";

import {
  SiTypescript,
  SiPostman,
  SiExpress,
  SiNextdotjs
} from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 py-20 sm:py-36">

      <div className="absolute inset-0 -z-10 opacity-60">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.6} />
          <directionalLight intensity={1} position={[1, 2, 1]} />

          <Sphere args={[1.2, 64, 64]} scale={1.2}>
            <MeshDistortMaterial
              color="#0ea5e9"
              distort={0.35}
              speed={1.2}
              roughness={0.2}
            />
          </Sphere>

          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden shadow-xl shadow-cyan-500/40 border border-cyan-400/30"
      >
        <Image
          src="/images/hero-profile.png"
          alt="Profil fotoğrafı"
          width={300}
          height={300}
          className="object-cover"
          priority
        />
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_20px_#0ea5e980]"
      >
        Full Stack Developer
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="mt-4 max-w-2xl text-gray-300 text-sm sm:text-lg leading-relaxed"
      >
        Merhaba, ben Ramazan Özkan. Modern web teknolojileri, backend mimarileri 
        ve yapay zeka tabanlı projeler geliştiriyorum. Teknolojiye olan tutkumla sürekli ilerliyorum.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="mt-10 flex flex-wrap justify-center gap-8 text-cyan-300"
      >
        <DiJavascript1 size={36} />
        <SiTypescript size={36} />
        <DiGit size={40} />
        <SiPostman size={36} />
        <SiNextdotjs size={36} className="text-white" />
        <SiExpress size={36} className="text-gray-200" />
        <DiNodejsSmall size={36} />
        <DiReact size={36} />
      </motion.div>

    </section>
  );
}
