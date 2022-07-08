import React from "react";
import { CarouselContainer } from "../../components/CarouselContainer";
import { Film } from "../../components/Film";

import { FilterCategory } from "../../components/FilterCategory";
import { Header } from "../../components/Header";

import { Container, Title, SubTitle } from "./styles";

export function Home() {
  return (
    <Container>
      <Header src={"https://github.com/Anderson-Andre-P.png"} />
      <Title>What do you want to watch?</Title>
      <CarouselContainer />
      <SubTitle>Categories</SubTitle>
      <FilterCategory />
      <Film />
    </Container>
  );
}
