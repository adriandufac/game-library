import useDatas from "./useDatas";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useDatas<Platform>("/platforms/lists/parents");
export default usePlatforms;
