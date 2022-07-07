import styled from "styled-components/native";

export const Container = styled.View``;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 10px 15px;
  border-radius: 16px;
  margin-right: 10px;
`;

export const TextButton = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
`;
