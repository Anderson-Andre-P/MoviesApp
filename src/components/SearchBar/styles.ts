import styled from "styled-components/native";
import { SearchBar } from "@rneui/themed";

export const Container = styled.View``;

export const SearchComponent = styled.View`
  padding: 60px 20px 20px;
`;

export const Search = styled(SearchBar).attrs({
  placeholderTextColor: "#888",
  round: 15,
  containerStyle: {
    backgroundColor: "#222",
    borderRadius: 15,
    margin: 0,
    padding: 0,
    borderWidth: 0,
  },
})`
  font-size: 14px;
`;
