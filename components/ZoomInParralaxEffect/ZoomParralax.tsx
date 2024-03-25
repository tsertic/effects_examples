"use client";
import React, { useRef } from "react";
import Picture1 from "@/public/assets/images/parallax-zoom/1.jpg";
import Picture2 from "@/public/assets/images/parallax-zoom/2.jpg";
import Picture3 from "@/public/assets/images/parallax-zoom/3.jpg";
import Picture4 from "@/public/assets/images/parallax-zoom/4.jpg";
import Picture5 from "@/public/assets/images/parallax-zoom/5.jpg";
import Picture6 from "@/public/assets/images/parallax-zoom/6.jpg";
import Picture7 from "@/public/assets/images/parallax-zoom/7.jpg";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
export const ZoomParralax = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const pictures = [
    {
      src: Picture1,
      scale: scale4,
      id: 1,
      styles: "w-[25vw] h-[25vh] ",
    },
    {
      src: Picture2,
      scale: scale4,
      id: 2,
      styles: "top-[-32vh] left-[5vw] w-[35vw] h-[28vh]",
    },
    {
      src: Picture3,
      scale: scale4,
      id: 3,
      styles: "top-[-10vh] left-[-25vw] w-[20vw] h-[45vh]",
    },
    {
      src: Picture4,
      scale: scale4,
      id: 4,
      styles: "left-[27vw] w-[25vw] h-[25vh]",
    },
    {
      src: Picture5,
      scale: scale4,
      id: 5,
      styles: "top-[27.5vh] left-[5vw] w-[20vw] h-[25vh]",
    },
    {
      src: Picture6,
      scale: scale4,
      id: 6,
      styles: "top-[27.5vh] left-[-23vw] w-[30vw] h-[25vh]",
    },
    {
      src: Picture7,
      scale: scale4,
      id: 7,
      styles: "top-[23vh] left-[25vw] w-[15vw] h-[15vh]",
    },
  ];
  return (
    <div className="h-[300vh] relative" ref={container}>
      <div className=" sticky top-0 h-[100vh] bg-orange-500 overflow-hidden">
        {pictures.map(({ src, scale, id, styles }) => {
          return (
            <motion.div
              style={{ scale }}
              className=" w-full h-full absolute top-0 flex items-center justify-center"
              key={id}
            >
              <div className={cn("relative", styles)}>
                <Image
                  src={src}
                  fill
                  alt="image"
                  placeholder="blur"
                  className="cover"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
