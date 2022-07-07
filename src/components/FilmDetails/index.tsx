import React from "react";
import {
  Container,
  Content,
  Title,
  ContentTitle,
  ReleaseDate,
  Genre,
} from "./styles";

interface FilmDetailsProps {
  title: string;
  date: string;
  genre: string;
}

export function FilmDetails({ title, date, genre }: FilmDetailsProps) {
  return (
    <Container>
      <Content>
        <Title>Title:</Title>
        <ContentTitle>{title}</ContentTitle>
      </Content>
      {/* <ReleaseDate> */}
      <Content>
        <Title>Release Date:</Title>
        <ContentTitle>{date}</ContentTitle>
      </Content>
      {/* </ReleaseDate> */}
      {/* <Genre> */}
      <Content>
        <Title>Genre:</Title>
        <ContentTitle>{genre}</ContentTitle>
      </Content>
      {/* </Genre> */}
    </Container>
  );
}
