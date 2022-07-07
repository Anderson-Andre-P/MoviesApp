import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  margin-bottom: 20px;
  padding: 60px 20px 0;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  margin-bottom: 20px;
  padding: 0 20px 0;
`;
