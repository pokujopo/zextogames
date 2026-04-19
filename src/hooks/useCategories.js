import { useQuery } from '@tanstack/react-query';
import { categoriesService } from '@/services/categoriesService';
import { queryKeys } from '@/constants/queryKeys';

export function useCategories() {
  return useQuery({ queryKey: queryKeys.categories, queryFn: categoriesService.getCategories, select: (data) => data.data || [] });
}

export function useCategoryDetail(slug) {
  return useQuery({ queryKey: queryKeys.categoryDetail(slug), queryFn: () => categoriesService.getCategoryBySlug(slug), enabled: Boolean(slug), select: (data) => data.data });
}
