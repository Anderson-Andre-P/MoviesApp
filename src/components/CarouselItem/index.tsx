import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import { Container, CarouselFilm, Film, IndexFilm } from "./styles";

interface Props {
  index: string;
  src: ImageSourcePropType;
}

export function CarouselItem({ src, index }: Props) {
  return (
    <Container>
      <CarouselFilm>
        <Film source={src} />
        <IndexFilm>{index}</IndexFilm>
      </CarouselFilm>
    </Container>
  );
}
