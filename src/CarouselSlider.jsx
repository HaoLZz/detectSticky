import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: sticky;
  top: 75px;
  width: 50vw;
  margin: 0 auto;
  background-color: ${(props) => (props.$isSticky ? "#BF4F74" : "beige")};
  text-align: center;
`;

const Carousel = styled.div`
  overflow: hidden;
  margin-bottom: 2.5rem;
`;
const SliderContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  transform: translateX(${(props) => props.$activeSlide * -100}%);
  transition: transform 0.7s ease-in-out;
`;
const SliderItem = styled.div`
  flex: 0 0 100%;
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
  visibility: ${(props) => (props.$isActive ? "visible" : "hidden")};
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

const itemLength = 3;

const CarouselSlider = ({ carouselRef, isSticky }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((c) => (c === itemLength - 1 ? 0 : c + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((c) => (c === 0 ? itemLength - 1 : c - 1));
  };

  return (
    <Container ref={carouselRef} $isSticky={isSticky}>
      <Carousel>
        <SliderContainer $activeSlide={currentSlide}>
          <SliderItem $isActive={currentSlide === 0}>
            <ImageWrapper>
              <img src="https://placeholder.pics/svg/300x150" alt="item1" />
              <p>Item 1</p>
            </ImageWrapper>
          </SliderItem>
          <SliderItem $isActive={currentSlide === 1}>
            <ImageWrapper>
              <img src="https://placeholder.pics/svg/350x200" alt="item2" />
              <p>Item 2</p>
            </ImageWrapper>
          </SliderItem>
          <SliderItem $isActive={currentSlide === 2}>
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
  );
};

export default CarouselSlider;
