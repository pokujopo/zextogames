import { useQuery } from '@tanstack/react-query';
import { userService } from '@/services/userService';
import { queryKeys } from '@/constants/queryKeys';

export function useProfile() {
  return useQuery({ queryKey: queryKeys.userProfile, queryFn: userService.getProfile, select: (data) => data.data || data });
}
