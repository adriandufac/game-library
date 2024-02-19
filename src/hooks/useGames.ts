import useDatas from "./useDatas";

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
}

const useGames = () => useDatas<Game>("/games");

export default useGames;
