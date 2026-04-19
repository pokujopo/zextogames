export const queryKeys = {
  featuredGames: ['games', 'featured'],
  trendingGames: ['games', 'trending'],
  downloadGames: (params) => ['games', 'download', params],
  onlineGames: (params) => ['games', 'online', params],
  gameDetails: (slug) => ['games', 'details', slug],
  searchGames: (params) => ['games', 'search', params],
  categories: ['categories'],
  categoryDetail: (slug) => ['categories', slug],
  favorites: ['favorites'],
  userProfile: ['user', 'profile'],
};
