import useDatas from "./useDatas";

export interface Plateform {
  id: number;
  name: string;
  slug: string;
}

const usePlateforms = () => useDatas<Plateform>("/platforms/lists/parents");
export default usePlateforms;
