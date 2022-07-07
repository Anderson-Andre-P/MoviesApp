import React from "react";
import { CarouselContainer } from "../../components/CarouselContainer";
import { Film } from "../../components/Film";
// import { FilmsFiltered } from "../../components/FilmsFiltered";
import { FilterCategory } from "../../components/FilterCategory";

import { Container, Title, SubTitle } from "./styles";

export function Home() {
  return (
    <Container>
      <Title>What do you want to watch?</Title>
      <CarouselContainer />
      <SubTitle>Categories</SubTitle>
      <FilterCategory />
      <Film />
    </Container>
  );
}
