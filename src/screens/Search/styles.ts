import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const ContentNotSearch = styled.View`
  align-items: center;
  justify-content: space-around;
  margin-top: 100px;
  height: 170px;
`;

export const SearchIcon = styled(Feather)`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;
export const TitleNotFound = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  text-align: center;
`;

export const PhraseNotFound = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  text-align: center;
  opacity: 0.4;
`;
