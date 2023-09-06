import React from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const TextWrapper = ({ children }: Props) => {
  const text = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0]);
  const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000]);
  const colorChange = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "hsla(180, 7%, 75%, 0.9)",
      "hsla(180, 7%, 75%, 0.9)",
      "#f2994a",
      "#f2994a",
      "#f2994a",
      "#f2994a",
    ]
  );

  return (
    <div ref={text}>
      <motion.p style={{ opacity, x, color: colorChange }}>{children}</motion.p>
    </div>
  );
};

function TextSection() {
  return (
    <TextSectionStyled>
      <TextWrapper>Mastering your life begins with mastering your emotions.</TextWrapper>
      <TextWrapper>Emotions play a profound role in influencing our decisions and actions.</TextWrapper>
      <TextWrapper>By understanding and managing your emotions, you can gain greater control over your life.</TextWrapper>
      <TextWrapper>Emotional mastery involves recognizing and acknowledging your feelings.</TextWrapper>
      <TextWrapper>It also requires the ability to regulate emotions, preventing impulsive reactions.</TextWrapper>
      <TextWrapper>Cultivating emotional intelligence helps you build healthier relationships.</TextWrapper>
      <TextWrapper>Emotional mastery empowers you to respond to challenges with resilience.</TextWrapper>
    </TextSectionStyled>
  );
}

const TextSectionStyled = styled.section`
  p {
    font-size: 1.5rem; /* Increase the font size by 50% */
    color: black; /* Set the text color to black */
    font-weight: bold; /* Apply bold font style */
    font-style: italic; /* Apply cursive font style */
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem; /* Reduced the gap between paragraphs */
  }
`;

export default TextSection;
