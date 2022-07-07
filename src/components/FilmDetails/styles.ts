import styled from "styled-components/native";

export const Container = styled.View``;

export const Content = styled.View`
  /* margin-bottom: 10px; */
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const ContentTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
`;

export const ReleaseDate = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;

export const Genre = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;
