import { categories, mockGames } from './games';

const delay = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms));

function applyFilters(list, params = {}) {
  const { search = '', genre = '', platform = '', sort = 'latest', type = '' } = params;
  let filtered = [...list];

  if (type) filtered = filtered.filter((game) => game.type === type);
  if (search) filtered = filtered.filter((game) => game.title.toLowerCase().includes(search.toLowerCase()));
  if (genre) filtered = filtered.filter((game) => game.genre.toLowerCase() === genre.toLowerCase());
  if (platform) filtered = filtered.filter((game) => game.platform.some((item) => item.toLowerCase() === platform.toLowerCase()));

  if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
  else if (sort === 'name') filtered.sort((a, b) => a.title.localeCompare(b.title));
  else filtered.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));

  return filtered;
}

function paginate(list, page = 1, limit = 6) {
  const start = (page - 1) * limit;
  const data = list.slice(start, start + limit);
  return {
    data,
    meta: {
      page,
      limit,
      total: list.length,
      totalPages: Math.ceil(list.length / limit),
    },
  };
}

export const mockApi = {
  async getFeaturedGames() {
    await delay();
    return { data: mockGames.filter((game) => game.featured) };
  },
  async getTrendingGames() {
    await delay();
    return { data: mockGames.filter((game) => game.trending) };
  },
  async getDownloadGames(params = {}) {
    await delay();
    return paginate(applyFilters(mockGames, { ...params, type: 'download' }), params.page, params.limit || 6);
  },
  async getOnlineGames(params = {}) {
    await delay();
    return paginate(applyFilters(mockGames, { ...params, type: 'online' }), params.page, params.limit || 6);
  },
  async getGameBySlug(slug) {
    await delay();
    return { data: mockGames.find((game) => game.slug === slug) || null };
  },
  async searchGames(params = {}) {
    await delay();
    const filtered = applyFilters(mockGames, params);
    const categoriesFound = categories.filter((category) =>
      category.name.toLowerCase().includes((params.search || '').toLowerCase()),
    );
    return { data: { games: filtered, categories: categoriesFound } };
  },
  async getCategories() {
    await delay();
    return { data: categories };
  },
  async getCategoryBySlug(slug) {
    await delay();
    const category = categories.find((item) => item.slug === slug);
    return {
      data: {
        ...category,
        games: mockGames.filter((game) => game.category.toLowerCase() === category?.name.toLowerCase()),
      },
    };
  },
  async loginUser(payload) {
    await delay(600);
    return { data: { token: 'mock-token', user: { id: 1, username: payload.email.split('@')[0], email: payload.email } } };
  },
  async registerUser(payload) {
    await delay(700);
    return { data: { token: 'mock-token', user: { id: 2, username: payload.username, email: payload.email } } };
  },
  async getProfile() {
    await delay();
    return { data: { username: 'zexto_player', email: 'player@zexto.com', avatar: '', stats: { favorites: 5, recent: 3, downloads: 28 } } };
  },
};
