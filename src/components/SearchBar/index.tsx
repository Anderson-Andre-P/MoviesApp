import React, { useState } from "react";
import { Container, SearchComponent, Search } from "./styles";

export function SearchBar() {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <Container>
      <SearchComponent>
        <Search
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
        />
      </SearchComponent>
    </Container>
  );
}
