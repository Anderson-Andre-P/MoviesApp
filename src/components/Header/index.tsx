import React from "react";
import {
  Container,
  User,
  UserName,
  HeaderContent,
  ProfileImage,
  HeaderIcon,
} from "./styles";

interface HeaderProps {
  src: string;
}

export function Header({ src }: HeaderProps) {
  return (
    <Container>
      <HeaderContent>
        <User>
          <ProfileImage source={{ uri: `${src}` }} />
          <UserName>Anderson</UserName>
        </User>
        <HeaderIcon name="bell" />
      </HeaderContent>
    </Container>
  );
}
