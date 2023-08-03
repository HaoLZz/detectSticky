import { useState } from "react";
import styled from "styled-components";

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

const Container = styled.div`
  position: sticky;
  top: 75px;
  width: 50vw;
  margin: 0 auto;
  background-color: beige;
  text-align: center;
`;

const Carousel = styled.div`
  overflow: hidden;
  background-color: aqua;
  margin-bottom: 2.5rem;
`;
const SliderContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  transform: translateX(${(props) => props.activeSlide * -100}%);
  transition: transform 0.7s ease-in-out;
`;
const SliderItem = styled.div`
  flex: 0 0 100%;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  visibility: ${(props) => (props.isActive ? "visible" : "hidden")};
  transition: opacity 1s ease-in-out, visibility 1s ease-in-out;
`;

const ImageWrapper = styled.div`
  height: 100%;
  border: solid 1px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ContentSection = styled.section`
  height: 50vh;
  background-color: coral;
`;

const itemLength = 3;

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((c) => (c === itemLength - 1 ? 0 : c + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((c) => (c === 0 ? itemLength - 1 : c - 1));
  };

  return (
    <>
      <NavHeader>NavHeader placeholder</NavHeader>
      <h5>Dummy title</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed blandit libero
        volutpat sed cras ornare. Semper feugiat nibh sed pulvinar proin gravida
        hendrerit.
      </p>
      <Container>
        <Carousel>
          <SliderContainer activeSlide={currentSlide}>
            <SliderItem isActive={currentSlide === 0}>
              <ImageWrapper>
                <img src="https://placeholder.pics/svg/300x150" alt="item1" />
                <p>Item 1</p>
              </ImageWrapper>
            </SliderItem>
            <SliderItem isActive={currentSlide === 1}>
              <ImageWrapper>
                <img src="https://placeholder.pics/svg/350x200" alt="item2" />
                <p>Item 2</p>
              </ImageWrapper>
            </SliderItem>
            <SliderItem isActive={currentSlide === 2}>
              <ImageWrapper>
                <img src="https://placeholder.pics/svg/300x300" alt="item3" />
                <p>Item 3</p>
              </ImageWrapper>
            </SliderItem>
          </SliderContainer>
        </Carousel>
        <button onClick={prevSlide}>Prev</button>
        <button onClick={nextSlide}>Next</button>
      </Container>
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
    </>
  );
};

export default App;
