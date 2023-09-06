"use client";

import React from "react";
import Header from "./Components/Header/Header";
import styled from "styled-components";
import SectionLayout from "./Components/SectionLayout";
import Card from "./Components/Card";
import { cards } from "./utils/cards";
import Fullpage from "./Components/Fullpage";
import TextSection from "./TextSection";
import Footer from "./Components/Footer";
import ZoomSection from "./Components/ZoomSection";
import HorizontalWrapper from "./Components/HorizontalWrapper";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  return (
    <>
      <Header />
      <MainStyled>
        <SectionLayout>
          <HorizontalWrapper height="40rem" direction={-1400}>
            <div className="cards">
              {cards.map((card, index) => {
                return (
                  <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                );
              })}
            </div>
          </HorizontalWrapper>
        </SectionLayout>

        <Fullpage />

        <SectionLayout>
          <TextSection />
        </SectionLayout>
        
        <SectionLayout>
          <TextSection />
        </SectionLayout>

        {/* YouTube iframe removed */}
        
        <SectionLayout>
          <ZoomSection></ZoomSection>
        </SectionLayout>

        <SectionLayout>
          <TextSection />
        </SectionLayout>

        <Footer />
      </MainStyled>
    </>
  );
}

const MainStyled = styled.main`
  min-height: 100vh;
  width: 100%;

  .cards {
    position: absolute;
    display: grid;
    grid-template-columns: repeat(5, 30rem);
    gap: 4rem;
  }

  /* Styles for other components... */
`;
