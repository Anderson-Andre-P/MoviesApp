import React from "react";

import { Container, Carousel } from "./styles";

import { image1, image2, image3 } from "../../assets";
import { CarouselItem } from "../CarouselItem";

export function CarouselContainer() {
  return (
    <Container>
      <Carousel>
        <CarouselItem src={image1} index="1" />
        <CarouselItem src={image2} index="2" />
        <CarouselItem src={image3} index="3" />
        <CarouselItem src={image1} index="4" />
        <CarouselItem src={image2} index="5" />
        <CarouselItem src={image3} index="6" />
      </Carousel>
    </Container>
  );
}
