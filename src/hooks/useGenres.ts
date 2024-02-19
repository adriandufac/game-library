import useDatas from "./useDatas";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const useGenres = () => useDatas<Genre>("/genres");
export default useGenres;
