import { useQuery } from "@tanstack/react-query";
import { Gallery } from "../entities/Gallery";
import APIClient from "../services/api-client";

const useGallery = (gameId: number) => {
const apiClient = new APIClient<Gallery>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useGallery;