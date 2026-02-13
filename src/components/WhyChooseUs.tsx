"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
 
const content = [
  {
    title: "Learn From Expert Musicians",
    description:
      "Train with experienced instructors who guide you through every step of your musical journey. From mastering basic techniques to performing complex compositions, our courses help you build confidence and real musical skills.",

  },
  {
    title: "Interactive Practice Sessions",
    description:
      "Practice along with structured lessons designed to improve rhythm, timing, and technique. Our learning approach ensures you understand concepts deeply instead of just memorizing notes or chords.",

  },
  {
    title: "Performance & Stage Confidence",
    description:
      "Prepare for real performances with guided stage training and performance techniques. Learn how to control nerves, connect with audiences, and present your music with confidence.",
  
  },
  {
    title: "Composition & Creativity",
    description:
      "Unlock your creativity by learning songwriting, music composition, and arrangement techniques. Create original music and develop your unique artistic style.",
  
  },
];



const WhyChooseUs = () => {
  return (
    <div>
        <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs