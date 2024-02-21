import useDatas from "./useDatas";

import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const useGenres = () => ({ datas: genres, isLoading: false, error: null });

/** Use this if you want to dynamicly fetch genres from API */
/* const useGenres = () => useDatas<Genre>("/genres"); */
export default useGenres;
