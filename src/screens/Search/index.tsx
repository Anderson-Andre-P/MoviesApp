import React from "react";
import { SearchBar } from "../../components/SearchBar";
import {
  Container,
  ContentNotSearch,
  SearchIcon,
  TitleNotFound,
  PhraseNotFound,
} from "./styles";

export function Search() {
  return (
    <Container>
      <SearchBar />
      <ContentNotSearch>
        <SearchIcon name="search" />
        <TitleNotFound>
          we are sorry, we can {"\n"}not find the movie.
        </TitleNotFound>
        <PhraseNotFound>
          Find your movie by Type title, {"\n"}categories, years, etc{" "}
        </PhraseNotFound>
      </ContentNotSearch>
    </Container>
  );
}
