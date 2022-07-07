import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const FilmCarousel = styled.ScrollView.attrs({
  vertical: true,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 20,
    paddingBottom: 20,
  },
})`
  /* padding-bottom: 20px; */
`;

export const FilmContent = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;
`;

export const FilmPosterDetails = styled.View`
  flex-direction: row;
`;

export const FilmPoster = styled.Image`
  height: 142px;
  width: 95px;
  border-radius: 5px;
  margin-right: 10px;
`;

export const FilmOptions = styled.View`
  align-items: center;
  justify-content: center;
`;

export const IconSave = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};
  height: 25px;
  width: 25px;
  font-size: 25px;
  margin-bottom: 20px;
`;

export const IconRating = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};
  height: 25px;
  width: 25px;
  font-size: 25px;
`;
