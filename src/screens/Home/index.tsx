import React from "react";
import { CarouselContainer } from "../../components/CarouselContainer";
import { FilterCategory } from "../../components/FilterCategory";

import { Container, Title, SubTitle } from "./styles";

export function Home() {
  return (
    <Container>
      <Title>What do you want to watch?</Title>
      <CarouselContainer />
      <SubTitle>Categories</SubTitle>
      <FilterCategory />
    </Container>
  );
}
