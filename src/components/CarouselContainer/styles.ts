import styled from "styled-components/native";

export const Container = styled.View`
  margin-bottom: 20px;
`;

export const Carousel = styled.ScrollView.attrs({
  horizontal: true,
  showHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 24 },
})`
  width: 100%;
`;
