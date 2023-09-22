import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatfform = () => ({ data: platforms, isLoading: false, error: null });

export default usePlatfform;
