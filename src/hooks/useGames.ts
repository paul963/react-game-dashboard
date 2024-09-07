import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../pages/Layout";
import APIClient, { FetchResponse } from "../services/api-client";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000 // 24h
  });

// Add pagnation
// const useGames = (gameQuery: GameQuery) =>
//   useInfiniteQuery<FetchResponse<Game>, Error>({
//     queryKey: ["games", gameQuery],
//     queryFn: ({ pageParam = 1 }) =>
//       apiClient.getAll({
//         params: {
//           genres: gameQuery.genre?.id,
//           parent_platforms: gameQuery.platform?.id,
//           ordering: gameQuery.sortOrder,
//           search: gameQuery.searchText,
//           page: pageParam,
//         },
//       }),
//     getNextPageParam: (lastPage, AllPages) => {
//       return lastPage.next ? allPages.length + 1 : undefined;
//     },
//     staleTime: 24 * 60 * 60 * 1000 // 24h
//   });

export default useGames;
