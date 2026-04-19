import { useQuery } from '@tanstack/react-query';
import { gamesService } from '@/services/gamesService';
import { queryKeys } from '@/constants/queryKeys';

export function useFeaturedGames() {
  return useQuery({ queryKey: queryKeys.featuredGames, queryFn: gamesService.getFeaturedGames, select: (data) => data.data || [] });
}

export function useTrendingGames() {
  return useQuery({ queryKey: queryKeys.trendingGames, queryFn: gamesService.getTrendingGames, select: (data) => data.data || [] });
}

export function useDownloadGames(params) {
  return useQuery({ queryKey: queryKeys.downloadGames(params), queryFn: () => gamesService.getDownloadGames(params) });
}

export function useOnlineGames(params) {
  return useQuery({ queryKey: queryKeys.onlineGames(params), queryFn: () => gamesService.getOnlineGames(params) });
}

export function useGameDetails(slug) {
  return useQuery({ queryKey: queryKeys.gameDetails(slug), queryFn: () => gamesService.getGameBySlug(slug), enabled: Boolean(slug), select: (data) => data.data });
}

export function useSearchGames(params) {
  return useQuery({ queryKey: queryKeys.searchGames(params), queryFn: () => gamesService.searchGames(params), enabled: Boolean(params?.search), select: (data) => data.data });
}
