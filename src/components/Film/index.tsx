import React from "react";
import { image3, image5, image6, image7, image8, image9 } from "../../assets";
import { FilmDetails } from "../FilmDetails";
import {
  Container,
  FilmPosterDetails,
  FilmPoster,
  FilmContent,
  FilmOptions,
  IconSave,
  IconRating,
  FilmCarousel,
} from "./styles";

export function Film() {
  return (
    <Container>
      <FilmCarousel>
        <FilmContent>
          <FilmPosterDetails>
            <FilmPoster source={image5} />
            <FilmDetails
              title="Deadpool"
              date="2016-02-11"
              genre="Action, Comedy"
            />
          </FilmPosterDetails>
          <FilmOptions>
            <IconSave name="bookmark" />
            <IconRating name="star" />
          </FilmOptions>
        </FilmContent>

        <FilmContent>
          <FilmPosterDetails>
            <FilmPoster source={image6} />
            <FilmDetails
              title="Loki"
              date="2021-06-14"
              genre="Action, Aventure"
            />
          </FilmPosterDetails>
          <FilmOptions>
            <IconSave name="bookmark" />
            <IconRating name="star" />
          </FilmOptions>
        </FilmContent>

        <FilmContent>
          <FilmPosterDetails>
            <FilmPoster source={image7} />
            <FilmDetails
              title="Loki"
              date="2021-06-14"
              genre="Action, Aventure"
            />
          </FilmPosterDetails>
          <FilmOptions>
            <IconSave name="bookmark" />
            <IconRating name="star" />
          </FilmOptions>
        </FilmContent>

        <FilmContent>
          <FilmPosterDetails>
            <FilmPoster source={image7} />
            <FilmDetails
              title="Loki"
              date="2021-06-14"
              genre="Action, Aventure"
            />
          </FilmPosterDetails>
          <FilmOptions>
            <IconSave name="bookmark" />
            <IconRating name="star" />
          </FilmOptions>
        </FilmContent>
      </FilmCarousel>
    </Container>
  );
}
