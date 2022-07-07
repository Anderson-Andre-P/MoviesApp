import styled from "styled-components/native";

export const Container = styled.View``;

export const CarouselFilm = styled.View`
  /* border: 1px solid red; */
  height: 170px;
`;

export const Film = styled.Image`
  height: 167px;
  width: 115px;
  margin-right: 24px;
  border-radius: 16px;
`;

export const IndexFilm = styled.Text`
  position: relative;
  line-height: 140px;
  height: 110px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.dark};
  font-size: 96px;
  bottom: 110px;
  left: -17px;
  /* border: 1px solid red; */
  text-shadow: 2px 2px 1px ${({ theme }) => theme.colors.primary};
`;
