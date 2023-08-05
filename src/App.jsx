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
  height: 200vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Auctor eu augue ut
        lectus arcu bibendum at. Vulputate dignissim suspendisse in est ante.
        Morbi tristique senectus et netus et malesuada. Vitae congue eu
        consequat ac felis donec et odio. Placerat orci nulla pellentesque
        dignissim enim sit amet venenatis. Laoreet non curabitur gravida arcu ac
        tortor dignissim convallis. Eget nulla facilisi etiam dignissim diam
        quis. Tincidunt id aliquet risus feugiat in ante metus. Congue nisi
        vitae suscipit tellus mauris a diam maecenas sed. Egestas sed tempus
        urna et pharetra pharetra massa. Vulputate eu scelerisque felis
        imperdiet proin. Magna etiam tempor orci eu lobortis elementum nibh.
        Tortor condimentum lacinia quis vel eros donec ac odio. Tellus in metus
        vulputate eu scelerisque felis imperdiet proin fermentum. Feugiat in
        fermentum posuere urna nec tincidunt praesent. Pulvinar pellentesque
        habitant morbi tristique senectus. Eros donec ac odio tempor orci
        dapibus. Mi bibendum neque egestas congue quisque egestas. Fames ac
        turpis egestas maecenas pharetra convallis posuere morbi leo. Id nibh
        tortor id aliquet lectus proin nibh nisl condimentum. Nibh praesent
        tristique magna sit amet purus gravida quis blandit. Magna sit amet
        purus gravida quis blandit turpis. Amet consectetur adipiscing elit ut
        aliquam purus. Euismod in pellentesque massa placerat duis ultricies
        lacus sed. Egestas tellus rutrum tellus pellentesque. Amet porttitor
        eget dolor morbi non arcu risus quis. Pulvinar etiam non quam lacus
        suspendisse faucibus interdum posuere. Turpis egestas sed tempus urna et
        pharetra pharetra massa massa. Urna duis convallis convallis tellus id.
        Ullamcorper sit amet risus nullam eget. Neque ornare aenean euismod
        elementum. Mus mauris vitae ultricies leo. Blandit aliquam etiam erat
        velit. Pretium aenean pharetra magna ac placerat. Faucibus nisl
        tincidunt eget nullam non nisi est sit amet. Praesent tristique magna
        sit amet. Vitae auctor eu augue ut lectus. Amet consectetur adipiscing
        elit pellentesque habitant morbi tristique. Porttitor rhoncus dolor
        purus non enim. Euismod in pellentesque massa placerat duis ultricies
        lacus.
      </ContentSection>
    </MainContainer>
  );
};

export default App;
