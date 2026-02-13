"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Joining this music school completely changed my confidence. I went from barely playing chords to performing full songs on stage.",
    name: "Arjun Mehta",
    title: "Guitar Student",
  },
  {
    quote:
      "The instructors explain music theory in such a simple way. I finally understand how songs are actually built.",
    name: "Riya Sharma",
    title: "Piano Student",
  },
  {
    quote:
      "The vocal training sessions helped me improve my range and control. I can now sing without straining my voice.",
    name: "Neha Kapoor",
    title: "Vocal Training Student",
  },
  {
    quote:
      "I loved how practical the lessons are. Instead of only theory, we actually play music in every class.",
    name: "Kabir Verma",
    title: "Drums Student",
  },
  {
    quote:
      "The teachers are very supportive and patient. They helped me prepare for my first live performance.",
    name: "Sneha Iyer",
    title: "Performance Program Student",
  },
  {
    quote:
      "I joined as a complete beginner and now I can play my favorite songs confidently. The course structure is amazing.",
    name: "Rahul Nair",
    title: "Beginner Guitar Student",
  },
  {
    quote:
      "The songwriting classes helped me create my own original music. That was always my dream.",
    name: "Aditya Kulkarni",
    title: "Songwriting Student",
  },
  {
    quote:
      "The learning environment is super motivating. Practicing with other students made learning music really fun.",
    name: "Pooja Desai",
    title: "Music Production Student",
  },
];

const TestimonialCards = () => {
  return (
    <div
      className={cn(
        "absolute inset-0",
        "h-160 w-full relative flex flex-col items-center justify-center overflow-hidden",
        "dark:bg-black dark:bg-grid-white/[0.2]",
        "bg-size-[40px_40px]",
        "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
        "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
      )}

    >
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
