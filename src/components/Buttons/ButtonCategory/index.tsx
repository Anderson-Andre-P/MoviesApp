import React from "react";
import { Container, Button, TextButton } from "./styles";

interface ButtonCategoryProps {
  textButton: string;
  onPress: () => void;
  styled: object;
}

export function ButtonCategory({
  textButton,
  onPress,
  styled,
}: ButtonCategoryProps) {
  return (
    <Container>
      <Button style={styled} onPress={onPress}>
        <TextButton>{textButton}</TextButton>
      </Button>
    </Container>
  );
}
