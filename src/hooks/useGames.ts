import { GameQuery } from "../App";
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
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useDatas<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sort,
        search: gameQuery.search,
      },
    },
    [gameQuery]
  );

export default useGames;
