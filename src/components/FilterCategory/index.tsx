import React, { useState } from "react";
import { ButtonCategory } from "../Buttons/ButtonCategory";
import { Container, Categories } from "./styles";
import theme from "../../global/theme";
const textButton = [
  { id: 1, name: "Now playing" },
  { id: 2, name: "Upcoming" },
  { id: 3, name: "Top rated" },
  { id: 4, name: "Popular" },
];

export function FilterCategory() {
  const [selectedButton, setSelectedButton] = useState(textButton[0].id);

  const isActive = (id: number) => id === selectedButton;

  function handleSelectButtonById(id: number) {
    setSelectedButton(id);
  }

  return (
    <Container>
      <Categories>
        {textButton.map(({ id, name }) => (
          <ButtonCategory
            textButton={name}
            key={id}
            onPress={() => handleSelectButtonById(id)}
            styled={{
              backgroundColor: isActive(id)
                ? `${theme.colors.primary}`
                : "rgba(0,0,0,0.2)",
            }}
          />
        ))}
      </Categories>
    </Container>
  );
}
