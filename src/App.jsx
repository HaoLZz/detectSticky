import { useRef } from "react";
import styled from "styled-components";
import CarouselSlider from "./CarouselSlider";
import useDetectSticky from "./useDetectSticky";

const NavHeader = styled.header`
  margin: 0;
  position: sticky;
  top: 0;
  height: 75px;
  background: white
    repeating-linear-gradient(45deg, #eee, #eee 5px, #fff 5px, #fff 10px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentSection = styled.section`
  background-color: coral;
`;

const MainContainer = styled.main`
  height: 250vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StickyItem = styled.div`
  position: sticky;
  top: 493px;
  background-color: cornsilk;
`;

const titles = ["A", "B", "C", "D"];

const App = () => {
  const headerRef = useRef(null);

  // detects if carousel stuck below header
  const { ref: carouselRef, isSticky } = useDetectSticky(undefined, {
    threshold: [1],
    root: null,
    rootMargin: "-76px 0px 0px 0px",
  });

  return (
    <MainContainer>
      <NavHeader ref={headerRef}>NavHeader placeholder</NavHeader>
      <h5>Dummy title</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed blandit libero
        volutpat sed cras ornare. Semper feugiat nibh sed pulvinar proin gravida
        hendrerit.
      </p>
      <CarouselSlider carouselRef={carouselRef} isSticky={isSticky} />
      <ContentSection>
        {titles.map((title) => (
          <StickyItem key={title}>
            <h6>{title}</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Maecenas sed enim ut sem viverra aliquet eget sit.
            </p>
          </StickyItem>
        ))}
      </ContentSection>
    </MainContainer>
  );
};

export default App;
