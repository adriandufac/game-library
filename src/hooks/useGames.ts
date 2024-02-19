import useDatas from "./useDatas";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[]; // designed comme ca par l'api
  metacritic: number;
  genres: { genre: Genre }[];
}

const useGames = (selectedGenre: Genre | null) =>
  useDatas<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
