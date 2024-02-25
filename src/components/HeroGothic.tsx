import React, { useState, useEffect } from "react";
import HeroA from "../assets/hero1.png";
import HeroB from "../assets/hero2.png";
import HeroC from "../assets/hero3.png";
import HeroD from "../assets/hero4.png";
import HeroE from "../assets/hero5.png";
import "./Hero.css";

interface Slide {
  image: string;
  text: string;
  desc: string;
}

const stub: Slide[] = [
  {
    image: HeroA,
    text: "AI Empowered. Infinite possibilities.",
    desc: " Empower Your Business Today: Unlock Success with Cutting-Edge AI solutions.",
  },
  {
    image: HeroB,
    text: "LLMS: Empowering Business Growth!",
    desc: "Personalized Growth: Boost Productivity with Tailored LLMS Solutions.",
  },
  {
    image: HeroC,
    text: "Elevate Through AI Chatbots.",
    desc: "Transform Customer Engagement: Harness AI Chatbots for Exponential Growth.",
  },
  {
    image: HeroD,
    text: "AI Automates. Efficiency Amplified.",
    desc: "Streamline Workflows: Efficiency Amplified through AI Automation Solutions.",
  },
  {
    image: HeroE,
    text: "Content, Elevated. AI-Powered.",
    desc: "Fuel Your Brand's Success with AI-Powered Content Generation Solutions.",
  },
];

const HeroGothic: React.FC = () => {
  const [active, setActive] = useState<number | null>(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  function handleSetActive(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): void {
    const index = parseInt(e.currentTarget.dataset.slide!, 10);
    setActive(index);
  }

  function handleTouchStart(e: React.TouchEvent<HTMLAnchorElement>): void {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e: React.TouchEvent<HTMLAnchorElement>): void {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd(): void {
    if (touchStart - touchEnd > 50) {
      setActive((state) =>
        state === null || state + 1 >= stub.length ? null : state + 1
      );
    } else if (touchStart - touchEnd < -50) {
      setActive((state) =>
        state === null || state - 1 < 0 ? null : state - 1
      );
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((state) =>
        state === null || state + 1 >= stub.length ? 0 : state + 1
      );
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="hero--gothic accelerated h-[30vh] md:h-[50vh]">
      {stub.map((item, index) => (
        <a
          key={index}
          data-slide={index}
          onClick={handleSetActive}
          role="button"
          className={`hero--gothic__slide rounded-lg md:rounded-2xl mr-1 md:mr-5 ${
            active === index ? "active" : ""
          }`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={item.image}
            alt={`Slide ${index}`}
            className="rounded-lg md:rounded-2xl"
          />
          <div className="text absolute left-[5px] md:left-[40px] bottom-[60px] text-[30px] hidden md:inline-block">
            {item.text}
            <p>{item.desc}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default HeroGothic;
