import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View``;

export const HeaderContent = styled.View`
  margin-top: 50px;
  margin-bottom: 20px;
  height: auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px 0;
`;

export const User = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserName = styled.Text`
  margin-left: 10px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
export const HeaderIcon = styled(Feather)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
`;
